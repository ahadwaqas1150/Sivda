import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./card.css";
import { Rating } from "@mui/material";
import { useState,useEffect } from "react";

function Card() {
  const AfroStyles = [
    {
      "id": 1,
      "title": "Bluehost",
      "description": "I've been using Bluehost for years, and their uptime is impeccable. The customer service is always responsive and helpful. Definitely a five-star experience!",
      "rating": 5
    },
    {
      "id": 2,
      "title": "HostGator",
      "description": "HostGator offers unbeatable pricing and performance. The setup was smooth, and the speed is amazing. I highly recommend them for any website hosting needs!",
      "rating": 5
    },
    {
      "id": 3,
      "title": "SiteGround",
      "description": "SiteGround’s cloud hosting has been fantastic. My website loads quickly, and I love that they offer daily backups. It’s been a perfect hosting solution for my business!",
      "rating": 5
    },
    {
      "id": 4,
      "title": "A2 Hosting",
      "description": "A2 Hosting has exceeded my expectations. Their dedicated server options provide amazing performance, and the security features are top-notch. Five stars from me!",
      "rating": 5
    },
    {
      "id": 5,
      "title": "WP Engine",
      "description": "For WordPress hosting, WP Engine is hands down the best. My website is faster than ever, and their support team is incredibly knowledgeable and helpful!",
      "rating": 5
    },
    {
      "id": 6,
      "title": "iPage",
      "description": "iPage offers amazing value for money. It’s budget-friendly, but the uptime and customer support are still excellent. I’m very happy with the service!",
      "rating": 5
    },
    {
      "id": 7,
      "title": "Kinsta",
      "description": "Kinsta is perfect for managed hosting. The interface is easy to use, and my site runs smoothly with zero downtime. It's truly the best hosting solution I've used!",
      "rating": 5
    }
  ]
  
  
  const settings = {
    dots: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),

    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24"><path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z"/></svg>
        </div>
      </div>
    ),
  };
  
  return (
      <>
      <section className="review-section">
        <div className="content">
  <h1 className="header">Trusted by 20+ million customers around the world.</h1>
  <div className="container">
    <Slider {...settings}>
      {AfroStyles.map((item) => (
        <div key={item.id}>
          {/* <div className="img-body">
            <img src={item.src} alt={item.alt} />
          </div> */}
          <div className="hello">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Rating name="read-only" value={item.rating} readOnly />
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
</section>
      </>
  );
}

const data = [
  {
    name: `John Morgan`,
    img: `/students/John_Morgan.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Ellie Anderson`,
    img: `/students/Ellie_Anderson.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Nia Adebayo`,
    img: `/students/Nia_Adebayo.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Rigo Louie`,
    img: `/students/Rigo_Louie.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    name: `Mia Williams`,
    img: `/students/Mia_Williams.jpg`,
    review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  
];

export default Card;
