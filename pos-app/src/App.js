//Import dependencies
import { Routes, Route } from "react-router-dom";
//Import pages
import Cashier from "./pages/cashier";
//Import components
import Sidebar from "./components/sidebar";
import "./App.css";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Cashier />} />
      </Routes>
    </div>
  );
}

export default App;
