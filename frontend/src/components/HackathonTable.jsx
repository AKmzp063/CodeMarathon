import React from "react";

const hackathonThemes = [
  { id: 1, theme: "Beginner Friendly", hackathons: 93, prizes: "$1,172,000" },
  { id: 2, theme: "Social Good", hackathons: 56, prizes: "$919,000" },
  { id: 3, theme: "Machine Learning/AI", hackathons: 52, prizes: "$734,000" },
  { id: 4, theme: "Open Ended", hackathons: 40, prizes: "$607,000" },
  { id: 5, theme: "Education", hackathons: 25, prizes: "$233,000" },
  { id: 6, theme: "Web", hackathons: 24, prizes: "$303,000" },
  { id: 7, theme: "Health", hackathons: 20, prizes: "$146,000" },
  { id: 8, theme: "Low/No Code", hackathons: 15, prizes: "$201,000" },
  { id: 9, theme: "Design", hackathons: 13, prizes: "$14,000" },
  { id: 10, theme: "Blockchain", hackathons: 10, prizes: "$92,000" },
];

const HackathonTable = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Top Hackathon Themes</h2>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] text-left border-collapse">
          <thead>
            <tr className="text-slate-200 border-b">
              <th className="py-2 px-2 sm:px-4">Theme</th>
              <th className="py-2 px-2 sm:px-4">Hackathons</th>
              <th className="py-2 px-2 sm:px-4">Total Prizes</th>
              <th className="py-2 px-2 sm:px-4"></th>
            </tr>
          </thead>

          <tbody>
            {hackathonThemes.map((theme, index) => (
              <tr key={theme.id} className="border-b">
                <td className="py-2 px-2 sm:px-4 text-white flex items-center gap-2">
                  <span className="font-bold">{index + 1}.</span>
                  <span className="text-slate-200 px-2 py-1 rounded text-sm sm:text-base">
                    {theme.theme}
                  </span>
                </td>
                <td className="py-2 px-2 sm:px-4 text-white text-sm sm:text-base">{theme.hackathons}</td>
                <td className="py-2 px-2 sm:px-4 text-white text-sm sm:text-base">{theme.prizes}</td>
                <td className="py-2 px-2 sm:px-4 text-purple-500 text-lg sm:text-xl">→</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HackathonTable;