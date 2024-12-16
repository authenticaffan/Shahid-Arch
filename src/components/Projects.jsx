

const projects = [
  {
    id: 1,
    title: "Modern Residence",
    image: "src/assets/modern.jpg",
    description: "A contemporary home design with clean lines and open spaces.",
  },
  {
    id: 2,
    title: "Urban Office Complex",
    image: "src/assets/urban.jpg",
    description: "A sustainable office building in the heart of the city.",
  },
  {
    id: 3,
    title: "Eco-Friendly School",
    image: "src/assets/eco.jpeg",
    description: "An innovative educational facility with a focus on sustainability.",
  },
];

export function ProjectsGrid() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
