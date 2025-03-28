import React from "react";
import Image from "next/image";

const HackathonFeatured = ({ image, title, daysLeft, prize, participants }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-300 flex flex-col sm:flex-row hover:shadow-2xl transition duration-300">
      {/* Featured Label */}
      <div className="bg-black text-white text-xs font-semibold uppercase flex items-center justify-center sm:w-16 w-full sm:rounded-l-xl rounded-t-xl sm:rounded-t-none">
        <span className="transform sm:rotate-270 inline-block py-1">Featured</span>
      </div>
      {/* Card Content */}
      <div className="flex items-center gap-4 p-4 w-full flex-col sm:flex-row">
        <Image src={image} alt={title} width={80} height={80} className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-lg" />
        <div className="flex flex-col text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{title}</h3>
          <div className="flex justify-center sm:justify-start items-center gap-2 mt-2 text-gray-600 text-sm flex-wrap">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
              ⏳ {daysLeft} days left
            </span>
            <span className="flex items-center gap-1">📍 In-Person</span>
          </div>
          <div className="mt-2 font-medium text-gray-800">
            💰 <span className="text-lg font-bold">${prize}</span> in prizes
          </div>
          <div className="text-gray-500 text-sm">👥 {participants} participants</div>
        </div>
      </div>
    </div>
  );
};

const FeaturedList = () => {
  const onlineHackathons = [
    { image: "/images/img.jpg", title: "Azure AI Developer Hackathon", daysLeft: 6, prize: "10,000", participants: 3176 },
    { image: "/images/img.jpg", title: "Global AI Agents League", daysLeft: 18, prize: "10,000", participants: 1060 },
    { image: "/images/img.jpg", title: "Machine Learning Challenge", daysLeft: 12, prize: "8,000", participants: 2543 },
    { image: "/images/img.jpg", title: "AI for Social Good", daysLeft: 20, prize: "12,000", participants: 1780 },
  ];

  const inPersonHackathons = [
    { image: "/images/img.jpg", title: "National AI Summit Hackathon", daysLeft: 10, prize: "15,000", participants: 2200 },
    { image: "/images/img.jpg", title: "Deep Learning Bootcamp", daysLeft: 15, prize: "12,500", participants: 1800 },
    { image: "/images/img.jpg", title: "Blockchain Innovation Challenge", daysLeft: 8, prize: "20,000", participants: 2700 },
    { image: "/images/img.jpg", title: "Cybersecurity Grand Slam", daysLeft: 25, prize: "18,000", participants: 1500 },
  ];

  return (
    <div className="py-12 px-6 sm:px-12 lg:px-28 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      {/* Online Hackathons Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center sm:text-left">Featured Online Hackathons</h2>
        <button className="bg-white text-blue-600 px-4 sm:px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition mt-4 sm:mt-0">
          Explore Online Hackathons
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
        {onlineHackathons.map((hackathon, index) => (
          <HackathonFeatured key={index} {...hackathon} />
        ))}
      </div>

      {/* In-Person Hackathons Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white text-center sm:text-left">Featured In-Person Hackathons</h2>
        <button className="bg-white text-blue-600 px-4 sm:px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition mt-4 sm:mt-0">
          Explore In-Person Hackathons
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {inPersonHackathons.map((hackathon, index) => (
          <HackathonFeatured key={index} {...hackathon} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedList;
