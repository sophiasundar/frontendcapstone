import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { API } from './global.js';
import HomeCard from './homePageCard.jsx';
// import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export const HomeRecom = () => {
  const [homePhoneData, setHomePhoneData] = useState([]);
  const scrollContainerRef = useRef(null); // Reference to the scroll container

  const getPhones = () => {
    axios
      .get(`${API}/phones`)
      .then((res) => {
        if (res.status === 401) {
          console.log("Data Not Found!");
        }
        setHomePhoneData(res.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    getPhones();
  }, []);

  // Function to handle scrolling when buttons are clicked
  const handleScroll = (direction) => {
    const scrollAmount = 250; // Amount to scroll on each button click
    if (scrollContainerRef.current) {
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else if (direction === 'right') {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <Card className="py-1 position-relative scrollcard " style={{ width: '38.5rem' }}>
      <h2>Top Deals On Smartphones</h2>
      
      {/* Left Scroll Button */}
      <button
        className="scroll-button left"
        onClick={() => handleScroll('left')}
      >
        &#8249;
      </button>

      <div className="scroll-container py-1" ref={scrollContainerRef}>
        <div className="d-flex">
          {homePhoneData.map((item) => (
            <HomeCard key={item._id} value={item} />
          ))}
        </div>
      </div>

      {/* Right Scroll Button */}
      <button
        className="scroll-button right"
        onClick={() => handleScroll('right')}
      >
        &#8250;
      </button>
    </Card>
  );
};
