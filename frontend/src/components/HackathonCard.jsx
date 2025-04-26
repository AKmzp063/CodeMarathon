import Image from "next/image";
import Link from "next/link";
import { FaFlag } from "react-icons/fa";
import { FaCalendar } from "react-icons/fa";
import { FaTags } from "react-icons/fa";

export const HackathonCardHome = ({ title, image, timeLeft, prize, participants, location }) => {
  return (
    <button className="w-full text-left">
      <div className="border border-gray-200 rounded-lg p-4 flex items-center gap-4 shadow-md bg-gray-900 hover:bg-gray-800 transition sm:flex-row flex-col sm:items-center sm:text-left text-center">
        {/* Hackathon Image */}
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="w-20 h-20 rounded-md object-cover mx-auto sm:mx-0"
        />

        {/* Hackathon Details */}
        <div className="flex-1">
          <h2 className="text-lg text-white font-bold">{title}</h2>
          <div className="flex items-center gap-2 text-sm text-white mt-1 justify-center sm:justify-start">
            <span className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs">
              {timeLeft}
            </span>
            <span className="flex items-center gap-1">🌐 {location}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm mt-2 text-slate-400 justify-center sm:justify-start">
            <span className="font-bold">{prize}</span> in prizes
            <span className="font-bold">{participants}</span> participants
          </div>
        </div>
      </div>
    </button>
  );
};

export const CombinedHackathonCard = ({
  title,
  image,
  timeLeft,
  prize,
  participants,
  location,
  league,
  time,
  tags,
}) => {
  return (
    <Link href='#' className="block w-full text-left mt-2 mb-4">
      <div className="border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row items-center gap-4 shadow-md bg-gray-900 hover:bg-gray-800 transition text-white text-center sm:text-left">
        {/* Left Side: Hackathon Details */}
        <div className="flex items-center gap-4 flex-2 sm:border-r sm:pr-6 border-gray-700 flex-col sm:flex-row">
          <Image
            src={image}
            alt={title}
            width={80}
            height={80}
            className="w-50 h-50 rounded-md object-cover mx-auto sm:mx-0"
          />
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="flex items-center gap-4 text-sm mt-6 justify-center sm:justify-start">
              <span className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm">
                {timeLeft}
              </span>
              <span className="flex items-center gap-2">🌐 {location}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-lg mt-10 text-slate-400 justify-center sm:justify-start">
              <span className="font-bold">{prize}</span> in prizes
              <span className="font-bold">{participants}</span> participants
            </div>
          </div>
        </div>

        {/* Right Side: About Hackathon */}
        <div className="flex-1 text-white sm:pl-6">
          <div className="flex items-center gap-2 text-xl font-bold">
            <FaFlag />
            <h2>{league}</h2>
          </div>

          <div className="flex items-center gap-2 text-md mt-4">
            <FaCalendar />
            <span>{time}</span>
          </div>

          <div className="flex flex-col text-lg mt-4 text-slate-400 items-start justify-start">
            <div className="flex items-center gap-2 mb-2">
              <FaTags />
            </div>
            {Array.isArray(tags) ? (
              tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 bg-gray-800 rounded-md text-sm mb-1">
                  {tag}
                </span>
              ))
            ) : (
              <span className="px-3 py-1 bg-gray-800 rounded-md text-sm">{tags}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const HackathonList = () => {
  const hackathons = [
    {
      id: 1,
      title: "Agentforce Virtual Hackathon",
      image: "/images/hackathonimg.jpeg",
      timeLeft: "about 1 month left",
      prize: "$140,000",
      participants: "3800",
      location: "Online",
    },
    {
      id: 2,
      title: "AI Innovation Hackathon",
      image: "/images/hackathonimg.jpeg",
      timeLeft: "2 weeks left",
      prize: "$50,000",
      participants: "2500",
      location: "Online",
    },
    {
      id: 3,
      title: "Cyber Security Challenge",
      image: "/images/hackathonimg.jpeg",
      timeLeft: "3 days left",
      prize: "$25,000",
      participants: "1200",
      location: "Online",
    },
    {
      id: 4,
      title: "Agentforce Virtual Hackathon",
      image: "/images/hackathonimg.jpeg",
      timeLeft: "about 1 month left",
      prize: "$140,000",
      participants: "3800",
      location: "Online",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">  
      {hackathons.map((hackathon) => (
        <HackathonCardHome key={hackathon.id} {...hackathon} />
      ))}
    </div>
  );
};