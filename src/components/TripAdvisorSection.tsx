import { useState, FormEvent } from 'react';
import { 
  Star, 
  Award, 
  ThumbsUp, 
  MessageSquare, 
  CheckCircle2, 
  Filter, 
  PenTool, 
  X, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { TRIPADVISOR_REVIEWS, TRIPADVISOR_STATS, EATERY_INFO } from '../data/eateryData';
import { TripAdvisorReview, TravelerType } from '../types';

export function TripAdvisorSection() {
  const [reviews, setReviews] = useState<TripAdvisorReview[]>(TRIPADVISOR_REVIEWS);
  const [selectedTravelerType, setSelectedTravelerType] = useState<TravelerType>('All');
  const [helpfulVotedIds, setHelpfulVotedIds] = useState<string[]>([]);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);

  // New review form state
  const [newAuthorName, setNewAuthorName] = useState('');
  const [newAuthorLocation, setNewAuthorLocation] = useState('');
  const [newTravelerType, setNewTravelerType] = useState<Exclude<TravelerType, 'All'>>('Couples');
  const [newRating, setNewRating] = useState<1 | 2 | 3 | 4 | 5>(5);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [newDish, setNewDish] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const travelerFilters: TravelerType[] = ['All', 'Couples', 'Families', 'Friends', 'Solo', 'Business'];

  const filteredReviews = reviews.filter((r) => {
    if (selectedTravelerType === 'All') return true;
    return r.travelerType === selectedTravelerType;
  });

  const handleHelpfulClick = (id: string) => {
    if (helpfulVotedIds.includes(id)) return;
    setHelpfulVotedIds((prev) => [...prev, id]);
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulVotes: r.helpfulVotes + 1 } : r))
    );
  };

  const handleCreateReview = (e: FormEvent) => {
    e.preventDefault();
    if (!newAuthorName.trim() || !newTitle.trim() || !newContent.trim()) return;

    const newReviewItem: TripAdvisorReview = {
      id: `ta-custom-${Date.now()}`,
      authorName: newAuthorName.trim(),
      authorLocation: newAuthorLocation.trim() || 'Guest Diner',
      travelerType: newTravelerType,
      rating: newRating,
      title: newTitle.trim(),
      date: 'Just now',
      stayDate: `Dined as a ${newTravelerType.toLowerCase()} guest`,
      content: newContent.trim(),
      helpfulVotes: 0,
      visitedDishRecommendation: newDish.trim() || undefined,
      verified: true
    };

    setReviews([newReviewItem, ...reviews]);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsWriteModalOpen(false);
      // Reset form
      setNewAuthorName('');
      setNewAuthorLocation('');
      setNewTitle('');
      setNewContent('');
      setNewDish('');
    }, 1400);
  };

  return (
    <section id="reviews" className="py-20 bg-[#FAF7F0] border-b border-[#E8DEC8]">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Section Header with TripAdvisor Branding */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF7EE] border border-[#C2E8CC] text-[#135A30] text-xs font-semibold shadow-2xs">
            {/* TripAdvisor Owl Icon Mark */}
            <div className="w-5 h-5 rounded-full bg-[#00aa6c] text-white flex items-center justify-center font-bold text-[11px]">
              TA
            </div>
            <span>TripAdvisor Traveler Verified Reviews</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#221F1E]">
            What Our Guests Say
          </h2>
          <p className="text-[#64594E] text-base sm:text-lg">
            Honest feedback from local St Helens residents, workers, and visitors who have dined at PDG's Eatery on Cambridge Road.
          </p>
        </div>

        {/* TripAdvisor Score Card & Ratings Breakdown */}
        <div 
          id="tripadvisor-summary-card"
          className="bg-white rounded-3xl border border-[#DFD5C3] p-6 sm:p-10 shadow-xs mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Overall Score Badge */}
            <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left space-y-3 pb-6 lg:pb-0 lg:border-r border-[#EFE7D8]">
              <div className="flex items-center gap-3">
                <span className="font-display text-5xl font-bold text-[#221F1E]">
                  {TRIPADVISOR_STATS.averageRating}
                </span>
                <div>
                  {/* 5 Green Rating Circles */}
                  <div className="flex items-center gap-1 text-[#00aa6c]">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="w-3.5 h-3.5 rounded-full bg-[#00aa6c] inline-block" />
                    ))}
                  </div>
                  <span className="text-xs text-[#6F6052] font-medium block mt-0.5">
                    Based on <strong>{TRIPADVISOR_STATS.totalReviews}</strong> reviews
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#1B6133] bg-[#EAF7EE] px-3 py-1.5 rounded-lg border border-[#C2E8CC]">
                <Award className="w-4 h-4 text-[#00aa6c] shrink-0" />
                <span>{TRIPADVISOR_STATS.award}</span>
              </div>

              <p className="text-xs text-[#7A6B5D]">
                {TRIPADVISOR_STATS.ranking}
              </p>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setIsWriteModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-[#241F1C] hover:bg-[#8A3B14] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-xs"
                  id="write-review-trigger-btn"
                >
                  <PenTool className="w-3.5 h-3.5" />
                  <span>Write a Review</span>
                </button>
                <a
                  href={EATERY_INFO.tripAdvisorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#00aa6c] hover:underline flex items-center gap-1"
                >
                  <span>TripAdvisor Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Sub-Categories Breakdown */}
            <div className="lg:col-span-4 space-y-3.5 pb-6 lg:pb-0 lg:border-r border-[#EFE7D8] lg:px-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A3B14]">
                Rating Categories
              </h4>
              <div className="space-y-2.5">
                {TRIPADVISOR_STATS.categories.map((cat) => (
                  <div key={cat.name} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-[#322A24]">{cat.name}</span>
                      <span className="font-bold text-[#1F6335]">{cat.rating} / 5.0</span>
                    </div>
                    <div className="w-full bg-[#EFE8DC] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#00aa6c] h-full rounded-full"
                        style={{ width: `${(cat.rating / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rating Star Distribution */}
            <div className="lg:col-span-4 space-y-2.5 lg:pl-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#8A3B14]">
                Rating Distribution
              </h4>
              <div className="space-y-1.5">
                {TRIPADVISOR_STATS.ratingDistribution.map((dist) => (
                  <div key={dist.stars} className="flex items-center gap-2 text-xs text-[#584D43]">
                    <span className="w-12 font-medium">{dist.stars} stars</span>
                    <div className="flex-1 bg-[#EFE8DC] h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#00aa6c] h-full rounded-full"
                        style={{ width: `${dist.percentage}%` }}
                      />
                    </div>
                    <span className="w-8 text-right text-[#7B6E62]">{dist.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Traveler Type Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            <span className="text-xs font-bold uppercase text-[#736458] mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Traveler:</span>
            </span>
            {travelerFilters.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedTravelerType(type)}
                id={`filter-traveler-${type}`}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedTravelerType === type
                    ? 'bg-[#00aa6c] text-white shadow-2xs font-semibold'
                    : 'bg-white text-[#52453B] border border-[#DDD3C1] hover:bg-[#F3ECE0]'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#7B6E62]">
            Showing <strong>{filteredReviews.length}</strong> traveler reviews
          </div>
        </div>

        {/* Reviews Cards Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" id="tripadvisor-reviews-feed">
          {filteredReviews.map((review) => {
            const hasVoted = helpfulVotedIds.includes(review.id);

            return (
              <article
                key={review.id}
                id={`review-card-${review.id}`}
                className="bg-white rounded-2xl border border-[#DFD5C3] p-6 shadow-xs flex flex-col justify-between hover:border-[#C4B7A0] transition-colors"
              >
                <div>
                  {/* Review Header: Reviewer info & Date */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#F0E9DD]">
                    <div className="flex items-center gap-3">
                      {review.authorAvatar ? (
                        <img
                          src={review.authorAvatar}
                          alt={review.authorName}
                          className="w-10 h-10 rounded-full object-cover border border-[#D5CABB]"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-[#EBE4D5] text-[#554A41] flex items-center justify-center font-bold text-sm">
                          {review.authorName.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-semibold text-sm text-[#221F1E] flex items-center gap-1.5">
                          <span>{review.authorName}</span>
                          {review.verified && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#00aa6c]" title="Verified Diner" />
                          )}
                        </h4>
                        <p className="text-xs text-[#7A6C5F]">{review.authorLocation}</p>
                      </div>
                    </div>

                    <span className="text-[11px] text-[#8C7D70] whitespace-nowrap">
                      {review.date}
                    </span>
                  </div>

                  {/* Rating Bubbles & Title */}
                  <div className="mt-4 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-[#00aa6c]">
                        {[...Array(review.rating)].map((_, i) => (
                          <span key={i} className="w-3 h-3 rounded-full bg-[#00aa6c] inline-block" />
                        ))}
                      </div>
                      <span className="text-[11px] text-[#716153] font-medium">
                        · {review.stayDate}
                      </span>
                    </div>

                    <h5 className="font-display font-bold text-base text-[#241F1C]">
                      "{review.title}"
                    </h5>

                    <p className="text-xs sm:text-sm text-[#54483E] leading-relaxed pt-1">
                      {review.content}
                    </p>

                    {review.visitedDishRecommendation && (
                      <div className="mt-3 p-2.5 rounded-lg bg-[#FAF5EC] border border-[#ECE0CE] text-xs text-[#6B5A4B] flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-[#8A3B14] shrink-0" />
                        <span>
                          <strong>Recommended dish:</strong> {review.visitedDishRecommendation}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Owner Response (if available) */}
                  {review.ownerResponse && (
                    <div className="mt-4 p-3 rounded-xl bg-[#F6F2E8] border-l-3 border-[#8A3B14] text-xs space-y-1">
                      <div className="flex items-center justify-between font-semibold text-[#241F1C]">
                        <span className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3 text-[#8A3B14]" />
                          <span>Response from {review.ownerResponse.responder}</span>
                        </span>
                        <span className="text-[10px] text-[#7B6E62]">{review.ownerResponse.date}</span>
                      </div>
                      <p className="text-[#5D5044] italic">
                        "{review.ownerResponse.text}"
                      </p>
                    </div>
                  )}
                </div>

                {/* Review Card Footer: Helpful button */}
                <div className="mt-5 pt-3 border-t border-[#F0E9DD] flex items-center justify-between text-xs text-[#7B6E62]">
                  <span className="text-[11px] text-[#8C7E72]">
                    TripAdvisor Community Member
                  </span>

                  <button
                    onClick={() => handleHelpfulClick(review.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full border transition-colors ${
                      hasVoted
                        ? 'bg-[#EAF7EE] text-[#175C30] border-[#B8E7C5] font-semibold'
                        : 'bg-white text-[#52453B] border-[#DDD3C1] hover:bg-[#F3ECE0]'
                    }`}
                    title="Mark this review as helpful"
                  >
                    <ThumbsUp className={`w-3 h-3 ${hasVoted ? 'text-[#00aa6c]' : ''}`} />
                    <span>Helpful ({review.helpfulVotes})</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* WRITE A REVIEW MODAL */}
      {isWriteModalOpen && (
        <div
          id="write-review-modal"
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setIsWriteModalOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#DFD5C3] p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#EFE8DC]">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#00aa6c] text-white flex items-center justify-center font-bold text-xs">
                  TA
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#221F1E]">
                    Write a TripAdvisor Review
                  </h3>
                  <p className="text-xs text-[#7B6E62]">PDG's Eatery · St Helens</p>
                </div>
              </div>
              <button
                onClick={() => setIsWriteModalOpen(false)}
                className="p-1.5 rounded-full text-[#6E6053] hover:bg-[#EFE8DE]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#EAF7EE] text-[#00aa6c] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-display text-xl font-bold text-[#221F1E]">
                  Thank you for your review!
                </h4>
                <p className="text-xs text-[#635548]">
                  Your review has been added to the PDG's Eatery community feed.
                </p>
              </div>
            ) : (
              <form onSubmit={handleCreateReview} className="space-y-4 pt-4 text-xs">
                {/* Star Rating Selector */}
                <div>
                  <label className="font-bold text-[#241F1C] block mb-1">
                    Your Overall Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {([1, 2, 3, 4, 5] as const).map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className={`w-7 h-7 rounded-full transition-transform hover:scale-110 flex items-center justify-center ${
                          newRating >= star ? 'bg-[#00aa6c]' : 'bg-[#E3DCD0]'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-white" />
                      </button>
                    ))}
                    <span className="ml-2 font-bold text-sm text-[#1B6133]">
                      {newRating} of 5 bubbles
                    </span>
                  </div>
                </div>

                {/* Name & Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-[#241F1C] block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={newAuthorName}
                      onChange={(e) => setNewAuthorName(e.target.value)}
                      placeholder="e.g., Jennifer Miller"
                      className="w-full px-3 py-2 rounded-xl border border-[#D5CABB] bg-white text-xs focus:ring-2 focus:ring-[#00aa6c]/30 focus:border-[#00aa6c]"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-[#241F1C] block mb-1">
                      Hometown / City
                    </label>
                    <input
                      type="text"
                      value={newAuthorLocation}
                      onChange={(e) => setNewAuthorLocation(e.target.value)}
                      placeholder="e.g., Manchester, UK"
                      className="w-full px-3 py-2 rounded-xl border border-[#D5CABB] bg-white text-xs focus:ring-2 focus:ring-[#00aa6c]/30 focus:border-[#00aa6c]"
                    />
                  </div>
                </div>

                {/* Traveler Type */}
                <div>
                  <label className="font-bold text-[#241F1C] block mb-1">
                    Who did you visit with?
                  </label>
                  <div className="grid grid-cols-5 gap-1.5">
                    {(['Couples', 'Families', 'Friends', 'Solo', 'Business'] as const).map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setNewTravelerType(t)}
                        className={`py-1.5 px-2 rounded-lg text-[11px] font-medium border text-center transition-colors ${
                          newTravelerType === t
                            ? 'bg-[#00aa6c] text-white border-[#00aa6c]'
                            : 'bg-white text-[#52453B] border-[#DDD3C1]'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Title */}
                <div>
                  <label className="font-bold text-[#241F1C] block mb-1">
                    Title of your review *
                  </label>
                  <input
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="Give your review a headline..."
                    className="w-full px-3 py-2 rounded-xl border border-[#D5CABB] bg-white text-xs focus:ring-2 focus:ring-[#00aa6c]/30 focus:border-[#00aa6c]"
                  />
                </div>

                {/* Review Content */}
                <div>
                  <label className="font-bold text-[#241F1C] block mb-1">
                    Your Experience *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Tell other travelers about the dishes you loved, the atmosphere, service, or anything special..."
                    className="w-full px-3 py-2 rounded-xl border border-[#D5CABB] bg-white text-xs focus:ring-2 focus:ring-[#00aa6c]/30 focus:border-[#00aa6c]"
                  />
                </div>

                {/* Recommended Dish */}
                <div>
                  <label className="font-bold text-[#241F1C] block mb-1">
                    Favorite Dish Recommendation (Optional)
                  </label>
                  <input
                    type="text"
                    value={newDish}
                    onChange={(e) => setNewDish(e.target.value)}
                    placeholder="e.g., Hearty Cooked Breakfast, Beef Casserole, or Fish & Chips"
                    className="w-full px-3 py-2 rounded-xl border border-[#D5CABB] bg-white text-xs focus:ring-2 focus:ring-[#00aa6c]/30 focus:border-[#00aa6c]"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsWriteModalOpen(false)}
                    className="px-4 py-2.5 rounded-xl border border-[#D5CABB] text-xs font-semibold text-[#52453B] hover:bg-[#F4EFE6]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-[#00aa6c] hover:bg-[#008f5a] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
                    id="submit-new-review-btn"
                  >
                    Submit Review
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
