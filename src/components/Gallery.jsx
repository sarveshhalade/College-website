import React from "react";

const Gallery = () => {
  return (
    <section className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">
        Campus <span className="text-red-600">Gallery</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {/* College main photo */}
        <img
          src="https://cache.careers360.mobi/media/colleges/reviews/2021/6/1/161645/IMG-20191109-WA0015.jpg"
          alt="DY Patil College campus"
          className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
        
        {/* Placeholder images for more campus photos */}
        <img
          src="https://via.placeholder.com/600x400.png?text=DY+Patil+Library"
          alt="DY Patil Library"
          className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src="https://via.placeholder.com/600x400.png?text=DY+Patil+Classroom"
          alt="DY Patil Classroom"
          className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src="https://via.placeholder.com/600x400.png?text=DY+Patil+Auditorium"
          alt="DY Patil Auditorium"
          className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src="https://via.placeholder.com/600x400.png?text=DY+Patil+Sports+Ground"
          alt="DY Patil Sports Ground"
          className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
        <img
          src="https://via.placeholder.com/600x400.png?text=DY+Patil+Labs"
          alt="DY Patil Labs"
          className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-transform"
        />
      </div>
    </section>
  );
};

export default Gallery;
