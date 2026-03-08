import { useState } from "react";
import { Link } from "react-router-dom";

export default function DonorDashboard({ donations, addDonation }) {
  const [formData, setFormData] = useState({
    foodName: "",
    quantity: "",
    location: "",
    expiryTime: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.foodName || !formData.quantity || !formData.location || !formData.expiryTime) {
      return;
    }
    
    // Convert datetime string to readable date & time format
    let displayTime = formData.expiryTime;
    if (formData.expiryTime) {
         try {
             const dateObj = new Date(formData.expiryTime);
             if (!isNaN(dateObj)) {
                 displayTime = dateObj.toLocaleString('en-US', {
                     month: 'short',
                     day: 'numeric',
                     hour: 'numeric',
                     minute: '2-digit',
                     hour12: true
                 });
             }
         } catch(e) {}
    }

    addDonation({
        ...formData,
        expiryTime: displayTime
    });
    setFormData({ foodName: "", quantity: "", location: "", expiryTime: "" });
  };

  const myDonations = donations; // In a real app we'd filter by donorId

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="layout-container flex flex-col min-h-screen">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary p-1.5 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-background-dark font-bold">eco</span>
              </div>
              <h2 className="text-xl font-black tracking-tight text-slate-900 dark:text-slate-100">BountyBridge</h2>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-sm font-semibold hover:text-primary transition-colors">Home</Link>
              <Link to="/donor" className="text-sm font-semibold text-primary">Donor Dashboard</Link>
              <Link to="/ngo" className="text-sm font-semibold hover:text-primary transition-colors">NGO Dashboard</Link>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-primary/10 rounded-full transition-colors cursor-pointer">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <div className="size-10 rounded-full bg-primary/20 border-2 border-primary/50 flex items-center justify-center overflow-hidden">
                <img
                  alt="Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCp_MTw_a_VWArDTGBBf7kjvcjEEAKG5NkaVtusI3CzxgJn1xjLlOxnaQgn8P_mRkdItt6iRBxXgLZpkDr0K83vk4lMdg3ZVea8fUheAPaaJNERPl5rdiCXxwygpXzra0whYIsSWVmgginz05UbxwyXyNK56MHpoIoGRKWQJj6OntE2c-TwvRJPqXeaOyY1LG-0e09YnZhtoYh6G6lY23BR2glPQHMniNh6CAEsh_Kxga797bEs4qeJasP_iwqIOnBlQMblhym3nfvC"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto w-full px-6 lg:px-20 py-8 lg:py-12">
          <div className="mb-10">
            <h1 className="text-4xl font-black tracking-tight mb-2">Donor Dashboard</h1>
            <p className="text-slate-600 dark:text-slate-400">Welcome back, share your surplus and make a difference today.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Section: Post Donation */}
            <section className="lg:col-span-5">
              <div className="bg-white dark:bg-slate-900/50 border border-primary/10 rounded-xl shadow-sm overflow-hidden">
                <div className="p-6 border-b border-primary/10 bg-primary/5">
                  <div className="flex items-center gap-2 text-primary font-bold">
                    <span className="material-symbols-outlined">add_circle</span>
                    <h3>Post New Donation</h3>
                  </div>
                </div>
                <div className="p-6 space-y-5">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Food Name</label>
                      <input
                        name="foodName"
                        value={formData.foodName}
                        onChange={handleChange}
                        className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all"
                        placeholder="e.g. Fresh Garden Salad"
                        type="text"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Quantity</label>
                        <input
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all"
                          placeholder="e.g. 15 servings"
                          type="text"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Expiry Date & Time</label>
                        <input
                          name="expiryTime"
                          value={formData.expiryTime}
                          onChange={handleChange}
                          className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all text-sm"
                          type="datetime-local"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Pickup Location</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                        <input
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          className="w-full pl-10 rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all"
                          placeholder="Street address or Landmark"
                          type="text"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Description (Optional)</label>
                      <textarea
                        className="w-full rounded-lg border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:ring-primary focus:border-primary transition-all"
                        placeholder="Any dietary info or specific pickup instructions..."
                        rows="3"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-3.5 rounded-lg transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      <span className="material-symbols-outlined">send</span>
                      Post Donation
                    </button>
                  </form>
                </div>
              </div>
            </section>

            {/* Right Section: My Donations */}
            <section className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900/50 border border-primary/10 rounded-xl shadow-sm h-full flex flex-col">
                <div className="p-6 border-b border-primary/10 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold">
                    <span className="material-symbols-outlined">history</span>
                    <h3>My Recent Donations</h3>
                  </div>
                  <button className="text-primary text-sm font-semibold hover:underline cursor-pointer">View All</button>
                </div>

                <div className="flex-1 overflow-y-auto max-h-[600px] p-6 space-y-4">
                  {myDonations.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 opacity-40">
                      <span className="material-symbols-outlined text-6xl">inventory_2</span>
                      <p className="mt-4 font-semibold">No donations yet</p>
                    </div>
                  ) : (
                    myDonations.map((donation) => (
                      <div
                        key={donation.id}
                        className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-primary/30 transition-all bg-slate-50/50 dark:bg-slate-900/30"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`size-14 rounded-lg flex items-center justify-center ${
                              donation.status === "available"
                                ? "bg-primary/10"
                                : "bg-orange-100 dark:bg-orange-900/20"
                            }`}
                          >
                            <span
                              className={`material-symbols-outlined text-3xl ${
                                donation.status === "available"
                                  ? "text-primary"
                                  : "text-orange-500"
                              }`}
                            >
                              {donation.status === "available" ? "nutrition" : "restaurant"}
                            </span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 dark:text-slate-100">{donation.foodName}</h4>
                            <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                              <span className="material-symbols-outlined text-[14px]">timer</span> Expires at {donation.expiryTime}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                            {donation.status === "available" ? (
                                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-primary/20 text-green-700 dark:text-primary flex items-center gap-1">
                                    <span className="size-1.5 rounded-full bg-primary"></span>
                                    Available
                                </span>
                            ) : (
                                <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 flex items-center gap-1">
                                    <span className="size-1.5 rounded-full bg-orange-500"></span>
                                    Claimed
                                </span>
                            )}
                          <button className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer">
                            <span className="material-symbols-outlined text-slate-400">more_vert</span>
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-primary/5 rounded-b-xl mt-auto">
                  <div className="flex items-center justify-between px-2">
                    <div className="flex gap-4">
                      <div className="text-center">
                        <p className="text-xl font-black text-primary">{myDonations.length}</p>
                        <p className="text-[10px] uppercase font-bold text-slate-500">Total Shares</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-black text-primary">{myDonations.length * 3.5}kg</p>
                        <p className="text-[10px] uppercase font-bold text-slate-500">CO2 Saved</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-primary/30 text-4xl">energy_savings_leaf</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        <footer className="mt-auto py-10 px-6 lg:px-20 border-t border-primary/10 text-center">
          <p className="text-sm text-slate-500">© 2026 BountyBridge Foundation. Working towards zero food waste.</p>
        </footer>
      </div>
    </div>
  );
}
