import { Camera, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Connecthub Cafe</div>
          <p>Handcrafted coffee, warm conversations, and a welcoming place to connect.</p>
          <div className="social-links" aria-label="Social media links">
            <a href="https://www.facebook.com/connecthubcafe/about" aria-label="Facebook">
              <MessageCircle size={19} />
            </a>
            <a href="https://www.instagram.com/connecthubcafe/" aria-label="Instagram">
              <Camera size={19} />
            </a>
          </div>
        </div>

        <div>
          <h2>Quick Links</h2>
          <div className="footer-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/community">Community</NavLink>
          </div>
        </div>

        <div>
          <h2>Contact Information</h2>
          <ul className="contact-list">
            <li>
              <MapPin size={18} />
              MCHS Bldg. Tirona Hi-way, 4102
            </li>
            <li>
              <Phone size={18} />
              +63 912 345 6789
            </li>
            <li>
              <Mail size={18} />
              kenchristianrdalisay@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">Copyright 2022 Connecthub Cafe. All Rights Reserved.</div>
    </footer>
  )
}

export default Footer
