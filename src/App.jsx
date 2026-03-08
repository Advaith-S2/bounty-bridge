import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import LandingPage from "@/pages/LandingPage";
import DonorDashboard from "@/pages/DonorDashboard";
import NgoDashboard from "@/pages/NgoDashboard";

function App() {
  const [donations, setDonations] = useState([]);

  const addDonation = (donation) => {
    setDonations((prev) => [
      ...prev,
      { ...donation, id: Date.now(), status: "available" },
    ]);
  };

  const claimDonation = (id) => {
    setDonations((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: "claimed" } : d))
    );
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background-light dark:bg-background-dark font-display">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/donor"
            element={
              <DonorDashboard
                donations={donations}
                addDonation={addDonation}
              />
            }
          />
          <Route
            path="/ngo"
            element={
              <NgoDashboard
                donations={donations}
                claimDonation={claimDonation}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
