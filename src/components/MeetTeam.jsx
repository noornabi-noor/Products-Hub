import React from "react";

const MeetTeam = () => {
  const team = [
    {
      name: "Md. Noornabi",
      role: "Lead Developer",
      image:
        "https://i.postimg.cc/y8LvDrvL/914f50a0-4f97-4b8f-9fce-41cee9820bd3.jpg",
    },
    {
      name: "Akbar Ali",
      role: "UI/UX Designer",
      image: "https://i.postimg.cc/qqp3Xp7y/bob.avif",
    },
    {
      name: "Tanvir Hasan",
      role: "Backend Engineer",
      image: "https://i.postimg.cc/P5D5xBXj/rana.avif",
    },
  ];

  return (
    <div>
      {/* Team Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-400 to-indigo-400 mt-7 rounded-2xl">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-100">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-xl shadow-md text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-300 mt-7 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-6 text-gray-100">
          Tech We Love
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Next.js 15",
            "Tailwind CSS",
            "Framer Motion",
            "NextAuth.js",
            "MongoDB",
            "Vercel",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:bg-gray-100 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MeetTeam;
