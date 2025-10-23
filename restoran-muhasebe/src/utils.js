import {
    FaHome,
    FaChartPie,
    FaPlusCircle,
    FaCog,
    FaChartLine,
    FaUsers,
} from "react-icons/fa";

export const sidebarElements = [
    {
        name: "Ana Sayfa",
        icon: FaHome,
        index: 0,
        href:"Dashboard"
    },
    {
        name: "Gider Tablosu",
        icon: FaChartPie,
        index: 1,
        href:"GiderTablosu"
    },
    {
        name: "Yeni Gider",
        icon: FaPlusCircle,
        index: 2,
        href:"GiderEkle"
    },
    {
        name: "Personel Giderleri",
        icon: FaUsers,
        index: 3,
        href:"PersonelGiderleri",
    },
    {
        name: "Analiz",
        icon: FaChartLine,
        index: 4,
        href:"Analiz",
    },
    {
        name: "Ayarlar",
        icon: FaCog,
        index: 5,
        href:"Ayarlar",
    }
]

