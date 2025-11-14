import React from 'react';

function AllMovies() {
  // Dummy data for 5 movies
  const movies = [
    { id: 1, title: 'Avatar', releaseDate: '2009-12-18' },
    { id: 2, title: 'The Matrix', releaseDate: '1999-03-31' },
    { id: 3, title: 'Inception', releaseDate: '2010-07-16' },
    { id: 4, title: 'Interstellar', releaseDate: '2014-11-07' },
    { id: 5, title: 'Parasite', releaseDate: '2019-10-11' },
  ];

  const handleReviewClick = (movieTitle) => {
    alert(`You want to review: ${movieTitle}`);
  };

  return (
    <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
      
      {/* Main Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">All Movies</h1>
      
      {/* Container for the Movie Cards */}
      <div className="space-y-4">
        
        {/* Iterate over the movies array and create a card for each */}
        {movies.map((movie) => (
          // Key prop is important for React lists
          <div 
            key={movie.id} 
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out border border-gray-200"
          >
            
            {/* Movie Title */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{movie.title}</h3>
            
            {/* Release Date */}
            <h2 className="text-lg text-gray-600 mb-4">Release Date: {movie.releaseDate}</h2>
            
            {/* Action Button */}
            <button 
              onClick={() => handleReviewClick(movie.title)} // Pass the movie title to the handler
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md hover:shadow-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Review this Movie
            </button>
            
          </div>
        ))}

      </div>
    </div>
  );
}

export default AllMovies;
