//Import dependencies
import { Routes, Route } from "react-router-dom";
//Import pages
import Cashier from "./pages/cashier";
import SalesReports from "./pages/salesReports";
import UserManagement from "./pages/userManagement";
import Payment from "./pages/payment";
import AdminDashboard from "./pages/adminDashboard";
import Login from "./pages/login";
//Import components
import Sidebar from "./components/sidebar";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Cashier />} />
        <Route path="/sales-reports" element={<SalesReports />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
