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
import PersonelGiderleri from "./pages/PersonelGiderleri";

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
      case "PersonelGiderleri":
        return <PersonelGiderleri />;

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
  );
}

export default App;
