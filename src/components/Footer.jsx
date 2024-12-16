

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Shahid Arch</h3>
            <p className="text-sm sm:text-base">
              Creating innovative spaces for modern living and working.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <p className="text-sm sm:text-base">Email: info@architectname.com</p>
            <p className="text-sm sm:text-base">Phone: 9677897425</p>
            <p className="text-sm sm:text-base">Address: Tamil Nadu, India</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/k_md_shahid/" className="text-sm sm:text-base hover:text-gray-300">Instagram</a>
              <a href="https://www.linkedin.com/in/k-mohammed-shahid-71a357216/" className="text-sm sm:text-base hover:text-gray-300">LinkedIn</a>
              <a href="https://www.facebook.com/k.m.shahid.52" className="text-sm sm:text-base hover:text-gray-300">Facebook</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Architect Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
