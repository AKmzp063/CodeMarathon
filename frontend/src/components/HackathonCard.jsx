import Image from "next/image";

export const HackathonCard = ({ title, image, timeLeft, prize, participants, location }) => {
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

export const HackathonList = () => {
  const hackathons = [
    {
      id: 1,
      title: "Agentforce Virtual Hackathon",
      image: "/images/img.jpg",
      timeLeft: "about 1 month left",
      prize: "$140,000",
      participants: "3800",
      location: "Online",
    },
    {
      id: 2,
      title: "AI Innovation Hackathon",
      image: "/images/img.jpg",
      timeLeft: "2 weeks left",
      prize: "$50,000",
      participants: "2500",
      location: "Online",
    },
    {
      id: 3,
      title: "Cyber Security Challenge",
      image: "/images/img.jpg",
      timeLeft: "3 days left",
      prize: "$25,000",
      participants: "1200",
      location: "Online",
    },
    {
      id: 4,
      title: "Agentforce Virtual Hackathon",
      image: "/images/img.jpg",
      timeLeft: "about 1 month left",
      prize: "$140,000",
      participants: "3800",
      location: "Online",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">  
      {hackathons.map((hackathon) => (
        <HackathonCard key={hackathon.id} {...hackathon} />
      ))}
    </div>
  );
};