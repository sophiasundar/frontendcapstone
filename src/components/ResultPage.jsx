import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { API } from './global.js';
import HomeCard from './homePageCard.jsx';
import NavBar from './navBar/navBar.js';

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true); // New loading state
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('q');

  useEffect(() => {
    if (searchTerm) {
      setLoading(true); // Start loading
      axios
        .get(`${API}/search/?q=${searchTerm}`)
        .then((res) => {
          setSearchResults(res.data);
        })
        .catch((error) => {
          console.error('Error fetching search results:', error);
        })
        .finally(() => {
          setLoading(false); // Stop loading once data is fetched or error occurs
        });
    }
  }, [searchTerm]);

  return (
    <div className="searchResults">
      <NavBar/>
      <br></br>
      <h2>Search Results for: {searchTerm}</h2>

      {loading ? ( 
        <p>Loading results...</p> // Display loading message while fetching data
      ) : (
        <div className="itemGrid">
          {searchResults.length > 0 ? (
            searchResults.map((item) => <HomeCard key={item._id} value={item} />)
          ) : (
            <p>No results found.</p> // Display if no results after loading completes
          )}
        </div>
      )}
    </div>
  );
}

export default SearchResults;


