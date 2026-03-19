import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScroll, useSpring, motion } from "framer-motion";

export default function Layout({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
