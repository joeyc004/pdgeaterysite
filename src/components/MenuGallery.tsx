import { useState, useMemo, MouseEvent } from 'react';
import { 
  Search, 
  Sparkles, 
  Leaf, 
  Flame, 
  X, 
  Info, 
  LayoutGrid, 
  ListOrdered, 
  Heart,
  Phone,
  Clock,
  Coffee,
  Check
} from 'lucide-react';
import { MENU_ITEMS, EATERY_INFO } from '../data/eateryData';
import { MenuItem, MenuCategory, DietaryTag } from '../types';

export function MenuGallery() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all');
  const [selectedDietary, setSelectedDietary] = useState<DietaryTag | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);
  const [viewMode, setViewMode] = useState<'gallery' | 'bistro'>('gallery');
  const [savedFavorites, setSavedFavorites] = useState<string[]>([]);

  const categories: { key: MenuCategory; label: string; count: number }[] = [
    { key: 'all', label: 'All Items', count: MENU_ITEMS.length },
    { key: 'breakfast', label: 'Cooked Breakfasts', count: MENU_ITEMS.filter(i => i.category === 'breakfast').length },
    { key: 'sandwiches', label: 'Sandwiches & Rolls', count: MENU_ITEMS.filter(i => i.category === 'sandwiches').length },
    { key: 'potatoes', label: 'Baked Potatoes', count: MENU_ITEMS.filter(i => i.category === 'potatoes').length },
    { key: 'salads', label: 'Salad Boxes', count: MENU_ITEMS.filter(i => i.category === 'salads').length },
    { key: 'specials', label: 'Cafe Specials', count: MENU_ITEMS.filter(i => i.category === 'specials').length },
    { key: 'drinks', label: 'Tea, Coffee & Drinks', count: MENU_ITEMS.filter(i => i.category === 'drinks').length },
  ];

  const dietaryOptions: { key: DietaryTag | 'all'; label: string; icon?: typeof Leaf }[] = [
    { key: 'all', label: 'All Diets' },
    { key: 'chef-pick', label: "Chef's Special", icon: Flame },
    { key: 'vegetarian', label: 'Vegetarian', icon: Leaf },
    { key: 'vegan', label: 'Vegan', icon: Leaf },
    { key: 'gluten-free', label: 'Gluten-Free' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Dietary filter
      if (selectedDietary !== 'all' && !item.tags.includes(selectedDietary)) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesSubCat = item.subCategory?.toLowerCase().includes(q);
        const matchesAllergens = item.allergens.some(a => a.toLowerCase().includes(q));
        if (!matchesName && !matchesDesc && !matchesSubCat && !matchesAllergens) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedDietary, searchQuery]);

  const toggleFavorite = (id: string, e: MouseEvent) => {
    e.stopPropagation();
    setSavedFavorites(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="menu" className="py-20 bg-[#FBF9F5] border-b border-[#EFE7D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8A3B14] block">
            Freshly Prepared to Order by Paul Gaskin
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#221F1E]">
            PDG's Cafe Menu
          </h2>
          <p className="text-[#64594E] text-base sm:text-lg">
            Hearty cooked breakfasts, toasted barms, fresh sliced sandwiches, oven-baked jacket potatoes, daily hot specials, and chilled shakes. Walk-ins welcome Monday to Saturday.
          </p>
        </div>

        {/* Controls Toolbar: Categories, Search, Filters & View Toggle */}
        <div className="space-y-5 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none" id="menu-category-tabs">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 shrink-0 ${
                    isSelected
                      ? 'bg-[#241F1C] text-[#FBF9F5] shadow-sm'
                      : 'bg-white text-[#52453C] hover:bg-[#F2ECE0] border border-[#E2D8C6]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-md ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-[#EFE8DD] text-[#786B60]'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sub-toolbar: Search bar, Dietary Chips, View Toggle */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-[#8C7D70] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search breakfast, sandwiches, jackets, specials..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-white border border-[#DDD3C1] text-xs sm:text-sm text-[#241F1C] placeholder-[#9E9083] focus:outline-none focus:ring-2 focus:ring-[#8A3B14]/40"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8C7D70] hover:text-[#241F1C]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dietary Tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {dietaryOptions.map((diet) => {
                const isSelected = selectedDietary === diet.key;
                const IconComponent = diet.icon;
                return (
                  <button
                    key={diet.key}
                    onClick={() => setSelectedDietary(diet.key)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#8A3B14] text-white font-semibold shadow-xs'
                        : 'bg-white/70 text-[#605247] hover:bg-white border border-[#DDD3C1]'
                    }`}
                  >
                    {IconComponent && <IconComponent className="w-3 h-3" />}
                    <span>{diet.label}</span>
                  </button>
                );
              })}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1 self-end md:self-auto bg-white border border-[#DDD3C1] p-1 rounded-xl">
              <button
                onClick={() => setViewMode('gallery')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                  viewMode === 'gallery' ? 'bg-[#241F1C] text-white font-medium' : 'text-[#6D6156] hover:bg-[#EFE7D8]'
                }`}
                title="Photo Card Grid"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">Cards</span>
              </button>
              <button
                onClick={() => setViewMode('bistro')}
                className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                  viewMode === 'bistro' ? 'bg-[#241F1C] text-white font-medium' : 'text-[#6D6156] hover:bg-[#EFE7D8]'
                }`}
                title="Bistro Style Price List"
              >
                <ListOrdered className="w-4 h-4" />
                <span className="hidden sm:inline text-xs">Menu List</span>
              </button>
            </div>
          </div>
        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between text-xs text-[#7A6C5F] mb-6 pb-2 border-b border-[#E8DFC8]">
          <span>
            Showing <strong>{filteredItems.length}</strong> items
            {selectedCategory !== 'all' ? ` in ${categories.find(c => c.key === selectedCategory)?.label}` : ''}
            {searchQuery ? ` matching "${searchQuery}"` : ''}
          </span>
          {(searchQuery || selectedCategory !== 'all' || selectedDietary !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDietary('all');
                setSearchQuery('');
              }}
              className="text-[#8A3B14] hover:underline font-semibold"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#DDD3C1] p-8 space-y-3">
            <Coffee className="w-8 h-8 text-[#8A3B14] mx-auto" />
            <h3 className="font-display text-lg font-bold text-[#221F1E]">No menu items found</h3>
            <p className="text-xs sm:text-sm text-[#736558] max-w-md mx-auto">
              We couldn't find anything matching your search or dietary filter. Try clearing filters or search for breakfast, barm, or soup.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedDietary('all');
                setSearchQuery('');
              }}
              className="mt-2 px-4 py-2 rounded-lg bg-[#241F1C] text-white text-xs font-medium hover:bg-[#8A3B14] transition-colors"
            >
              View Full Menu
            </button>
          </div>
        )}

        {/* VIEW MODE 1: Photo Cards Gallery */}
        {viewMode === 'gallery' && filteredItems.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="menu-cards-grid">
            {filteredItems.map((item) => {
              const isFav = savedFavorites.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#E2D8C6] hover:border-[#C4B79E] shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {/* Card Image */}
                  <div className="relative aspect-16/10 bg-[#EFE8DC] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />

                    {/* Price Tag Pill */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#221F1E] font-sans font-bold text-xs sm:text-sm px-2.5 py-1 rounded-full shadow-sm border border-[#E8DFC8]">
                      {item.priceFormatted || `£${item.price.toFixed(2)}`}
                    </div>

                    {/* SubCategory or Chef Badge */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                      {item.subCategory && (
                        <span className="bg-[#241F1C]/85 backdrop-blur-xs text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md">
                          {item.subCategory}
                        </span>
                      )}
                      {item.tags.includes('chef-pick') && (
                        <span className="bg-[#8A3B14] text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md flex items-center gap-1">
                          <Flame className="w-2.5 h-2.5" />
                          <span>Special</span>
                        </span>
                      )}
                    </div>

                    {/* Favorite Heart Button */}
                    <button
                      onClick={(e) => toggleFavorite(item.id, e)}
                      aria-label="Save dish to favourites"
                      className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#554A41] flex items-center justify-center transition-colors shadow-2xs"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isFav ? 'fill-[#C9382B] text-[#C9382B]' : 'text-[#786A5E]'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-1.5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display font-bold text-lg text-[#221F1E] group-hover:text-[#8A3B14] transition-colors leading-snug">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#665A4F] line-clamp-2 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>

                    {/* Card Footer: Dietary tags + allergen preview */}
                    <div className="pt-2 border-t border-[#F2ECE0] flex items-center justify-between text-[11px] text-[#85766A]">
                      <div className="flex items-center gap-1.5">
                        {item.tags.includes('vegetarian') && (
                          <span className="inline-flex items-center gap-0.5 text-[#2B6E3C] font-semibold bg-[#EBF7EE] px-1.5 py-0.5 rounded">
                            <Leaf className="w-2.5 h-2.5" /> Veg
                          </span>
                        )}
                        {item.tags.includes('gluten-free') && (
                          <span className="text-[#845E35] bg-[#F7EFE3] px-1.5 py-0.5 rounded font-medium">
                            GF
                          </span>
                        )}
                        {item.calories && (
                          <span className="text-[#96897E]">~{item.calories} kcal</span>
                        )}
                      </div>

                      <span className="text-xs text-[#8A3B14] font-semibold group-hover:underline">
                        Details &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW MODE 2: Bistro Text List */}
        {viewMode === 'bistro' && filteredItems.length > 0 && (
          <div className="bg-white rounded-2xl border border-[#E2D8C6] p-6 sm:p-8 shadow-xs">
            <div className="divide-y divide-[#EFE7D8]">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className="group cursor-pointer space-y-1.5 py-4 px-2 -mx-2 rounded-xl hover:bg-[#FAF6EE] transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#221F1E] group-hover:text-[#8A3B14] transition-colors flex items-center gap-2">
                      <span>{item.name}</span>
                      {item.subCategory && (
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#F1E9DB] text-[#55493D] font-sans font-medium uppercase">
                          {item.subCategory}
                        </span>
                      )}
                      {item.tags.includes('chef-pick') && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#8A3B14] text-white font-sans uppercase font-bold">
                          Special
                        </span>
                      )}
                    </h3>
                    <div className="flex-1 border-b border-dotted border-[#D4C8B8] mx-2 hidden sm:block" />
                    <span className="font-sans font-bold text-sm sm:text-base text-[#241F1C] whitespace-nowrap">
                      {item.priceFormatted || `£${item.price.toFixed(2)}`}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#675C51] leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-[#8C7E72] pt-0.5">
                    {item.tags.includes('vegetarian') && <span className="text-[#2F6B3E] font-medium">Vegetarian</span>}
                    {item.tags.includes('vegan') && <span className="text-[#2F6B3E] font-medium">Vegan</span>}
                    {item.tags.includes('gluten-free') && <span className="text-[#7B5B38] font-medium">Gluten-Free</span>}
                    {item.allergens.length > 0 && (
                      <span className="text-[#9E8F82]">Allergens: {item.allergens.join(', ')}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dietary & Allergen Disclaimer */}
        <div className="mt-12 p-4 rounded-xl bg-[#F4EEE2] border border-[#E5DAC6] text-xs text-[#6D6154] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#8A3B14] shrink-0" />
            <span>
              <strong>Food Allergies & Intolerances:</strong> Please inform our staff when ordering. While we take immense care, our cafe kitchen handles cereals with gluten, eggs, dairy, fish, crustaceans and nuts.
            </span>
          </div>
          <a
            href={`tel:${EATERY_INFO.phone.replace(/[^0-9+]/g, '')}`}
            className="text-[#8A3B14] hover:underline font-semibold whitespace-nowrap inline-flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Questions? Call {EATERY_INFO.phone}</span>
          </a>
        </div>
      </div>

      {/* DISH DETAIL MODAL */}
      {activeItem && (
        <div
          id="dish-detail-modal"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveItem(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DED4C0]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div className="relative aspect-16/9 bg-[#F0EAE0]">
              <img
                src={activeItem.image}
                alt={activeItem.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
                id="close-dish-modal-btn"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-3 left-4 bg-white/95 px-3 py-1 rounded-full text-xs font-bold text-[#221F1E] shadow-sm">
                {activeItem.priceFormatted || `£${activeItem.price.toFixed(2)}`}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#8A3B14] bg-[#F7EFE6] px-2.5 py-0.5 rounded-md">
                    {activeItem.category.toUpperCase()}
                  </span>
                  {activeItem.subCategory && (
                    <span className="text-[11px] font-semibold text-[#241F1C] bg-[#ECE5D8] px-2.5 py-0.5 rounded-md">
                      {activeItem.subCategory}
                    </span>
                  )}
                  {activeItem.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-medium text-[#4D4137] bg-[#EFE8DE] px-2 py-0.5 rounded-md capitalize"
                    >
                      {t.replace('-', ' ')}
                    </span>
                  ))}
                </div>

                <h3 className="font-display text-2xl font-bold text-[#221F1E]">
                  {activeItem.name}
                </h3>
                <p className="text-sm text-[#5F544A] mt-2 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

              {/* Options / Customisations from Menu Flyer */}
              {activeItem.options && activeItem.options.length > 0 && (
                <div className="p-4 rounded-xl bg-[#FAF5EC] border border-[#E9DFCE] space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8A3B14] block">
                    Available Options & Additions
                  </span>
                  <ul className="space-y-1 text-xs text-[#52463B]">
                    {activeItem.options.map((opt, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#8A3B14] mt-0.5 shrink-0" />
                        <span>{opt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nutrition & Allergens Info */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-[#F8F4EB] border border-[#ECE2D2]">
                  <span className="text-[#87786B] block mb-1 font-medium">Allergen Information</span>
                  <span className="font-semibold text-[#38302A]">
                    {activeItem.allergens.length > 0 ? activeItem.allergens.join(', ') : 'No major allergens reported'}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-[#F8F4EB] border border-[#ECE2D2]">
                  <span className="text-[#87786B] block mb-1 font-medium">Nutritional Guide</span>
                  <span className="font-semibold text-[#38302A]">
                    {activeItem.calories ? `${activeItem.calories} Calories approx.` : 'Fresh preparation'}
                  </span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-[#EFE8DC] flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`tel:${EATERY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#241F1C] hover:bg-[#8A3B14] text-[#FBF9F5] text-xs font-bold uppercase tracking-wider transition-colors shadow-xs text-center inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {EATERY_INFO.phone}</span>
                </a>
                <button
                  onClick={() => setActiveItem(null)}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl border border-[#D5CABB] text-xs font-semibold text-[#5A4F44] hover:bg-[#F2ECE0] transition-colors"
                >
                  Back to Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
