import { Star, Clock, MapPin, Award, ArrowRight, Utensils, Heart, Phone } from 'lucide-react';
import { EATERY_INFO, TRIPADVISOR_STATS } from '../data/eateryData';
import { getCurrentEateryStatus } from '../utils/hoursHelper';

export function Hero() {
  const currentStatus = getCurrentEateryStatus();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#EFE7D8]" id="hero-section">
      {/* Subtle Warm Textured Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F0] via-[#F8F4EB] to-[#F3EEE2] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F3E5D4]/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8DDD0]/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Story & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* TripAdvisor Travelers' Choice Badge Pill */}
            <a
              href="#reviews"
              id="hero-tripadvisor-badge"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EAF7EE] border border-[#C2E8CC] text-[#135A30] text-xs font-semibold hover:bg-[#DEF0E2] transition-colors shadow-2xs group"
            >
              <span className="w-5 h-5 rounded-full bg-[#00aa6c] text-white flex items-center justify-center">
                <Award className="w-3 h-3 text-white" />
              </span>
              <span>{TRIPADVISOR_STATS.award}</span>
              <span className="text-[#3A7B54] font-normal">|</span>
              <div className="flex items-center gap-1">
                <div className="flex text-[#00aa6c]">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block w-2 h-2 rounded-full bg-[#00aa6c] mr-0.5" />
                  ))}
                </div>
                <span className="font-bold text-[#14572F] ml-1">{TRIPADVISOR_STATS.averageRating}.0</span>
                <span className="text-[#4E7D61] font-normal">({TRIPADVISOR_STATS.totalReviews} reviews)</span>
              </div>
              <ArrowRight className="w-3 h-3 text-[#135A30] group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#221F1E] font-bold tracking-tight leading-[1.12]">
                PDG's Eatery
                <span className="block text-2xl sm:text-3xl md:text-4xl font-normal text-[#8A3B14] italic mt-1 font-serif">
                  Traditional Cafe & Home Cooking in St Helens
                </span>
              </h1>
              <p className="text-base sm:text-lg text-[#5D5248] leading-relaxed max-w-2xl font-light">
                Welcome to PDG's Eatery. Established in 2007 by Paul Gaskin with over 40 years of catering experience, we serve hearty cooked breakfasts, oven-baked jacket potatoes, sandwiches, and daily home-cooked specials in a friendly, spotless setting.
              </p>
            </div>

            {/* Quick Status Bar */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#52473E] pt-1">
              <div className="flex items-center gap-2 bg-[#FAF4EA] px-3 py-1.5 rounded-lg border border-[#E9DFCE]">
                <Clock className="w-4 h-4 text-[#8A3B14]" />
                <span className="font-medium">
                  Today ({currentStatus.todaySchedule.shortDay}): {currentStatus.todaySchedule.displayHours}
                </span>
                <span
                  className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${
                    currentStatus.isOpen 
                      ? 'bg-[#D2EED8] text-[#196131]' 
                      : currentStatus.todaySchedule.isClosed
                        ? 'bg-[#F2E5D5] text-[#865B27]'
                        : 'bg-[#EFE3CF] text-[#865B27]'
                  }`}
                >
                  {currentStatus.isOpen ? 'Open Now' : currentStatus.todaySchedule.isClosed ? 'Closed Today (Sun)' : 'Closed Now'}
                </span>
              </div>

              <div className="flex items-center gap-2 bg-[#FAF4EA] px-3 py-1.5 rounded-lg border border-[#E9DFCE]">
                <MapPin className="w-4 h-4 text-[#8A3B14]" />
                <span>88 Cambridge Road, St Helens WA10 4HA</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#menu"
                id="hero-view-menu-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#241F1C] hover:bg-[#8A3B14] text-[#FBF9F5] font-semibold text-sm tracking-wide transition-all shadow-md hover:shadow-lg active:scale-98"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Full Menu</span>
              </a>

              <a
                href={`tel:${EATERY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                id="hero-call-btn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F5EDE1] text-[#241F1C] border border-[#D5CABB] font-semibold text-sm tracking-wide transition-all shadow-2xs hover:shadow-xs active:scale-98"
              >
                <Phone className="w-4 h-4 text-[#8A3B14]" />
                <span>Call {EATERY_INFO.phone}</span>
              </a>

              <a
                href="#reviews"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-medium text-[#735F52] hover:text-[#8A3B14] transition-colors"
              >
                <Star className="w-4 h-4 text-[#00aa6c] fill-[#00aa6c]" />
                <span>TripAdvisor 5.0 Rating</span>
              </a>
            </div>

            {/* Customer Quote Snippet in Hero */}
            <div className="p-3.5 rounded-xl bg-[#FAF5EC] border border-[#E8DFC8] flex items-start gap-3">
              <div className="flex text-[#00aa6c] mt-0.5 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="inline-block w-2 h-2 rounded-full bg-[#00aa6c] mr-0.5" />
                ))}
              </div>
              <p className="text-xs text-[#54473D] italic leading-relaxed">
                <span className="font-serif text-[#8A3B14] font-bold not-italic">“Best breakfast in St Helens by a country mile</span> — proper thick bacon, runny eggs, spotless cafe and the staff treat everyone like family.”
                <span className="block not-italic text-[11px] font-semibold text-[#8B7C6E] mt-1">
                  — Dave M., TripAdvisor Verified Diner
                </span>
              </p>
            </div>

            {/* 3 Pillars / Quality Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#EFE7D8]">
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-[#8A3B14] block">Butcher Quality</span>
                <p className="text-xs text-[#6A5E53] leading-snug">British pork sausages, thick back bacon & free-range eggs</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-[#8A3B14] block">Freshly Prepared</span>
                <p className="text-xs text-[#6A5E53] leading-snug">Steak & mushroom casserole, soup & golden fish & chips</p>
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold tracking-wider text-[#8A3B14] block">St Helens Proud</span>
                <p className="text-xs text-[#6A5E53] leading-snug">Serving Cambridge Road & the St Helens community since 2007</p>
              </div>
            </div>
          </div>

          {/* Right Column: Culinary Gallery Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Prominent Dish Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 bg-[#E8DDD0]">
                <img
                  src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1000&q=85"
                  alt="PDG's Cooked English Breakfast"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#8A3B14] text-[11px] font-semibold tracking-wider uppercase mb-1">
                    Customer Favourite
                  </span>
                  <h3 className="font-display text-lg font-bold">Hearty Breakfast</h3>
                  <p className="text-xs text-white/90">2 bacon, 2 sausages, 2 eggs, 2 black pudding, tomato, beans, mushrooms & 2 toast · £7.50</p>
                </div>
              </div>

              {/* Floating Second Dish Card */}
              <div className="absolute -bottom-8 -left-6 sm:-left-8 bg-white p-3 rounded-xl shadow-xl border border-[#E9E1D2] max-w-[220px] hidden sm:flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=200&q=80"
                  alt="Steak & Mushroom Casserole"
                  className="w-14 h-14 rounded-lg object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <span className="text-[10px] font-bold text-[#8A3B14] uppercase tracking-wider block">Cafe Special</span>
                  <p className="text-xs font-semibold text-[#221F1E] leading-tight">Steak & Mushroom Casserole</p>
                  <span className="text-xs text-[#735F52] font-medium">£7.50 with homemade chips</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
