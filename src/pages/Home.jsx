import { ArrowRight, Coffee } from 'lucide-react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero-page">
      <div className="hero-overlay">
        <div className="hero-content fade-in">
          <span className="eyebrow">
            <Coffee size={18} />
            Freshly brewed daily
          </span>
          <h1>Where Coffee Brings People Together</h1>
          <p>
            Enjoy handcrafted coffee, refreshing beverages, and delicious pastries in a welcoming
            environment.
          </p>
          <div className="hero-actions">
            <Link to="/menu" className="button button-primary">
              Explore Menu
              <ArrowRight size={18} />
            </Link>
            <Link to="/community" className="button button-secondary">
              Join Community
            </Link>
          </div>
        </div>
        <blockquote className="hero-verse fade-in">“Come and see that the Lord is good.” — Psalm 34:8</blockquote>
      </div>
    </section>
  )
}

export default Home
