import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children, setPage, page }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar className="w-full z-50" />

      <div className="flex flex-1">
        <Sidebar setPage={setPage} page={page} />

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
