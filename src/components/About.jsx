export function About() {
    return (
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Section */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
              <p className="text-gray-600">
                With over 15 years of experience in architectural design, I am passionate about creating spaces that inspire and enhance the human experience. My approach combines innovative design techniques with a deep respect for the environment and local context.
              </p>
              <p className="text-gray-600">
                I believe that great architecture should not only be visually striking but also functional, sustainable, and responsive to the needs of its users. My designs aim to create harmony between built structures and their surroundings, always with an eye towards the future.
              </p>
              <p className="text-gray-600">
                Throughout my career, I&apos;ve had the privilege of working on a diverse range of projects, from intimate residential spaces to large-scale commercial developments. Each project is an opportunity to push boundaries and create something truly unique.
              </p>
              {/* Button Link */}
              <div className="btn">
              <a href="#contact">
                <button className="bg-black text-white hover:bg-gray-600 px-6 py-3 rounded-lg">
                  Get in Touch
                </button>
              </a>
              </div>
              
            </div>
  
            {/* Image Section */}
            <div className="relative h-[400px] md:h-[500px]">
              <img
                src="public/assets/profile.png?height=500&width=500"
                alt="Architect Name"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
  