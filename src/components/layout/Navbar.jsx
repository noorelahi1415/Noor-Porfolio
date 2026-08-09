import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

import profile from "../../data/profile";
import useActiveSection from "../../hooks/useActiveSection";
import { useTheme } from "../../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const active = useActiveSection();

  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 z-50 w-full border-b border-slate-200/80 bg-white/80 text-slate-700 backdrop-blur-md transition-colors dark:border-slate-700 dark:bg-slate-900/85 dark:text-white"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        {/* Logo */}

        <h1 className="max-w-[13rem] truncate cursor-pointer text-xl font-bold text-blue-600 dark:text-blue-400 sm:max-w-none sm:text-2xl">
          {profile.name}
        </h1>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-4 text-sm lg:flex xl:gap-7 xl:text-base">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className={`cursor-pointer transition hover:text-blue-400 ${
                active === item.id ? "text-blue-600 dark:text-blue-400" : "text-slate-700 dark:text-slate-200"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme Button */}

          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Right Side Mobile Buttons */}

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-white/95 dark:border-slate-700 dark:bg-slate-900 lg:hidden"
        >
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setOpen(false)}
                className={`cursor-pointer px-5 py-3.5 transition sm:px-6 ${
                  active === item.id
                    ? "bg-blue-50 text-blue-600 dark:bg-slate-900 dark:text-blue-400"
                    : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
