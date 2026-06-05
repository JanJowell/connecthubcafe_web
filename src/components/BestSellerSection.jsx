import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { bestSellingProducts } from '../data/products'

function BestSellerSection() {
  return (
    <section className="page-section home-feature-section">
      <div className="section-intro fade-in">
        <span className="eyebrow">Best sellers</span>
        <h1>Guest Favorites</h1>
        <p>Our most-loved drinks and pastries, chosen by the people who gather here every week.</p>
      </div>

      <div className="best-seller-grid">
        {bestSellingProducts.map((product) => (
          <article className="best-seller-card fade-in" key={product.id}>
            <img src={product.image} alt={product.name} />
            <div>
              <span className="badge">Best Seller</span>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <strong>{product.price}</strong>
            </div>
          </article>
        ))}
      </div>

      <div className="home-cta fade-in">
        <div>
          <span className="eyebrow">More to love</span>
          <h2>Discover More of Our Favorites</h2>
          <p>Explore our complete menu and find your next favorite drink or pastry.</p>
        </div>
        <Link to="/menu" className="button button-primary">
          View Full Menu
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}

export default BestSellerSection
