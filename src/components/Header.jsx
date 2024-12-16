import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-60 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="/assets/profile.png?height=40&width=40"
            alt="Architect Name"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-gray-800"><a href="/">Shahid Arch</a></span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-black hover:text-gray-900">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <button
          className="md:hidden text-gray-800 hover:text-gray-900 z-[60]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          ☰
        </button>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 right-0 w-64 h-full shadow-md p-8 z-[70]">
            <button
              className="mb-4 text-gray-800 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-black hover:text-gray-900 bg-gray-300 bg-opacity-70 p-1 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
