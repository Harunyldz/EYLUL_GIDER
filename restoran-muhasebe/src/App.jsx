import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import GiderTablosu from "./pages/GiderTablosu";
import GiderEkle from "./pages/GiderEkle";
import Analiz from "./pages/Analiz";
import Ayarlar from "./pages/Ayarlar";
import MainLayout from "./layout/MainLayout";

function App() {
  const [page, setPage] = useState("Dashboard");
  const selectedPage = () => {
    switch (page) {
      case "Dashboard":
        return <Dashboard />;

        break;
      case "GiderTablosu":
        return <GiderTablosu />;

        break;
      case "GiderEkle":
        return <GiderEkle />;

        break;
      case "Analiz":
        return <Analiz />;

        break;
      case "Ayarlar":
        return <Ayarlar />;

        break;

      default:
        return <Dashboard />;
        break;
    }
  };

  return (
    <MainLayout setPage={setPage} page={page}>
      {selectedPage()}
    </MainLayout>
    // <div className="min-h-screen flex flex-col bg-gray-100">
    //   <Navbar />

    //   <div className="flex flex-col md:flex-row bg-gray-100 rounded-lg overflow-hidden shadow-md">
    //    <Sidebar page={page} setPage={setPage} />
    //     <main className="flex-1 p-6 text-left">{selectedPage()}</main>
    //   </div>
    // </div>
  );
}

export default App;
