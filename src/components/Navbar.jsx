import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Menu', path: '/menu' },
  { label: 'Community', path: '/community' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeDrawer = () => setIsOpen(false)

  return (
    <header className="navbar">
      <nav className="nav-container" aria-label="Main navigation">
        <NavLink to="/" className="brand" onClick={closeDrawer}>
          <span className="brand-mark">
            <img src="/images/cafelogo.png" alt="" />
          </span>
          Connect Hub Cafes
        </NavLink>

        <div className="desktop-links">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="icon-button mobile-toggle"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div className={`drawer-backdrop ${isOpen ? 'is-open' : ''}`} onClick={closeDrawer} />
      <aside className={`mobile-drawer ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
        <div className="drawer-header">
          <span className="brand">Connecthub Cafe</span>
          <button type="button" className="icon-button" onClick={closeDrawer} aria-label="Close navigation menu">
            <X size={22} />
          </button>
        </div>
        <div className="drawer-links">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} onClick={closeDrawer}>
              {link.label}
            </NavLink>
          ))}
        </div>
      </aside>
    </header>
  )
}

export default Navbar
