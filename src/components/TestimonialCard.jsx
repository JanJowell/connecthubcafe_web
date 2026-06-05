import { FaStar } from 'react-icons/fa'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card fade-in">
      <div className="testimonial-header">
        <img src={testimonial.photo} alt={testimonial.customerName} />
        <div>
          <h3>{testimonial.customerName}</h3>
          <p>{testimonial.productOrdered}</p>
        </div>
      </div>

      <div className="rating-stars" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, index) => (
          <FaStar key={index} className={index < testimonial.rating ? 'is-filled' : ''} />
        ))}
      </div>

      <p className="testimonial-message">"{testimonial.message}"</p>
      <time dateTime={testimonial.dateSubmitted}>
        {dateFormatter.format(new Date(`${testimonial.dateSubmitted}T00:00:00`))}
      </time>
    </article>
  )
}

export default TestimonialCard
