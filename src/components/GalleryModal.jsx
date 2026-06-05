import { X } from 'lucide-react'
import { useEffect } from 'react'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

function GalleryModal({ item, onClose }) {
  useEffect(() => {
    if (!item) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.classList.add('modal-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="gallery-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="icon-button gallery-close" onClick={onClose} aria-label="Close image preview">
          <X size={22} />
        </button>
        <img src={item.image} alt={item.caption} />
        <div className="gallery-modal-copy">
          <span className="badge">{item.category}</span>
          <h2 id="gallery-modal-title">{item.caption}</h2>
          <time dateTime={item.uploadDate}>{dateFormatter.format(new Date(`${item.uploadDate}T00:00:00`))}</time>
        </div>
      </section>
    </div>
  )
}

export default GalleryModal
