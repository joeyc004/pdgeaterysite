import { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Star, Utensils } from 'lucide-react';
import { EATERY_INFO, TRIPADVISOR_STATS } from '../data/eateryData';
import { getCurrentEateryStatus, CurrentStatus } from '../utils/hoursHelper';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [status, setStatus] = useState<CurrentStatus>(getCurrentEateryStatus());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getCurrentEateryStatus());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Menu Gallery', href: '#menu' },
    { label: 'Opening Times', href: '#hours' },
    { label: 'TripAdvisor Reviews', href: '#reviews' },
    { label: 'Find & Contact Us', href: '#contact' },
  ];

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FBF9F5]/95 backdrop-blur-md shadow-sm border-b border-[#E8E1D5] py-3'
            : 'bg-[#FBF9F5]/90 backdrop-blur-sm border-b border-[#EFE8DC] py-4'
        }`}
      >
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 flex items-center justify-between">
          {/* Logo & Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 focus:outline-none"
            id="brand-logo-link"
          >
            <div className="w-10 h-10 rounded-full bg-[#241F1C] text-[#FBF9F5] flex items-center justify-center font-display text-lg font-bold tracking-wider group-hover:bg-[#8A3B14] transition-colors shadow-xs">
              PDG
            </div>
            <div>
              <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[#221F1E] block leading-tight">
                PDG's Eatery
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#7C6E65] font-medium block">
                Cambridge Road, St Helens · Est. 2007
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" id="desktop-navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-[#4D453E] hover:text-[#8A3B14] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#8A3B14] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Status Pill */}
            <a
              href="#hours"
              id="header-hours-badge"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                status.isOpen
                  ? 'bg-[#EBF7EE] text-[#1E6335] border-[#C2E8CC] hover:bg-[#DEF0E2]'
                  : 'bg-[#F6EFE6] text-[#785936] border-[#E8DCB8] hover:bg-[#EFE5DA]'
              }`}
              title={status.nextChangeText}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  status.isOpen ? 'bg-[#228B22] animate-pulse' : 'bg-[#C2822B]'
                }`}
              />
              <span>{status.isOpen ? 'Open Now' : status.todaySchedule.isClosed ? 'Closed Today' : 'Closed Now'}</span>
              <span className="text-[11px] opacity-75 hidden xl:inline">
                {status.isOpen 
                  ? `· Open till ${status.todaySchedule.closeTime}` 
                  : status.todaySchedule.isClosed 
                    ? '· Sun Rest Day' 
                    : `· Opens 7:30 AM`}
              </span>
            </a>

            {/* Quick Call */}
            <a
              href={`tel:${EATERY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="p-2 text-[#5A5047] hover:text-[#8A3B14] hover:bg-[#EFE8DD] rounded-full transition-colors"
              title="Call PDG's Eatery"
              id="header-phone-button"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Menu CTA */}
            <a
              href="#menu"
              id="header-menu-cta-btn"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#241F1C] hover:bg-[#8A3B14] text-[#FBF9F5] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs active:scale-95"
            >
              <Utensils className="w-3.5 h-3.5" />
              <span>Explore Menu</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${EATERY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="px-3 py-1.5 rounded-md bg-[#241F1C] text-[#FBF9F5] text-xs font-medium inline-flex items-center gap-1"
              id="mobile-call-btn"
            >
              <Phone className="w-3 h-3" />
              <span>Call</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#241F1C] hover:bg-[#EFE8DD] rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
              id="mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-50 lg:hidden bg-black/40 backdrop-blur-xs flex justify-end"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-[82%] max-w-sm bg-[#FBF9F5] h-full shadow-2xl p-6 flex flex-col justify-between border-l border-[#E5DEC9]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-[#EFE8DC]">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#241F1C] text-white flex items-center justify-center font-display font-bold text-sm">
                    PDG
                  </div>
                  <div>
                    <h2 className="font-display font-bold text-lg text-[#241F1C]">PDG's Eatery</h2>
                    <p className="text-xs text-[#7C6E65]">Cambridge Rd, St Helens WA10 4HA</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#63574D] hover:bg-[#EFE8DD] rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status pill in drawer */}
              <div className="my-5 p-3 rounded-lg bg-[#F5EFE6] border border-[#E8DCB8] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      status.isOpen ? 'bg-[#228B22] animate-pulse' : 'bg-[#C2822B]'
                    }`}
                  />
                  <span className="font-semibold text-xs text-[#2A231F]">{status.statusText}</span>
                </div>
                <span className="text-xs text-[#7C6E65]">{status.nextChangeText}</span>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-3 rounded-lg text-base font-medium text-[#3D352F] hover:bg-[#EFE8DD] hover:text-[#8A3B14] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* TripAdvisor Snippet */}
              <div className="mt-6 p-3 rounded-lg bg-[#EBF7EE] border border-[#C2E8CC] flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#00aa6c] text-white flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 fill-white" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-[#18552E]">{TRIPADVISOR_STATS.averageRating}.0 / 5.0 on TripAdvisor</p>
                  <p className="text-[#3F7552]">{TRIPADVISOR_STATS.ranking}</p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-[#EFE8DC] space-y-3">
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-[#241F1C] hover:bg-[#8A3B14] text-[#FBF9F5] font-semibold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Full Menu</span>
              </a>

              <div className="flex gap-2">
                <a
                  href={`tel:${EATERY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex-1 py-2.5 px-3 rounded-lg border border-[#DCD3C1] text-xs font-medium text-[#4D453E] hover:bg-[#EFE8DD] flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8A3B14]" />
                  <span>Call Eatery</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-2.5 px-3 rounded-lg border border-[#DCD3C1] text-xs font-medium text-[#4D453E] hover:bg-[#EFE8DD] flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#8A3B14]" />
                  <span>Address</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
