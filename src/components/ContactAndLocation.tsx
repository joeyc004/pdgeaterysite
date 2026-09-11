import { useState, FormEvent } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Navigation, 
  Copy, 
  Check, 
  Train, 
  Bus, 
  Car, 
  ExternalLink, 
  Send, 
  CheckCircle2,
  Compass
} from 'lucide-react';
import { EATERY_INFO } from '../data/eateryData';

export function ContactAndLocation() {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubject, setInquirySubject] = useState('General Cafe Inquiry');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const fullAddressString = `${EATERY_INFO.address.street}, ${EATERY_INFO.address.neighborhood}, ${EATERY_INFO.address.city}, ${EATERY_INFO.address.postcode}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddressString);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleSendInquiry = (e: FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryMessage) return;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryName('');
      setInquiryEmail('');
      setInquiryMessage('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FBF9F5] border-b border-[#E8DEC8]">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8A3B14] block">
            Find & Contact Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#221F1E]">
            Address & Contact Details
          </h2>
          <p className="text-[#64594E] text-base sm:text-lg">
            Located on Cambridge Road in St Helens (WA10 4HA). Pop in for a freshly cooked breakfast, hot lunch, or get in touch with Paul and the team.
          </p>
        </div>

        {/* 3 Main Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 1. Address Card */}
          <div className="bg-white rounded-2xl border border-[#DFD5C3] p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4EA] text-[#8A3B14] flex items-center justify-center border border-[#EBE1D0]">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#221F1E]">
                Our Address
              </h3>
              <div className="text-xs sm:text-sm text-[#5C5045] leading-relaxed">
                <p className="font-semibold text-[#241F1C]">{EATERY_INFO.address.street}</p>
                <p>{EATERY_INFO.address.city}</p>
                <p className="font-mono text-[#8A3B14] font-semibold">{EATERY_INFO.address.postcode}</p>
                <p className="text-[#7A6C5F]">United Kingdom</p>
              </div>
              <p className="text-xs text-[#8A796A] italic">
                On Cambridge Road (B5201), near Ruskin Sports Village & Queens Park.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F0E9DD] flex items-center gap-2">
              <button
                onClick={handleCopyAddress}
                className="flex-1 py-2 px-3 rounded-lg border border-[#D5CABB] text-xs font-semibold text-[#483E34] hover:bg-[#F6EFE6] transition-colors flex items-center justify-center gap-1.5"
                id="copy-address-card-btn"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-green-600" />
                    <span className="text-green-700">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#8A3B14]" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(fullAddressString)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3 rounded-lg bg-[#241F1C] hover:bg-[#8A3B14] text-white text-xs font-semibold transition-colors flex items-center gap-1"
                id="google-maps-link-btn"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Maps</span>
              </a>
            </div>
          </div>

          {/* 2. Direct Phone & Orders */}
          <div className="bg-white rounded-2xl border border-[#DFD5C3] p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4EA] text-[#8A3B14] flex items-center justify-center border border-[#EBE1D0]">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#221F1E]">
                Telephone & Enquiries
              </h3>
              <div className="text-xs sm:text-sm text-[#5C5045] space-y-1">
                <p>
                  Call Cafe Direct:{' '}
                  <a
                    href={`tel:${EATERY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                    className="font-bold text-[#8A3B14] hover:underline block text-lg font-mono"
                  >
                    {EATERY_INFO.phone}
                  </a>
                </p>
                <p className="text-xs text-[#7B6E62]">
                  Mobile: <strong>{EATERY_INFO.mobile}</strong>
                </p>
              </div>
              <p className="text-xs text-[#8A796A]">
                Lines open Monday to Saturday from 7:30 AM to 3:30 PM.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F0E9DD]">
              <a
                href={`tel:${EATERY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="w-full py-2.5 px-3 rounded-lg bg-[#241F1C] hover:bg-[#8A3B14] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                id="call-us-direct-btn"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {EATERY_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* 3. Email & Online Inquiries */}
          <div className="bg-white rounded-2xl border border-[#DFD5C3] p-6 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#FAF4EA] text-[#8A3B14] flex items-center justify-center border border-[#EBE1D0]">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#221F1E]">
                Email & Community
              </h3>
              <div className="text-xs sm:text-sm text-[#5C5045] space-y-1">
                <p>
                  Direct Email:{' '}
                  <a
                    href={`mailto:${EATERY_INFO.email}`}
                    className="font-bold text-[#8A3B14] hover:underline block text-base"
                  >
                    {EATERY_INFO.email}
                  </a>
                </p>
                <p className="text-xs text-[#7B6E62]">
                  Catering, dietary questions & feedback
                </p>
              </div>
              <p className="text-xs text-[#8A796A]">
                Prompt replies from Paul and the team during cafe hours.
              </p>
            </div>

            <div className="pt-4 border-t border-[#F0E9DD]">
              <a
                href={`mailto:${EATERY_INFO.email}`}
                className="w-full py-2.5 px-3 rounded-lg border border-[#241F1C] text-[#241F1C] hover:bg-[#241F1C] hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                id="email-eatery-from-contact-card"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map, Directions & Neighborhood Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Visual Interactive Map / Location Blueprint */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#DFD5C3] overflow-hidden shadow-xs">
            {/* Map Canvas Header */}
            <div className="p-4 sm:p-5 bg-[#FAF6EE] border-b border-[#EFE7D8] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#8A3B14]" />
                <span className="font-display font-bold text-sm text-[#221F1E]">
                  St Helens · Cambridge Road & Local Landmarks
                </span>
              </div>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(fullAddressString)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#8A3B14] hover:underline flex items-center gap-1"
              >
                <span>Google Maps View</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Stylized Architectural Map Illustration */}
            <div className="relative p-6 sm:p-8 bg-[#F5EFE4] min-h-[340px] flex items-center justify-center overflow-hidden">
              {/* Street Grid Graphic */}
              <svg className="w-full h-72" viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background */}
                <rect width="600" height="320" fill="#F4EEE3" />
                
                {/* Major Streets */}
                <path d="M0 160 H600" stroke="#E6DAC8" strokeWidth="36" />
                <path d="M220 0 V320" stroke="#E6DAC8" strokeWidth="28" />
                <path d="M420 0 V320" stroke="#E6DAC8" strokeWidth="24" />
                <path d="M0 70 C180 70 280 120 600 90" stroke="#EBE0CF" strokeWidth="18" />

                {/* Street Names */}
                <text x="40" y="165" fill="#A89A8C" fontSize="11" fontWeight="600" letterSpacing="1">
                  CAMBRIDGE ROAD (B5201)
                </text>
                <text x="228" y="45" fill="#A89A8C" fontSize="10" fontWeight="500" letterSpacing="0.5">
                  DUKE STREET
                </text>
                <text x="428" y="290" fill="#A89A8C" fontSize="10" fontWeight="500" letterSpacing="0.5">
                  BOUNDARY ROAD
                </text>

                {/* Park: Queens Park */}
                <rect x="260" y="20" width="140" height="100" rx="12" fill="#E2EEDF" stroke="#C8DEC3" strokeWidth="1.5" />
                <text x="280" y="65" fill="#4B774E" fontSize="11" fontWeight="600">Queens Park</text>
                <text x="280" y="80" fill="#68966B" fontSize="9">Scenic Gardens & Walks</text>

                {/* Landmark: Ruskin Sports Village */}
                <rect x="70" y="20" width="130" height="85" rx="10" fill="#EBE3D6" stroke="#D7CABE" strokeWidth="1.5" />
                <text x="82" y="55" fill="#716254" fontSize="10" fontWeight="600">Ruskin Sports</text>
                <text x="82" y="70" fill="#716254" fontSize="10" fontWeight="600">Drive Village</text>

                {/* Landmark: Thatto Heath Railway Station */}
                <circle cx="510" cy="160" r="18" fill="#D0E3F3" stroke="#87B4DC" strokeWidth="2" />
                <text x="510" y="165" fill="#205B8C" fontSize="12" fontWeight="bold" textAnchor="middle">🚆</text>
                <text x="450" y="205" fill="#3D6485" fontSize="10" fontWeight="600">Thatto Heath Station (1.0m)</text>

                {/* Target Pin: PDG'S EATERY (88 Cambridge Road) */}
                <g transform="translate(260, 130)">
                  {/* Pulsing ring */}
                  <circle cx="30" cy="30" r="28" fill="#8A3B14" fillOpacity="0.15" />
                  <circle cx="30" cy="30" r="18" fill="#8A3B14" fillOpacity="0.25" />
                  
                  {/* Pin badge */}
                  <rect x="0" y="10" width="165" height="44" rx="10" fill="#241F1C" filter="drop-shadow(0px 4px 8px rgba(0,0,0,0.25))" />
                  <circle cx="20" cy="32" r="11" fill="#8A3B14" />
                  <text x="20" y="36" fill="white" fontSize="9" fontWeight="bold" textAnchor="middle">PDG</text>
                  <text x="38" y="28" fill="white" fontSize="11" fontWeight="bold">PDG's Eatery</text>
                  <text x="38" y="42" fill="#E8D9BF" fontSize="9">88 Cambridge Rd, WA10 4HA</text>
                </g>
              </svg>

              {/* Floating Live Badge */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs py-2 px-3 rounded-xl border border-[#DFD5C3] text-xs text-[#3E342B] shadow-sm">
                <span className="font-bold text-[#8A3B14]">St Helens</span> · Merseyside, WA10 4HA
              </div>
            </div>

            {/* Transport Directions Accordion / Cards */}
            <div className="p-6 bg-white space-y-4 border-t border-[#EFE7D8]">
              <h4 className="font-display text-base font-bold text-[#221F1E]">
                Getting to PDG's Eatery
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {/* Train */}
                <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#ECE2D2] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#205B8C]">
                    <Train className="w-3.5 h-3.5" />
                    <span>Train Stations</span>
                  </div>
                  <p className="text-[#65574B]">
                    Thatto Heath (1.0 mi) & St Helens Central (1.2 mi) with regular connections to Liverpool & Wigan.
                  </p>
                </div>

                {/* Bus */}
                <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#ECE2D2] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#A84A1A]">
                    <Bus className="w-3.5 h-3.5" />
                    <span>Local Buses</span>
                  </div>
                  <p className="text-[#65574B]">
                    Arriva bus routes 37 & 38 stop directly along Cambridge Road and nearby Duke Street.
                  </p>
                </div>

                {/* Parking */}
                <div className="p-3 rounded-xl bg-[#FAF6EE] border border-[#ECE2D2] space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-[#3B6D45]">
                    <Car className="w-3.5 h-3.5" />
                    <span>Customer Parking</span>
                  </div>
                  <p className="text-[#65574B]">
                    Free roadside customer parking directly outside on Cambridge Road and surrounding streets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact & Inquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-[#DFD5C3] p-6 sm:p-8 shadow-xs space-y-5">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#8A3B14] block mb-1">
                Direct Message
              </span>
              <h3 className="font-display text-2xl font-bold text-[#221F1E]">
                Send an Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#6D6054] mt-1">
                Looking to host a private celebration, corporate luncheon, or have a specific dietary query? Leave our hosts a note.
              </p>
            </div>

            {inquirySent ? (
              <div className="py-10 text-center space-y-3 bg-[#FAF6EE] rounded-2xl p-6 border border-[#E9DFCE]">
                <div className="w-12 h-12 rounded-full bg-[#EBF7EE] text-[#1E6335] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display text-lg font-bold text-[#221F1E]">
                  Message Sent to PDG's Team!
                </h4>
                <p className="text-xs text-[#635548]">
                  Thank you, {inquiryName}. Our host team will review your inquiry and get back to your email within a few hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendInquiry} className="space-y-4 text-xs" id="contact-inquiry-form">
                <div>
                  <label className="font-bold text-[#241F1C] block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g., Alexander Wright"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-xs text-[#221F1E] focus:ring-2 focus:ring-[#8A3B14]/30 focus:border-[#8A3B14]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#241F1C] block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="e.g., alexander@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-xs text-[#221F1E] focus:ring-2 focus:ring-[#8A3B14]/30 focus:border-[#8A3B14]"
                  />
                </div>

                <div>
                  <label className="font-bold text-[#241F1C] block mb-1">
                    Nature of Inquiry
                  </label>
                  <select
                    value={inquirySubject}
                    onChange={(e) => setInquirySubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-xs text-[#221F1E] focus:ring-2 focus:ring-[#8A3B14]/30 focus:border-[#8A3B14]"
                  >
                    <option>General Cafe Inquiry</option>
                    <option>Catering & Platter Orders</option>
                    <option>Special Dietary / Allergen Query</option>
                    <option>Feedback & Compliments</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-[#241F1C] block mb-1">
                    Message / Notes *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="How can we make your visit exceptional? Include requested dates, party size, or specific requirements..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D5CABB] bg-white text-xs text-[#221F1E] focus:ring-2 focus:ring-[#8A3B14]/30 focus:border-[#8A3B14]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl bg-[#241F1C] hover:bg-[#8A3B14] text-white font-bold uppercase tracking-wider text-xs transition-colors shadow-xs flex items-center justify-center gap-2"
                  id="submit-contact-inquiry-btn"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to Host Team</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
