import React from "react";

const movieName = "ROYAL TV";

const About = () => {
  return (


   
    <div className="bg-gray-900 w-full min-h-screen p-8">
    <p className="text-2xl text-center text-white font-bold">
      Welcome to <span className="font-semibold text-yellow-400">{movieName}</span>
    </p>

  
    <div className="flex flex-wrap justify-evenly gap-8 mt-16">
      <div className="bg-blue-300 w-1/4 h-auto rounded-lg">
        <h2 className="text-3xl text-gray-900 font-bold text-center">Explore Cinema</h2>
        <p className="mt-12 text-white text-center text-2xl">
          Your go-to platform for discovering, rating and reviewing movies around the world.
          Whether you're a casual viewer or a film aficionado, we've got you covered with the latest and greatest in cinema.
        </p>
      </div>

      <div className="bg-blue-300 w-1/4 h-auto rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Our Mission</h2>
        <p className="mt-12 text-white text-center text-2xl">
          At <span className="font-semibold text-yellow-400">{movieName}</span>, our mission is simple: to bring movie enthusiasts together by providing a seamless platform to explore, share, and enjoy the magic of cinema. We aim to make discovering and engaging with movies easier and more enjoyable for everyone.
        </p>
      </div>

      <div className="bg-blue-300 w-1/4 h-auto rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Who We Are</h2>
        <p className="text-white text-center text-2xl mt-12">
          <span className="font-semibold text-yellow-400">{movieName}</span> was developed by the FRANK CORP tech team. Our vision is to create a space where everyone, from casual viewers to cinephiles, can connect and explore the world of movies effortlessly.
        </p>
      </div>
    </div>

    <div className="bg-blue-300 h-auto mt-16 p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-900">What We Offer</h2>
      <ul className="text-white text-2xl text-center">
        <li>Discover Movies: Browse thousands of movies by genre, year, or popularity.</li>
        <li>Watch Trailers: Get a sneak peek of your next favorite film with high-quality trailers.</li>
        <li>Reviews & Ratings: Read what others think or share your own opinions.</li>
        <li>Personalized Recommendations: Receive suggestions based on your viewing history.</li>
        <li>Create Watchlists: Keep track of movies you want to watch or revisit.</li>
      </ul>
    </div>
  </div>


  );
};

export default About;
