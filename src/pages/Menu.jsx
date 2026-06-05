import { menuCategories, menuItems } from '../data/menuData'

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

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
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Menu() {
  return (
    <section className="page-section menu-page">
      <div className="section-intro fade-in">
        <span className="eyebrow">Cafe menu</span>
        <h1>Fresh Sips & Baked Comforts</h1>
        <p>Choose a category and jump into handcrafted favorites prepared for every kind of cafe day.</p>
        <p>"So whether you eat or drink, or whatever you do, do it all for the glory of God." —1 Corinthians 10:31</p>
      </div>

      <div className="category-grid">
        {menuCategories.map((category) => (
          <button
            type="button"
            className="category-card fade-in"
            key={category.id}
            onClick={() => scrollToSection(category.id)}
          >
            <img src={category.image} alt="" />
            <span>{category.title}</span>
            <p>{category.description}</p>
          </button>
        ))}
      </div>

      <ProductGrid title="Frappes" id="frappes" items={menuItems.frappes} />
      <ProductGrid title="Fruit Tea" id="fruit-tea" items={menuItems.fruitTea} />
      <ProductGrid title="Cookies & Pastries" id="pastries" items={menuItems.pastries} />
    </section>
  )
}

export default Menu
