import { Link } from "react-router-dom";
import { Phone, Twitter, Github, Linkedin, Mail } from "lucide-react";
import Container from "./Container";

const footerLinks = [
  {
    title: "Product",
    links: [
       { name: "Features", path: "/#features" },
       { name: "Workflow", path: "/#workflow" },
       { name: "Pricing", path: "/pricing" },
       { name: "Demo", path: "/demo" },
    ]
  },
  {
    title: "Company",
    links: [
       { name: "About", path: "/about" },
       { name: "Careers", path: "/careers" },
       { name: "Privacy", path: "/privacy" },
       { name: "Terms", path: "/terms" },
    ]
  },
  {
    title: "Support",
    links: [
       { name: "Help Center", path: "/help" },
       { name: "Contact", path: "/contact" },
       { name: "API Docs", path: "/docs" },
    ]
  }
];

export default function Footer() {
  return (
    <footer className="bg-background-secondary border-t border-white/5 pt-20 pb-10 mt-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 mb-20">
           <div className="col-span-2 md:col-span-4">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-glow">
                  <Phone size={22} className="text-white fill-white/20" />
                </div>
                <span className="text-xl font-black tracking-tighter text-white uppercase">
                  MASTERCALL
                </span>
              </Link>
              <p className="text-neutral-400 max-w-xs leading-relaxed mb-6">
                Empowering businesses with high-performance tracking and intelligent lead management systems.
              </p>
              <div className="flex gap-4">
                 <button className="p-2 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white rounded-lg transition-colors">
                    <Twitter size={20} />
                 </button>
                 <button className="p-2 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white rounded-lg transition-colors">
                    <Github size={20} />
                 </button>
                 <button className="p-2 bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white rounded-lg transition-colors">
                    <Linkedin size={20} />
                 </button>
              </div>
           </div>

           <div className="col-span-2 md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
              {footerLinks.map((section, i) => (
                <div key={i}>
                   <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">{section.title}</h4>
                   <ul className="space-y-4">
                      {section.links.map((link, idx) => (
                        <li key={idx}>
                           <Link to={link.path} className="text-neutral-400 hover:text-primary-500 transition-colors text-sm font-medium">
                              {link.name}
                           </Link>
                        </li>
                      ))}
                   </ul>
                </div>
              ))}
           </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-neutral-500 text-sm font-medium">
             © {new Date().getFullYear()} MasterCall Inc. Built with love for modern teams.
           </p>
           <div className="flex gap-8 text-neutral-500 text-sm font-medium">
              <span className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500" />
                 All systems operational
              </span>
              <button className="flex items-center gap-2 hover:text-white transition-colors">
                 <Mail size={16} />
                 Subscribe to Newsletter
              </button>
           </div>
        </div>
      </Container>
    </footer>
  );
}