import { X } from 'lucide-react'
import { useEffect } from 'react'
import { products } from '../data/products'

function ProductModal({ category, onClose }) {
  const categoryProducts = category
    ? products.filter((product) => product.categoryId === category.id)
    : []

  useEffect(() => {
    if (!category) return

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
  }, [category, onClose])

  if (!category) return null

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="product-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="eyebrow">Menu category</span>
            <h2 id="product-modal-title">{category.name}</h2>
            <p>{category.description}</p>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close product modal">
            <X size={22} />
          </button>
        </div>

        <div className="modal-product-grid">
          {categoryProducts.map((product) => (
            <article className="modal-product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div>
                <span className="badge">{product.badge}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductModal
