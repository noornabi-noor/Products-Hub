export default function AboutPage() {

  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="mt-7 rounded-2xl min-h-[60vh] flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl text-lg">
          Empowering creators with seamless product management tools built for speed, clarity, and scale.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 mt-7 rounded-2xl">
        <h2 className="text-3xl font-semibold mb-4 text-gray-100">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-lg">
          We believe in building intuitive, secure, and scalable platforms that help businesses grow without friction.
        </p>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center mt-7 rounded-2xl">
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