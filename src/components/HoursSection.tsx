import { useState, useEffect } from 'react';
import { 
  Clock, 
  Coffee, 
  UtensilsCrossed, 
  Users,
  AlertCircle, 
  Copy,
  Check,
  Sparkles
} from 'lucide-react';
import { OPENING_HOURS, EATERY_INFO } from '../data/eateryData';
import { getCurrentEateryStatus, CurrentStatus } from '../utils/hoursHelper';

export function HoursSection() {
  const [status, setStatus] = useState<CurrentStatus>(getCurrentEateryStatus());
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStatus(getCurrentEateryStatus());
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyHours = () => {
    const hoursSummary = OPENING_HOURS.map(
      (h) => `${h.day}: ${h.displayHours}`
    ).join('\n');
    navigator.clipboard.writeText(`PDG's Eatery Opening Hours:\n${hoursSummary}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hours" className="py-20 bg-[#F4EEE2] border-b border-[#E8DEC8]">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8A3B14] block">
            Plan Your Visit
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#221F1E]">
            Opening Times & Cafe Schedule
          </h2>
          <p className="text-[#64594E] text-base sm:text-lg">
            Serving hearty cooked breakfasts from 7:30 AM, daily home-cooked specials, and fresh lunches on Cambridge Road, St Helens.
          </p>
        </div>

        {/* Live Status Hero Banner */}
        <div 
          id="today-live-status-card"
          className="w-full mb-12 rounded-2xl bg-white p-6 sm:p-8 border border-[#DFD5C3] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-5">
            <div
              className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border ${
                status.isOpen
                  ? 'bg-[#EBF7EE] text-[#1D6A37] border-[#BDE7C8]'
                  : 'bg-[#F9EFE2] text-[#865B27] border-[#E8D9BF]'
              }`}
            >
              <Clock className="w-8 h-8" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="font-display text-2xl font-bold text-[#221F1E]">
                  Today is {status.todaySchedule.day}
                </h3>
                <span
                  className={`px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 ${
                    status.isOpen
                      ? 'bg-[#D2EED8] text-[#196131]'
                      : 'bg-[#EFE3CF] text-[#865B27]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      status.isOpen ? 'bg-[#196131] animate-ping' : 'bg-[#865B27]'
                    }`}
                  />
                  {status.statusText}
                </span>
              </div>
              <p className="text-sm text-[#61554A] mt-1">
                Hours today: <strong className="text-[#241F1C]">{status.todaySchedule.displayHours}</strong>
                <span className="text-[#8A7969] ml-2">({status.nextChangeText})</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleCopyHours}
              className="flex-1 md:flex-initial px-4 py-2.5 rounded-xl border border-[#D5CABB] text-xs font-semibold text-[#4F443A] hover:bg-[#F7F2E9] transition-colors flex items-center justify-center gap-2"
              id="copy-hours-btn"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-700">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8A3B14]" />
                  <span>Copy Hours</span>
                </>
              )}
            </button>
            <a
              href="tel:01744759130"
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-xl bg-[#241F1C] hover:bg-[#8A3B14] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs text-center"
              id="hours-call-order-btn"
            >
              Call 01744 759130
            </a>
          </div>
        </div>

        {/* 7-Day Schedule Grid & Service Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
          {/* Schedule Table */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#DFD5C3] p-6 sm:p-8 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-[#EFE8DC] mb-4">
              <h3 className="font-display text-xl font-bold text-[#221F1E]">
                Weekly Cafe Schedule
              </h3>
              <span className="text-xs text-[#87786B]">Hot kitchen orders close at 3:00 PM</span>
            </div>

            <div className="space-y-3" id="weekly-hours-list">
              {OPENING_HOURS.map((day, idx) => {
                const isCurrentDay = status.dayIndex === idx;
                return (
                  <div
                    key={day.day}
                    className={`p-4 rounded-xl transition-all border ${
                      isCurrentDay
                        ? 'bg-[#FAF6EE] border-[#8A3B14]/40 shadow-xs ring-1 ring-[#8A3B14]/20'
                        : 'bg-[#FCFAF7] border-[#EFE8DC] hover:border-[#DDD1BD]'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                      <div className="flex items-center gap-2.5">
                        <span className="font-display font-bold text-base text-[#241F1C] min-w-[110px]">
                          {day.day}
                        </span>
                        {isCurrentDay && (
                          <span className="px-2 py-0.5 rounded-md bg-[#8A3B14] text-white text-[10px] font-bold uppercase tracking-wider">
                            Today
                          </span>
                        )}
                        {day.isClosed && (
                          <span className="px-2 py-0.5 rounded-md bg-[#EBE3D5] text-[#7A6B5D] text-[10px] font-semibold uppercase tracking-wider">
                            Closed
                          </span>
                        )}
                      </div>

                      <span className={`font-sans font-bold text-sm ${day.isClosed ? 'text-[#8A7969]' : 'text-[#221F1E]'}`}>
                        {day.displayHours}
                      </span>
                    </div>

                    {/* Breakdown of services */}
                    <div className="mt-2.5 pt-2 border-t border-[#EFE7D8] flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6F6255]">
                      {day.breakfastService && (
                        <div className="flex items-center gap-1.5 text-[#8A3B14] font-medium">
                          <Coffee className="w-3.5 h-3.5" />
                          <span>{day.breakfastService}</span>
                        </div>
                      )}
                      {day.lunchService && (
                        <div className="flex items-center gap-1.5">
                          <UtensilsCrossed className="w-3 h-3 text-[#7D7062]" />
                          <span>{day.lunchService}</span>
                        </div>
                      )}
                      {day.notes && (
                        <div className="flex items-center gap-1.5 text-[#5F5448]">
                          <Sparkles className="w-3 h-3 text-[#A26019]" />
                          <span>{day.notes}</span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Service Policies & Special Timings Info */}
          <div className="lg:col-span-4 space-y-6">
            {/* Service Windows Breakdown */}
            <div className="bg-white rounded-2xl border border-[#DFD5C3] p-6 shadow-xs space-y-4">
              <h4 className="font-display text-lg font-bold text-[#221F1E]">
                Daily Cafe Services
              </h4>

              <div className="space-y-3.5 text-xs text-[#5D5247]">
                <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#ECE2D2] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#8A3B14]">
                    <Coffee className="w-4 h-4" />
                    <span>Cooked Breakfast Service</span>
                  </div>
                  <p className="text-[#6D6054]">
                    Served Monday to Saturday from 7:30 AM. Choose from our famous Hearty, Medium, or Mini breakfasts, toasted breakfast barms, and fresh tea.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#ECE2D2] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#8A3B14]">
                    <UtensilsCrossed className="w-4 h-4" />
                    <span>Home-Cooked Lunch & Specials</span>
                  </div>
                  <p className="text-[#6D6054]">
                    From 11:45 AM onwards. Chef Paul's homemade beef casserole, golden battered fish & chips with mushy peas, and freshly made soup of the day.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#ECE2D2] space-y-1">
                  <div className="flex items-center gap-2 font-bold text-[#8A3B14]">
                    <Users className="w-4 h-4" />
                    <span>Walk-In Dining & Table Seating</span>
                  </div>
                  <p className="text-[#6D6054]">
                    Relax in our spotless cafe dining room. We operate on a walk-in basis with plenty of comfortable tables, prompt service, and warm St Helens hospitality.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Notes */}
            <div className="bg-[#FAF6EE] rounded-2xl border border-[#DFD5C3] p-6 shadow-xs space-y-3 text-xs text-[#635548]">
              <div className="flex items-center gap-2 font-bold text-[#241F1C]">
                <AlertCircle className="w-4 h-4 text-[#8A3B14]" />
                <span>Good to Know</span>
              </div>
              <ul className="space-y-2 list-disc list-inside text-[#635548] leading-relaxed">
                <li><strong>Sunday Rest Day:</strong> We are closed on Sundays to rest with family and prep fresh for Monday.</li>
                <li><strong>Kitchen Orders:</strong> Last hot food and fryer orders are taken at 3:00 PM (doors close 3:30 PM).</li>
                <li><strong>Payment:</strong> Cash and card payments welcome.</li>
                <li><strong>Parking:</strong> Free roadside customer parking right outside along Cambridge Road.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
