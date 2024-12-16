export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <img
        src="/assets/placeholder.jpg"
        alt="Featured architectural project"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="container mx-auto px-4 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Innovative Architectural Design
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-8 max-w-2xl">
          Creating spaces that inspire and endure, blending form and function seamlessly.
        </p>
        <a
          href="#projects"
          className="inline-block bg-white text-gray-900 hover:bg-gray-100 py-3 px-6 rounded-lg text-lg font-medium"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
