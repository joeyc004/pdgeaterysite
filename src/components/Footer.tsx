import { useState, FormEvent } from 'react';
import { 
  Heart, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Award, 
  ExternalLink, 
  Check, 
  ArrowUp 
} from 'lucide-react';
import { EATERY_INFO, OPENING_HOURS, TRIPADVISOR_STATS } from '../data/eateryData';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1E1916] text-[#D8CDC0] pt-16 pb-12 border-t border-[#312924]" id="main-footer">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#312924]">
          {/* Col 1: Brand & Ethos (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8A3B14] text-white flex items-center justify-center font-display text-lg font-bold">
                PDG
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-[#F8F4EB] tracking-tight">
                  PDG's Eatery
                </h3>
                <span className="text-[11px] uppercase tracking-widest text-[#A8988B]">
                  Traditional Cafe & Breakfasts · St Helens
                </span>
              </div>
            </div>

            <p className="text-xs text-[#B5A698] leading-relaxed max-w-sm">
              Proudly serving the St Helens community with hearty cooked breakfasts, slow-cooked homemade casseroles, golden fish & chips, and warm hospitality from 88 Cambridge Road.
            </p>

            {/* TripAdvisor Pill */}
            <div className="p-3 rounded-xl bg-[#29221E] border border-[#3D332D] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#00aa6c] text-white flex items-center justify-center font-bold text-xs shrink-0">
                TA
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1">
                  <span className="font-bold text-[#F8F4EB]">TripAdvisor 5.0 / 5.0</span>
                  <div className="flex text-[#00aa6c]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#00aa6c] ml-0.5" />
                    ))}
                  </div>
                </div>
                <p className="text-[11px] text-[#A8988B]">Top-rated traditional cafe in St Helens</p>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Opening Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#F8F4EB] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#8A3B14]" />
              <span>Opening Hours</span>
            </h4>

            <div className="space-y-1.5 text-xs text-[#B5A698]">
              <div className="flex justify-between pb-1 border-b border-[#2C241F]">
                <span>Monday – Friday:</span>
                <span className="text-[#F8F4EB] font-medium">7:30 AM – 3:30 PM</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-[#2C241F]">
                <span>Saturday:</span>
                <span className="text-[#F8F4EB] font-medium">7:30 AM – 3:30 PM</span>
              </div>
              <div className="flex justify-between pb-1 border-b border-[#2C241F]">
                <span>Sunday:</span>
                <span className="text-[#D69670] font-medium">Closed (Family Day)</span>
              </div>
            </div>

            <p className="text-[11px] text-[#8E7E71] italic pt-1">
              Hot food orders close at 3:00 PM.
            </p>
          </div>

          {/* Col 3: Address & Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#F8F4EB] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#8A3B14]" />
              <span>Find Us</span>
            </h4>

            <div className="text-xs text-[#B5A698] space-y-2">
              <p>
                {EATERY_INFO.address.street}<br />
                {EATERY_INFO.address.city}<br />
                <span className="font-mono text-[#D69670] font-semibold">{EATERY_INFO.address.postcode}</span><br />
                United Kingdom
              </p>
              <div className="space-y-1 pt-1">
                <a
                  href={`tel:${EATERY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="block text-[#D69670] hover:underline font-mono font-bold"
                >
                  {EATERY_INFO.phone}
                </a>
                <a
                  href={`mailto:${EATERY_INFO.email}`}
                  className="block hover:underline truncate"
                >
                  {EATERY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Community Updates (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[#F8F4EB] flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#8A3B14]" />
              <span>Daily Cafe Specials</span>
            </h4>

            <p className="text-xs text-[#B5A698] leading-relaxed">
              Get updates on Chef Paul's daily slow-cooked specials, seasonal soups, fresh baking, and holiday opening hours.
            </p>

            {subscribed ? (
              <div className="p-2.5 rounded-lg bg-[#29221E] border border-[#3E5243] text-xs text-[#A1D9B0] flex items-center gap-2">
                <Check className="w-4 h-4 text-green-400" />
                <span>Thank you! You're on the list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 rounded-lg bg-[#29221E] border border-[#3D332D] text-xs text-white placeholder:text-[#7A6B5F] focus:outline-none focus:border-[#8A3B14]"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 rounded-lg bg-[#8A3B14] hover:bg-[#A3471A] text-white text-xs font-bold transition-colors"
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E7E71]">
          <p>© {new Date().getFullYear()} PDG's Eatery Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#menu" className="hover:text-[#F8F4EB] transition-colors">Menu Gallery</a>
            <a href="#hours" className="hover:text-[#F8F4EB] transition-colors">Opening Hours</a>
            <a href="#reviews" className="hover:text-[#F8F4EB] transition-colors">TripAdvisor</a>
            <a href="#contact" className="hover:text-[#F8F4EB] transition-colors">Contact</a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#29221E] hover:bg-[#382E28] text-white transition-colors ml-2"
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
