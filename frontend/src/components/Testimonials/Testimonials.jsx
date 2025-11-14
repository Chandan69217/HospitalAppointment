import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Avery Davis",
      role: "Businessman",
      text: "I think this product is very good for me. I hope it will be even better in the future. And of course I recommend this to my friends as well.",
    },
    {
      name: "Avery Davis",
      role: "Businessman",
      text: "I think this product is very good for me. I hope it will be even better in the future. And of course I recommend this to my friends as well.",
    },
    {
      name: "Avery Davis",
      role: "Businessman",
      text: "I think this product is very good for me. I hope it will be even better in the future. And of course I recommend this to my friends as well.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-title">
        <span className="testimonials-badge">💬 TESTIMONIALS</span>
        <h2>What Our Present Says?</h2>
      </div>

      <div className="testimonials-cards">
        {reviews.map((review, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              {/* ✅ Using image from public folder */}
              <img
                src="/images/tes.jpg"
                alt="User"
                className="testimonial-avatar"
              />
              <div className="testimonial-user">
                <h3>{review.name}</h3>
                <p>{review.role}</p>
              </div>
            </div>

            <p className="testimonial-text">{review.text}</p>

            <div className="testimonial-footer">
              <div className="stars">{"★".repeat(5)}</div>
              {/* ✅ Google logo from public folder */}
              <img
                src="/images/google-img.webp"
                alt="Google"
                className="google-logo"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
