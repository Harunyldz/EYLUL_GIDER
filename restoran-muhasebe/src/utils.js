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
        href: "Dashboard"
    },
    {
        name: "Gider Tablosu",
        icon: FaChartPie,
        index: 1,
        href: "GiderTablosu"
    },
    {
        name: "Yeni Gider",
        icon: FaPlusCircle,
        index: 2,
        href: "GiderEkle"
    },
    {
        name: "Personel Giderleri",
        icon: FaUsers,
        index: 3,
        href: "PersonelGiderleri",
    },
    {
        name: "Analiz",
        icon: FaChartLine,
        index: 4,
        href: "Analiz",
    },
    {
        name: "Ayarlar",
        icon: FaCog,
        index: 5,
        href: "Ayarlar",
    }
]

export const monthlyExpenses = [
    { day: "Oca", Gider: 4500 },
    { day: "Şub", Gider: 800 },
    { day: "Mar", Gider: 1200 },
    { day: "Nis", Gider: 300 },
    { day: "May", Gider: 950 },
    { day: "Haz", Gider: 400 },
    { day: "Tem", Gider: 1500 },
    { day: "Ağu", Gider: 1200 },
    { day: "Eyl", Gider: 3000 },
    { day: "Eki", Gider: 950 },
    { day: "Kas", Gider: 400 },
    { day: "Ara", Gider: 1500 },
];

export const expenseCategories = [
  { name: "Personel", value: 30000 },
  { name: "Gıda", value: 15000 },
  { name: "Kira", value: 12000 },
  { name: "Fatura", value: 5000 },
  { name: "Diğer", value: 3000 },
];


// utils.js

export const lastExpenses = [
  { date: "25.10.2025", type: "Malzeme", amount: 950 },
  { date: "24.10.2025", type: "Elektrik", amount: 420 },
  { date: "23.10.2025", type: "Personel", amount: 1200 },
  { date: "22.10.2025", type: "Su", amount: 150 },
  { date: "21.10.2025", type: "Temizlik", amount: 200 },
];
