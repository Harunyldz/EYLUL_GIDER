import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { sidebarElements } from "../utils";


const Sidebar = ({ page, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const clickMenu = (name) => {
    setPage(name);
    setIsOpen(false); // mobilde sidebar kapanacak
  };

  return (
    <>
      {/* Menü Butonu (Mobil) */}
      <button
        onClick={toggleSidebar}
        className={`md:hidden fixed top-14 left-4 z-50 bg-gray-800 text-white p-2 rounded-md transition-transform duration-300
          ${isOpen ? "translate-x-[150px]" : ""}`}
      >
        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-12 left-0 h-screen bg-gray-800 text-white w-52 transform transition-transform duration-300 z-40 mt-1
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:shadow-md`}
      >
        <div className="flex flex-col md:justify-between py-4 px-4 h-full mt-6 md:mt-4 ">
          <nav className="flex flex-col gap-2">
            {sidebarElements.map((sidebarElement, i) => (
              <a
                key={i}
                onClick={() => clickMenu(sidebarElement.href)}
                className={`flex items-center gap-2 p-2 rounded transition cursor-pointer
                  ${page === sidebarElement.href ? "bg-gray-700" : "hover:bg-gray-700"}`}
              >
                <sidebarElement.icon />
                <span>{sidebarElement.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
