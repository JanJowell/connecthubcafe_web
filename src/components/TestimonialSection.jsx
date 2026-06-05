import { sortedTestimonials } from '../data/testimonials'
import TestimonialCard from './TestimonialCard'

function TestimonialSection() {
  return (
    <section className="page-section testimonial-section">
      <div className="section-intro fade-in">
        <span className="eyebrow">Customer reviews</span>
        <h1>Stories From Our Tables</h1>
        <p>Real notes from guests who found a favorite cup, a quiet corner, or a reason to return.</p>
      </div>

      <div className="testimonial-grid">
        {sortedTestimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
