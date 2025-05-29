
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ABOUT', href: '/about' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'SKILLS', href: '/skills' },
    { name: 'CONTACT', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-cyber-darker/80 backdrop-blur-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-tech font-bold">
            <span className="text-cyber-blue neon-text">&lt;</span>
            <span className="text-white">DEV</span>
            <span className="text-cyber-green neon-text">/&gt;</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative group transition-all duration-300 font-mono text-sm tracking-wider ${
                  location.pathname === item.href
                    ? 'text-cyber-blue'
                    : 'text-gray-300 hover:text-cyber-blue'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-cyber-blue/50 transition-all duration-300 scale-0 group-hover:scale-100" />
                <div className="absolute inset-0 bg-cyber-blue/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Active/Glowing underline */}
                <div className={`absolute bottom-0 left-0 h-px bg-cyber-blue shadow-[0_0_5px_#00d4ff] transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-cyber-blue">
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className="w-full h-px bg-current transition-all duration-300" />
              <div className="w-full h-px bg-current transition-all duration-300" />
              <div className="w-full h-px bg-current transition-all duration-300" />
            </div>
          </button>
        </div>
      </div>

      {/* Scanning line effect */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent opacity-50" />
    </nav>
  );
};

export default Navigation;
