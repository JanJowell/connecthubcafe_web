import GalleryGrid from '../components/GalleryGrid'
import { communityPhotos } from '../data/communityData'

function Community() {
  return (
    <section className="page-section community-page">
      <div className="section-intro fade-in">
        <span className="eyebrow">Gather - Connect - Inspire</span>
        <h1>Our Community</h1>
        <p>We believe meaningful connections happen over a good cup of coffee.</p>
        <p>"Therefore encourage one another and build each other up." - 1 Thessalonians 5:11</p>
      </div>

      <div className="gallery-grid">
        {communityPhotos.map((photo) => (
          <article className="gallery-card fade-in" key={photo.id}>
            <img src={photo.image} alt={photo.title} />
          </article>
        ))}
      </div>

      <div className="community-gallery-section">
        <div className="section-intro fade-in">
          <span className="eyebrow">Community gallery</span>
          <h1>Cafe Life in Frames</h1>
          <p>Browse cafe moments, customers, events, drinks, and pastries from our Connecthub community.</p>
        </div>
        <GalleryGrid />
      </div>
    </section>
  )
}

export default Community
