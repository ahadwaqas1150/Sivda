import React from 'react';
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        title: "GODADDY HAS MADE EVERYTHING SO EASY!!",
        rating: 5,
        text: "GoDaddy has made creating a beautiful & professional looking website so easy! The email setup was quick too. Anytime I've had a question or even once a technical issue they have solved it in minutes! I have been so impressed with the helpfulness I've received since switching to GoDaddy! I cannot recommend them enough!!",
        name: "Crystal H"
    },
    {
        id: 2,
        title: "GREAT APPROACH FOR THE SMALL BUSINESS",
        rating: 4,
        text: "Great approach for the small business. Nicely packaged to get email and website up and running quickly.",
        name: "Kalpesh Mistry"
    },
    {
        id: 3,
        title: "WE SWITCHED TO GODADDY FROM OUR...",
        rating: 5,
        text: "We switched to GoDaddy from our previous provider and we could not be more pleased. They offer a vast product line to help you meet whatever your goals are. The customer service is by far the best. I'm so glad we switched.",
        name: "Brittan Hill"
    }
];

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <h2>Trusted by 20+ million customers around the world.</h2>
            <div className="testimonials">
                {testimonials.map(testimonial => (
                    <div key={testimonial.id} className="testimonial-card">
                        <h3>{testimonial.title}</h3>
                        <div className="rating">
                            {Array.from({ length: testimonial.rating }).map((_, index) => (
                                <span key={index}>&#9733;</span> // Star symbol
                            ))}
                        </div>
                        <p>{testimonial.text}</p>
                        <p className="testimonial-name">{testimonial.name}</p>
                    </div>
                ))}
            </div>
            <div className="testimonial-nav">
                <button>&#8249;</button> {/* Left arrow */}
                <button>&#8250;</button> {/* Right arrow */}
            </div>
        </div>
    );
};

export default Testimonials;
