import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

const navItems = [
  { label: "About Us", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Workflow", href: "#workflow" },
  { label: "Contact Us", href: "#contact" }
];

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileDrawerOpen(false);
  };

  const handleWaitlistClick = () => {
    // Replace 'YOUR_GOOGLE_FORM_URL' with the actual URL of your Google Form
    window.open('https://forms.gle/Cd8QAEfN3qWuYGpN8', '_blank');
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-[#0a2c3d] text-white">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight">Acolyte</span>
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button 
                key={index} 
                onClick={() => scrollToSection(item.href.slice(1))} 
                className="hover:text-[#3c7fa3] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleWaitlistClick}
              className="bg-[#3c7fa3] hover:bg-[#2c5d7a] text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
              Join our waitlist
            </button>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a2c3d] p-4">
            {navItems.map((item, index) => (
              <button 
                key={index} 
                onClick={() => scrollToSection(item.href.slice(1))} 
                className="block w-full text-left py-2 hover:text-[#3c7fa3] transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleWaitlistClick}
              className="w-full mt-4 bg-[#3c7fa3] hover:bg-[#2c5d7a] text-white py-2 px-4 rounded-md transition-colors duration-300"
            >
              Join our waitlist
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;