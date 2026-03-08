import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <main className="flex flex-col items-center">
          {/* Hero Section */}
          <div className="max-w-[1280px] w-full px-6 md:px-20 py-12 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit">
                    Fighting Hunger Together
                  </span>
                  <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-slate-100">
                    Reduce Food Waste. <span className="text-primary">Feed Communities.</span>
                  </h1>
                  <p className="text-lg md:text-xl font-normal text-slate-600 dark:text-slate-400 max-w-[540px]">
                    Connecting surplus food from businesses directly to local NGOs. Join the movement to end hunger and promote environmental sustainability.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link to="/donor">
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-primary text-background-dark text-lg font-bold shadow-lg shadow-primary/20 transition-all hover:translate-y-[-2px]">
                      I&apos;m a Donor
                    </button>
                  </Link>
                  <Link to="/ngo">
                    <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 border-2 border-primary/30 bg-transparent text-slate-900 dark:text-slate-100 text-lg font-bold hover:bg-primary/5 transition-colors">
                      I&apos;m an NGO
                    </button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full border-2 border-background-light bg-slate-300"></div>
                    <div className="w-8 h-8 rounded-full border-2 border-background-light bg-slate-400"></div>
                    <div classname="w-8 h-8 rounded-full border-2 border-background-light bg-slate-500"></div>
                  </div>
                  <span>Joined by 500+ local partners this month</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl opacity-30"></div>
                <div className="relative w-full aspect-square rounded-3xl bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center overflow-hidden border border-primary/20">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform hover:scale-105 duration-700"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpld8FXttYvJA9yvcjsgSPxPTiXTQiN8nwjX1NaryUMb5UP2qDGRTwM3MrHLRzfiFkhXoNW3KYMUYRORV8dGKQeiWoJxyQpyNcfnxIxpaFJjgmCea-BUb58bmepsYtyS53micdzp1vDbGBKAaPV0QsPHJN79Wi5z9esFZWHDc_hjH0J_m_B1kk2Lb_TX7vlVTwrx8LfSgGtB98tci70KtDOm6AbsPSE_nWzeyFNWAHF3pc1uRql0iJsPfkEOrvD951c9vG8EepaL58')",
                    }}
                  ></div>
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-background-dark/90 backdrop-blur-sm p-4 rounded-xl flex items-center gap-4 shadow-xl border border-white/20">
                    <div className="p-2 bg-primary rounded-lg text-background-dark">
                      <span className="material-symbols-outlined">eco</span>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-primary uppercase">Daily Impact</p>
                      <p className="text-sm font-semibold">1,240 lbs of food rescued today</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Problem & Solution Section */}
          <div className="w-full bg-white/50 dark:bg-slate-900/20 py-24 border-y border-primary/5">
            <div className="max-w-[1280px] mx-auto px-6 md:px-20">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">Bridging the Hunger Gap</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  While millions of tons of food are wasted every year, millions of people still go hungry. We built BountyBridge to solve this logistics mismatch.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: Problem */}
                <div className="group p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-primary/10 hover:border-primary/40 transition-all flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-xl bg-orange-100 dark:bg-orange-900/30 text-orange-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">warning</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">The Problem</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Over 30% of global food supply is wasted, filling landfills and producing harmful CO2 emissions while food insecurity rises.
                    </p>
                  </div>
                </div>
                {/* Card 2: Solution */}
                <div className="group p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-primary/10 hover:border-primary/40 transition-all flex flex-col gap-6 scale-105 shadow-xl shadow-primary/5">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 text-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">hub</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">Our Solution</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      A smart redistribution platform that alerts nearby NGOs when businesses have surplus, managing logistics in real-time.
                    </p>
                  </div>
                </div>
                {/* Card 3: Impact */}
                <div className="group p-8 rounded-2xl bg-background-light dark:bg-background-dark border border-primary/10 hover:border-primary/40 transition-all flex flex-col gap-6">
                  <div className="w-14 h-14 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold">The Impact</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      Every meal rescued is a step toward zero hunger and a healthier planet. We turn waste into nourishment and community hope.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* Simple Footer */}
        <footer className="w-full border-t border-primary/10 py-12 px-6 md:px-20 bg-background-light dark:bg-background-dark">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100">
              <div className="flex items-center justify-center size-8 rounded-lg bg-primary text-background-dark">
                <span className="material-symbols-outlined text-sm font-bold">handshake</span>
              </div>
              <h2 className="text-lg font-bold leading-tight tracking-tight">BountyBridge</h2>
            </div>
            <div className="flex gap-8 text-sm font-medium text-slate-500">
              <a className="hover:text-primary transition-colors cursor-pointer" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary transition-colors cursor-pointer" href="#">
                Terms of Service
              </a>
              <a className="hover:text-primary transition-colors cursor-pointer" href="#">
                Impact Report 2026
              </a>
            </div>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary/10 transition-colors text-slate-500 cursor-pointer"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">public</span>
              </a>
              <a
                className="w-10 h-10 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary/10 transition-colors text-slate-500 cursor-pointer"
                href="#"
              >
                <span className="material-symbols-outlined text-xl">mail</span>
              </a>
            </div>
          </div>
          <p className="text-center text-slate-400 text-xs mt-8">
            © 2026 BountyBridge Foundaton. Working towards zero food waste.
          </p>
        </footer>
      </div>
    </div>
  );
}
