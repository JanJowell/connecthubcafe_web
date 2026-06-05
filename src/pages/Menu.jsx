import { useEffect, useState } from 'react'
import { menuCategories } from '../data/menuData'

function MenuDialog({ category, onClose }) {
  useEffect(() => {
    if (!category) return undefined

    document.body.classList.add('modal-open')

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [category, onClose])

  if (!category) return null

  return (
    <div className="modal-backdrop menu-modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="menu-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-dialog-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="menu-dialog-header">
          <div>
            <span className="eyebrow">Menu items</span>
            <h2 id="menu-dialog-title">{category.name}</h2>
            <p>{category.description}</p>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close menu dialog">
            X
          </button>
        </div>

        <div className="menu-item-grid">
          {category.items.map((item) => (
            <article className="menu-item-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                {item.variant && <p>{item.variant}</p>}
                {item.price && <strong>{item.price}</strong>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <section className="page-section menu-page">
      <div className="section-intro fade-in">
        <span className="eyebrow">Cafe menu</span>
        <h1>Fresh Sips & Baked Comforts</h1>
        <p>Freshly prepared drinks and baked comforts made for quiet breaks, study sessions, and shared tables.</p>
        <p>"So whether you eat or drink, or whatever you do, do it all for the glory of God." - 1 Corinthians 10:31</p>
      </div>

      <div className="menu-category-grid">
        {menuCategories.map((category) => (
          <button
            type="button"
            className="menu-category-card fade-in"
            key={category.id}
            onClick={() => setSelectedCategory(category)}
          >
            <img src={category.image} alt="" />
            <span>{category.name}</span>
            <p>{category.description}</p>
          </button>
        ))}
      </div>

      <MenuDialog category={selectedCategory} onClose={() => setSelectedCategory(null)} />
    </section>
  )
}

export default Menu
