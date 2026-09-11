import { useState } from 'react';
import { 
  Quote, 
  Sparkles, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  Heart,
  ArrowRight
} from 'lucide-react';
import { HIGHLIGHTED_QUOTES, TRIPADVISOR_STATS } from '../data/eateryData';

export function GuestQuotes() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'breakfast' | 'specials' | 'service'>('all');

  const filteredQuotes = HIGHLIGHTED_QUOTES.filter((q) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'breakfast') return q.highlightTag.toLowerCase().includes('breakfast');
    if (activeFilter === 'specials') return q.highlightTag.toLowerCase().includes('casserole') || q.highlightTag.toLowerCase().includes('beef') || q.highlightTag.toLowerCase().includes('soup');
    if (activeFilter === 'service') return q.highlightTag.toLowerCase().includes('cleanliness') || q.highlightTag.toLowerCase().includes('family') || q.highlightTag.toLowerCase().includes('staff');
    return true;
  });

  return (
    <section className="py-16 bg-[#F5EFE4] border-b border-[#E3D7C3] relative overflow-hidden" id="guest-quotes-section">
      {/* Decorative Warm Accents */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-[#EADCC6]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-[#DECDAF]/30 rounded-full blur-2xl pointer-events-none" />

      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D9CEBA] text-[#8A3B14] text-xs font-bold shadow-2xs">
            <Quote className="w-3.5 h-3.5 fill-[#8A3B14] text-[#8A3B14]" />
            <span>Customer Review Analysis & Genuine Guest Quotes</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#241F1C] tracking-tight">
            What People Love About PDG's
          </h2>

          <p className="text-sm sm:text-base text-[#615448] leading-relaxed">
            We analyzed feedback from hundreds of visits by St Helens locals, regular diners, and travelers. Here is what guests highlight most often:
          </p>

          {/* Quick Analysis Takeaways Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-[#D9CEBA] text-xs font-semibold text-[#3D332B]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00aa6c]" />
              5/5 Food Hygiene Rating
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-[#D9CEBA] text-xs font-semibold text-[#3D332B]">
              <Award className="w-3.5 h-3.5 text-[#8A3B14]" />
              Butcher Meat & Runny Eggs
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-[#D9CEBA] text-xs font-semibold text-[#3D332B]">
              <Heart className="w-3.5 h-3.5 text-[#A84A1C]" />
              40+ Years Catering Experience
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/90 border border-[#D9CEBA] text-xs font-semibold text-[#3D332B]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#196131]" />
              Spotless Cleanliness
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'all'
                ? 'bg-[#241F1C] text-white shadow-xs'
                : 'bg-white/80 text-[#594C40] hover:bg-white border border-[#D5CABB]'
            }`}
          >
            All Quotes ({HIGHLIGHTED_QUOTES.length})
          </button>
          <button
            onClick={() => setActiveFilter('breakfast')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'breakfast'
                ? 'bg-[#8A3B14] text-white shadow-xs'
                : 'bg-white/80 text-[#594C40] hover:bg-white border border-[#D5CABB]'
            }`}
          >
            Cooked Breakfasts
          </button>
          <button
            onClick={() => setActiveFilter('specials')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'specials'
                ? 'bg-[#8A3B14] text-white shadow-xs'
                : 'bg-white/80 text-[#594C40] hover:bg-white border border-[#D5CABB]'
            }`}
          >
            Home Cooking & Specials
          </button>
          <button
            onClick={() => setActiveFilter('service')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeFilter === 'service'
                ? 'bg-[#8A3B14] text-white shadow-xs'
                : 'bg-white/80 text-[#594C40] hover:bg-white border border-[#D5CABB]'
            }`}
          >
            Cleanliness & Atmosphere
          </button>
        </div>

        {/* Quotes Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-[#DFD5C3] shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow relative group"
            >
              {/* Top Row: Stars + Category Pill */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1 text-[#00aa6c]">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="w-2.5 h-2.5 rounded-full bg-[#00aa6c] inline-block" />
                  ))}
                </div>

                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FAF4EA] border border-[#EADBCA] text-[#8A3B14]">
                  {item.highlightTag}
                </span>
              </div>

              {/* Quote Body */}
              <div className="space-y-3 flex-1 mb-4">
                <p className="font-serif italic text-[#322A24] text-sm sm:text-base leading-relaxed">
                  “{item.quote}”
                </p>
              </div>

              {/* Footer: Author & Dish */}
              <div className="pt-3 border-t border-[#F0E8DC] flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-[#241F1C]">{item.author}</h4>
                  <span className="text-[11px] text-[#78695D]">{item.role}</span>
                </div>

                {item.dish && (
                  <span className="text-[11px] font-medium text-[#8A3B14] bg-[#FAF5EE] px-2 py-0.5 rounded-md border border-[#E9E0D1] max-w-[140px] truncate text-right">
                    {item.dish}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Bar */}
        <div className="mt-10 p-5 rounded-2xl bg-white/90 border border-[#DFD5C3] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00aa6c]/15 text-[#00aa6c] flex items-center justify-center font-bold text-sm shrink-0">
              TA
            </div>
            <div>
              <p className="text-xs font-bold text-[#241F1C]">
                TripAdvisor 5.0 Star Average from 218+ Verified Traveler Reviews
              </p>
              <p className="text-[11px] text-[#6E6053]">
                Ranked #1 Cafe in St Helens · Certificate of Excellence
              </p>
            </div>
          </div>

          <a
            href="#reviews"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#241F1C] hover:bg-[#8A3B14] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-2xs shrink-0"
          >
            <span>Read All Full Reviews</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
