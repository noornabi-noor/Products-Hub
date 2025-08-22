export default function AboutPage() {
  const team = [
    {
      name: "Md. Noornabi",
      role: "Lead Developer",
      image: "https://i.postimg.cc/y8LvDrvL/914f50a0-4f97-4b8f-9fce-41cee9820bd3.jpg",
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
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl text-lg">
          Empowering creators with seamless product management tools built for speed, clarity, and scale.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 text-center bg-slate-400">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          We believe in building intuitive, secure, and scalable platforms that help businesses grow without friction.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-white via-blue-50 to-pink-200">
        <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {team.map((member) => (
            <div key={member.name} className="bg-white p-6 rounded-xl shadow-md text-center">
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
      <section className="py-16 px-6 text-center bg-[#fef6f6]">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Tech We Love</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Next.js 15", "Tailwind CSS", "Framer Motion", "NextAuth.js", "MongoDB", "Vercel"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm hover:bg-gray-100 transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Build Together</h2>
        <p className="mb-6 text-lg">We’re open to collaboration, feedback, and new ideas. Reach out anytime.</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}