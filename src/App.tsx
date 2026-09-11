/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GuestQuotes } from './components/GuestQuotes';
import { MenuGallery } from './components/MenuGallery';
import { HoursSection } from './components/HoursSection';
import { TripAdvisorSection } from './components/TripAdvisorSection';
import { ContactAndLocation } from './components/ContactAndLocation';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#221F1E] font-sans antialiased selection:bg-[#E8DCC4] selection:text-[#1F1916]">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <GuestQuotes />
        <MenuGallery />
        <HoursSection />
        <TripAdvisorSection />
        <ContactAndLocation />
      </main>

      {/* Comprehensive Site Footer */}
      <Footer />
    </div>
  );
}
