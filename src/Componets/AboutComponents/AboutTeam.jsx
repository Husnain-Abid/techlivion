import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './AboutTeam.css';

export default function AboutTeam() {
  const teamMembers = [
    { name: "Hamza Bin Ahmad", role: "CEO", imgSrc: "https://via.placeholder.com/270" },
    { name: "Rana Yahya", role: "Technical Director", imgSrc: "https://via.placeholder.com/270" },
    { name: "Armish Ata", role: "Project Director", imgSrc: "https://via.placeholder.com/270" },
    { name: "Umar Waqas Saleem", role: "Director Marketing", imgSrc: "https://via.placeholder.com/270" }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='Team-Back ' id='team'>
      <div className='container py-Team epilogue text-white'>
        <p className='mb-0'>OUR TEAM</p>
        <h1>Team of Designers <br /> and Developers</h1>

        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className='team-member'>
              <div className='d-flex justify-content-center align-items center team-member-content'>
                <img src={member.imgSrc} alt={member.name} className="team-member-img " />
              </div>
              <h4 className='text-center mb-0 mt-20'>{member.name}</h4>
              <p className='text-center '>{member.role}</p>
               
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
