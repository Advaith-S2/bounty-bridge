import { Link } from "react-router-dom";

export default function NgoDashboard({ donations, claimDonation }) {
  const availableDonations = donations.filter((d) => d.status === "available");
  const claimedDonations = donations.filter((d) => d.status === "claimed");

  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen">
      <div className="layout-container flex flex-col min-h-screen">
        {/* Top Navigation */}
        <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-primary/10 px-4 md:px-10 lg:px-20 py-3">
          <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl">diversity_1</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">BountyBridge</h2>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <Link to="/" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm">Home</Link>
                <Link to="/donor" className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors text-sm">Donor Dashboard</Link>
                <Link to="/ngo" className="text-primary font-semibold text-sm">NGO Dashboard</Link>
              </nav>
            </div>
            <div className="flex flex-1 justify-end items-center gap-4">
              <label className="hidden sm:flex flex-col min-w-40 max-w-64 w-full">
                <div className="flex w-full items-center rounded-xl bg-primary/10 px-3 py-2 border border-transparent focus-within:border-primary/30 transition-all">
                  <span className="material-symbols-outlined text-primary text-xl">search</span>
                  <input
                    className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-slate-500 outline-none"
                    placeholder="Search food nearby..."
                    type="text"
                  />
                </div>
              </label>
              <div className="flex items-center gap-3">
                <button className="material-symbols-outlined p-2 hover:bg-primary/10 rounded-full transition-colors cursor-pointer">
                  notifications
                </button>
                <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary/30">
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="flex flex-1 max-w-[1440px] mx-auto w-full px-4 md:px-10 lg:px-20 py-8 gap-8">
          {/* Main Content Area */}
          <main className="flex-1 min-w-0">
            <div className="flex flex-col gap-6">
              {/* Filters & Header */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Marketplace</h1>
                  <p className="text-slate-500 text-sm">Rescue available surplus food from local businesses.</p>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-lg">filter_list</span>
                    Filter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-lg">sort</span>
                    Nearest
                  </button>
                </div>
              </div>

              {/* Category Pills */}
              <div className="flex gap-3 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none' }}>
                <button className="shrink-0 px-4 py-1.5 rounded-full bg-primary text-background-dark font-semibold text-sm cursor-pointer">
                  All Donations
                </button>
                <button className="shrink-0 px-4 py-1.5 rounded-full bg-primary/10 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-primary/20 cursor-pointer">
                  Vegetables
                </button>
                <button className="shrink-0 px-4 py-1.5 rounded-full bg-primary/10 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-primary/20 cursor-pointer">
                  Prepared Meals
                </button>
                <button className="shrink-0 px-4 py-1.5 rounded-full bg-primary/10 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-primary/20 cursor-pointer">
                  Bakery
                </button>
                <button className="shrink-0 px-4 py-1.5 rounded-full bg-primary/10 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-primary/20 cursor-pointer">
                  Dairy
                </button>
                <button className="shrink-0 px-4 py-1.5 rounded-full bg-primary/10 text-slate-700 dark:text-slate-300 font-medium text-sm hover:bg-primary/20 cursor-pointer">
                  Grains
                </button>
              </div>

              {/* Marketplace Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {donations.length === 0 ? (
                    <div className="col-span-full flex flex-col items-center justify-center py-20 opacity-50">
                        <span className="material-symbols-outlined text-6xl">inventory_2</span>
                        <p className="mt-4 text-lg font-medium">No donations available yet in your area.</p>
                    </div>
                ) : (
                    donations.map((donation) => {
                        const isAvailable = donation.status === "available";
                        const isUrgent = isAvailable && donation.expiryTime && donation.expiryTime.toLowerCase().includes('today');
                        
                        return (
                            <div key={donation.id} className={`bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow group ${!isAvailable ? 'opacity-70 grayscale' : ''}`}>
                                <div className="p-5 flex flex-col gap-4">
                                    <div>
                                        <div className="flex flex-col gap-2 mb-3">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-bold text-lg leading-tight">{donation.foodName}</h3>
                                                <span className="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg font-medium">{donation.quantity}</span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {isAvailable && (
                                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${isUrgent ? 'bg-red-500 text-white' : 'bg-primary text-background-dark'}`}>
                                                        {isUrgent ? 'Urgent' : 'Fresh'}
                                                    </span>
                                                )}
                                                {!isAvailable && (
                                                    <span className="bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">Already Claimed</span>
                                                )}
                                                <span className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold px-2 py-1 rounded-md">
                                                    {(1 + (donation.id % 5)).toFixed(1)} km away
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-slate-500 text-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-sm">location_on</span>
                                            {donation.location}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        {isAvailable ? (
                                            <div className={`flex items-center gap-2 text-xs font-medium p-2 rounded-lg ${isUrgent ? 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20' : 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20'}`}>
                                                <span className="material-symbols-outlined text-sm">schedule</span>
                                                Expires: {donation.expiryTime}
                                            </div>
                                        ) : (
                                            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 p-2 rounded-lg">
                                                <span className="material-symbols-outlined text-sm">check_circle</span>
                                                Claimed Successfully
                                            </div>
                                        )}
                                    </div>

                                    {isAvailable ? (
                                        <button
                                            onClick={() => claimDonation(donation.id)}
                                            className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                                        >
                                            <span className="material-symbols-outlined">shopping_basket</span>
                                            Claim Donation
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            className="w-full bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed font-bold py-3 rounded-xl transition-all"
                                        >
                                            Not Available
                                        </button>
                                    )}
                                </div>
                            </div>
                        );
                    })
                )}
              </div>
            </div>
          </main>
        </div>

        {/* Floating Action for Mobile */}
        <button className="fixed bottom-6 right-6 lg:hidden bg-primary text-background-dark size-14 rounded-full shadow-2xl flex items-center justify-center z-50 cursor-pointer">
          <span className="material-symbols-outlined text-3xl">map</span>
        </button>
      </div>
    </div>
  );
}
