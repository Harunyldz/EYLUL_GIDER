import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children, setPage, page }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar className="w-full z-50" />

      <div className="flex flex-1">
        <Sidebar setPage={setPage} page={page}/>

        {/* Main content */}
        <main className="flex-1 py-6 overflow-auto md:ml-6 px-2">
          {children}
        </main>
      </div>
      <Footer  />
    </div>
  );
};

export default MainLayout;
