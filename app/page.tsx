import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 space-y-12 md:space-y-0 md:space-x-12">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-[#07105E] leading-tight">
            Welcome to Naijaville
          </h1>
          <p className="mt-4 text-[#111645]">
            Nigeria's premier property platform connecting agents and users to
            close deals faster. Explore properties, schedule tours, and secure
            your dream property effortlessly.
          </p>
          {/* Newsletter Subscription */}
          <div className="mt-6">
            <form className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-auto px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#07105E]"
              />
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2 bg-[#07105E] text-white rounded-md hover:bg-[#111645] transition duration-300"
              >
                Notify Me
              </button>
            </form>
          </div>
          {/* Social Media Links */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#07105E] hover:text-[#111645] transition-colors"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#07105E] hover:text-[#111645] transition-colors"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#07105E] hover:text-[#111645] transition-colors"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#07105E] hover:text-[#111645] transition-colors"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center ">
          <Image
            src="/vector.svg" // Replace with your image path
            alt="Naijaville Real Estate"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
