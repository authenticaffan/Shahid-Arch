export function Services() {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-4 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 20.25h6M9 16.5h6M6 4.875V16.5m12 0V4.875a2.25 2.25 0 00-2.25-2.25H8.25A2.25 2.25 0 006 4.875z"
          />
        </svg>
      ),
      title: "Architectural Design",
      description: "Crafting innovative and functional designs tailored to your vision and needs.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-4 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v18m0 0l4.5-4.5m-4.5 4.5l-4.5-4.5M21 9.75a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z"
          />
        </svg>
      ),
      title: "Residential Projects",
      description: "Creating beautiful, comfortable homes that reflect your lifestyle and personality.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-4 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12h10.5m-10.5 3h7.5m-7.5-6h7.5M3 7.5h1.5m13.5 0H21M3 12h1.5m16.5 0h-1.5M3 16.5h1.5m16.5 0h-1.5M3 21h1.5m16.5 0h-1.5M3 3h1.5m16.5 0h-1.5"
          />
        </svg>
      ),
      title: "Commercial Buildings",
      description: "Designing efficient and impressive spaces for businesses of all sizes.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-4 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3c3.86 0 7 3.14 7 7v4a7 7 0 01-14 0v-4c0-3.86 3.14-7 7-7zm0 16.5c-3.315 0-6.75-1.86-6.75-6.75M12 3v10.5m0 0h4.5m-4.5 0H7.5"
          />
        </svg>
      ),
      title: "Landscape Architecture",
      description: "Integrating buildings with their surroundings to create harmonious environments.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-4 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 8.25v7.5M8.25 8.25v7.5m3.75-11.25v18m7.5-9H5.25m1.125-7.5l1.5-1.5m7.5 0l1.5 1.5m-1.5 9l1.5 1.5m-7.5-1.5l-1.5 1.5"
          />
        </svg>
      ),
      title: "Interior Design",
      description: "Crafting interior spaces that are both aesthetically pleasing and highly functional.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 mb-4 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v4.5m0 12V18m6-3.75c0 3.15-3.02 5.25-6 5.25s-6-2.1-6-5.25S9.02 9 12 9s6 2.1 6 5.25z"
          />
        </svg>
      ),
      title: "Sustainable Design",
      description: "Incorporating eco-friendly solutions for energy-efficient and sustainable buildings.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="text-center">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 text-center mt-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


