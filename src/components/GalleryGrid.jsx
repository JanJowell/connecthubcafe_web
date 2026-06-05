import { useMemo, useState } from 'react'
import { galleryCategories, galleryItems } from '../data/gallery'
import GalleryModal from './GalleryModal'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
})

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  const visibleItems = useMemo(() => {
    if (activeCategory === 'All') return galleryItems
    return galleryItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      <div className="gallery-filter" aria-label="Gallery categories">
        {['All', ...galleryCategories].map((category) => (
          <button
            type="button"
            key={category}
            className={activeCategory === category ? 'is-active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="community-gallery-grid">
        {visibleItems.map((item) => (
          <button
            type="button"
            className="community-gallery-card fade-in"
            key={item.id}
            onClick={() => setSelectedItem(item)}
          >
            <span className="gallery-image-wrap">
              <img src={item.image} alt={item.caption} />
            </span>
            <span className="gallery-card-copy">
              <strong>{item.caption}</strong>
              <small>{item.category} - {dateFormatter.format(new Date(`${item.uploadDate}T00:00:00`))}</small>
            </span>
          </button>
        ))}
      </div>

      <GalleryModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  )
}

export default GalleryGrid
