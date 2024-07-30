
import React, { useState } from 'react';
import snow1 from './snow1.jpeg';
import purana from './purana.webp';
import lake from './lake.webp';
import backgroundImage from './background.jpg'; 
import dome1 from './dome1.webp'; 
import euphoria from './euphoria.webp'
import cabin from './cabin.webp';
import Card from './Card'; 

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);

  const listings = [
    {
      image: snow1,
      title: 'Arctic SnowHotel & Glass Igloos',
      location: 'Finland',
      rating: '4.95',
      price: '$349/night',
      cardStyle: 'card0',
    },
    {
      image: purana,
      title: 'Bo Put, Thailand',
      location: 'Bo Put, Thailand',
      rating: '4.9',
      price: '$523/night',
      cardStyle: 'card1',
    },
    {
      image: lake,
      title: 'Entire cabin in Barnstead, New Hampshire, United States',
      location: 'Paraty, Brazil',
      rating: '4.9',
      price: '$523/night',
      cardStyle: 'card2',
    },
    {
      image: dome1, 
      title: 'Geodesic Dome in Joshua Tree',
      location: 'California, United States',
      rating: '4.91',
      price: '$123/night',
      cardStyle: 'card3',
    },
    {
      image: euphoria, 
      title: 'Euphoria Art Land - The Color House',
      location: 'Πύργος',
      rating: '4.9',
      price: '$150/night',
      cardStyle: 'card4',
    },
    {
      image: cabin, 
      title: 'Magical Cabane B bain Nordique Manoir Bois-en-Ardres',
      location: 'France',
      rating: '4.9',
      price: '$109/night',
      cardStyle: 'card5',
    },
  ];

  const filteredListings = listings.filter(
    (listing) =>
      listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFavorite = (title) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(title)
        ? prevFavorites.filter((item) => item !== title)
        : [...prevFavorites, title]
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full max-w-4xl p-4 bg-black bg-opacity-50 rounded">
        <h1 className="text-5xl font-extrabold text-white mb-8 text-center leading-tight">
          Discover Your Perfect Getaway
        </h1>
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search by title or location"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-900 focus:outline-none focus:border-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing, index) => (
            <Card
              key={index}
              image={listing.image}
              title={listing.title}
              location={listing.location}
              rating={listing.rating}
              price={listing.price}
              cardStyle={listing.cardStyle}
              onFavorite={() => handleFavorite(listing.title)}
              isFavorite={favorites.includes(listing.title)}
            />
          ))}
        </div>
      </div>
      <div className="w-full max-w-4xl p-4 bg-black bg-opacity-50 rounded mt-8">
        <h2 className="text-3xl font-bold text-white mb-4 text-center">Favorites</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings
            .filter((listing) => favorites.includes(listing.title))
            .map((listing, index) => (
              <Card
                key={index}
                image={listing.image}
                title={listing.title}
                location={listing.location}
                rating={listing.rating}
                price={listing.price}
                cardStyle={listing.cardStyle}
                isFavorite={true}
                onFavorite={() => handleFavorite(listing.title)} // Allow un-favoriting
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
