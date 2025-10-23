import { FaUtensils} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-yellow-400 px-6 py-3 flex justify-between gap-3 shadow-md sticky top-0 z-50 md:mt-1">
      <h1 className="text-xl font-semibold tracking-wide">
        Restoran Muhasebe
      </h1>
      <FaUtensils className="text-2xl text-yellow-400" />
    </nav>
  );
};


export default Navbar;
