import { useState } from 'react'
import ProductModal from '../components/ProductModal'
import { categories } from '../data/categories'
import { products } from '../data/products'

function ProductGrid({ title, id, items }) {
  return (
    <section className="menu-section" id={id}>
      <div className="section-heading">
        <span className="eyebrow">Connecthub favorites</span>
        <h2>{title}</h2>
      </div>
      <div className="product-grid">
        {items.map((item) => (
          <article className="product-card fade-in" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <span className="badge">{item.badge}</span>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <strong>{item.price}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const frappeItems = products.filter((product) => product.categoryId === 'frappes').slice(0, 6)
  const drinkItems = products.filter((product) => ['coffee', 'non-coffee', 'milk-tea'].includes(product.categoryId)).slice(0, 6)
  const pastrySnackItems = products.filter((product) => ['pastries', 'snacks'].includes(product.categoryId)).slice(0, 6)

  return (
    <section className="page-section menu-page">
      <div className="section-intro fade-in">
        <span className="eyebrow">Cafe menu</span>
        <h1>Fresh Sips & Baked Comforts</h1>
        <p>Choose a category and open a complete product list prepared for every kind of cafe day.</p>
        <p>"So whether you eat or drink, or whatever you do, do it all for the glory of God." - 1 Corinthians 10:31</p>
      </div>

      <div className="category-grid menu-category-grid">
        {categories.map((category) => (
          <button
            type="button"
            className="category-card fade-in"
            key={category.id}
            onClick={() => setSelectedCategory(category)}
          >
            <img src={category.image} alt="" />
            <span>{category.name}</span>
            <p>{category.description}</p>
          </button>
        ))}
      </div>

      <ProductGrid title="Frappes" id="frappes" items={frappeItems} />
      <ProductGrid title="Coffee, Non-Coffee & Milk Tea" id="drinks" items={drinkItems} />
      <ProductGrid title="Pastries & Snacks" id="pastries" items={pastrySnackItems} />

      <ProductModal category={selectedCategory} onClose={() => setSelectedCategory(null)} />
    </section>
  )
}

export default Menu
