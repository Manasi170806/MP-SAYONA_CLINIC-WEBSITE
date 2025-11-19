import './App.css'
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="pt-28">
        <AppRoutes />
      </div>
    </>
  );
}



