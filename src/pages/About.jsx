import { Clock, HeartHandshake, MapPin, Phone, Sparkles, Target } from 'lucide-react'

const aboutCards = [
  {
    icon: <Target size={24} />,
    title: 'Mission',
    text: 'To serve excellent coffee and create a welcoming space where people feel seen, rested, and connected.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Vision',
    text: 'To become a neighborhood gathering place where ideas grow, friendships deepen, and community flourishes.',
  },
  {
    icon: <HeartHandshake size={24} />,
    title: 'Cafe Story',
    text: 'Connecthub Cafe began with a simple hope: make every cup a reason for conversation and every visit feel like coming home.',
  },
]

const cafeInfo = [
  { icon: <MapPin size={22} />, title: 'Location', text: 'MCHS Bldg. Tirona Hi-way, 4102, Bacoor City, Cavite Philippines' },
  { icon: <Clock size={22} />, title: 'Opening Hours', text: 'Monday to Saturday, 8:00 AM - 9:00 PM' },
  { icon: <Phone size={22} />, title: 'Contact Number', text: '+63 912 345 6789' },
]

function About() {
  return (
    <section className="page-section about-page">
      <div className="section-intro fade-in">
        <span className="eyebrow">Our story</span>
        <h1>About Us</h1>
        <p>
          Connecthub Cafe is more than a coffee shop. We are a place where conversations begin,
          ideas grow, and communities connect.
        </p>
      </div>

      <div className="card-grid three-columns">
        {aboutCards.map((card) => (
          <article className="info-card fade-in" key={card.title}>
            <div className="card-icon">{card.icon}</div>
            <h2>{card.title}</h2>
            <p>{card.text}</p>
          </article>
        ))}
      </div>

      <div className="info-panel fade-in">
        {cafeInfo.map((item) => (
          <article className="contact-card" key={item.title}>
            <div className="card-icon">{item.icon}</div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default About
