import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Phone, ChevronRight, Menu, X, ArrowRight, Smartphone } from "lucide-react";
import { useState, useEffect } from "react";
import Container from "./Container";

const navLinks = [
  { name: "Product", path: "/product" },
  { name: "Pricing", path: "/pricing" },
  { name: "About", path: "/about" },
  { name: "Download", path: "/download" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  const navBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(11, 15, 25, 0)", "rgba(11, 15, 25, 0.8)"]
  );

  const navBorder = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.05)"]
  );

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <motion.header
      style={{
        backgroundColor: navBackground,
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid`,
        borderColor: navBorder,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <Container>
        <nav className="h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
              <img src="/favicon.png" alt="logo_images" />
            </div>
            <span className="text-xl font-black tracking-tighter text-white">
              MASTERCALL
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold tracking-wide transition-colors hover:text-primary-500 ${location.pathname === link.path ? "text-primary-500 underline underline-offset-8" : "text-neutral-400"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-bold text-neutral-400 hover:text-white transition-colors">Log In</button>
            <button className="px-5 py-2.5 bg-primary-500 text-white rounded-xl text-sm font-bold shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
              Get Started
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 right-0 bg-background border-b border-white/5 p-6 md:hidden shadow-2xl"
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-bold text-white hover:text-primary-500 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-white/5" />
            <button className="w-full py-4 rounded-xl border border-white/10 font-bold text-white">Log In</button>
            <button className="w-full py-4 rounded-xl bg-primary-500 font-bold text-white shadow-glow">Get Started</button>
            <a 
              href="/downloads/mastercall.apk" 
              download="mastercall.apk"
              className="w-full py-4 rounded-xl bg-white/5 border border-white/10 font-bold text-white flex items-center justify-center gap-2"
            >
              <Smartphone size={18} className="text-primary-500" />
              Download Android App
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
