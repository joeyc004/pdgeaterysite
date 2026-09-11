import { MenuItem, TripAdvisorReview, DaySchedule, EateryContact } from '../types';

export const EATERY_INFO: EateryContact = {
  name: "PDG's Eatery",
  tagline: "Traditional family-run cafe on Cambridge Road — famous for hearty cooked breakfasts, home-style daily specials, jacket potatoes, sandwiches & warm St Helens hospitality.",
  address: {
    street: "88 Cambridge Road",
    neighborhood: "St Helens",
    city: "St Helens, Merseyside",
    postcode: "WA10 4HA",
    landmarks: [
      "Located on Cambridge Road (B5201)",
      "Near Ruskin Sports Village (Ruskin Drive)",
      "Close to Queens Park & Duke Street",
      "Short distance from Thatto Heath & St Helens Central"
    ]
  },
  phone: "01744 759130",
  mobile: "07811 117717",
  email: "hello@pdgseatery.co.uk",
  whatsapp: "+44 1744 759130",
  instagram: "@pdgseaterysthelens",
  tripAdvisorUrl: "https://www.tripadvisor.co.uk",
  transit: {
    metro: [
      "Thatto Heath Railway Station – approx. 1.0 mile",
      "St Helens Central Railway Station – approx. 1.2 miles"
    ],
    bus: [
      "Arriva Bus Routes 37 & 38 – Stops directly on Cambridge Road and Duke Street",
      "Route 35 – Regular services through St Helens"
    ],
    parking: [
      "Free roadside customer parking directly outside on Cambridge Road",
      "Convenient street parking along neighboring avenues"
    ]
  }
};

export const OPENING_HOURS: DaySchedule[] = [
  {
    day: "Monday",
    shortDay: "Mon",
    openTime: "07:30",
    closeTime: "15:30",
    displayHours: "7:30 AM – 3:30 PM",
    breakfastService: "Cooked breakfasts served from 7:30 AM",
    lunchService: "Hot home-cooked specials, sandwiches & jackets from 11:30 AM",
    notes: "Walk-in tables available throughout the day"
  },
  {
    day: "Tuesday",
    shortDay: "Tue",
    openTime: "07:30",
    closeTime: "15:30",
    displayHours: "7:30 AM – 3:30 PM",
    breakfastService: "Cooked breakfasts served from 7:30 AM",
    lunchService: "Hot home-cooked specials & sandwiches from 11:30 AM",
    notes: "Fresh daily soup & blackboard specials"
  },
  {
    day: "Wednesday",
    shortDay: "Wed",
    openTime: "07:30",
    closeTime: "15:30",
    displayHours: "7:30 AM – 3:30 PM",
    breakfastService: "Cooked breakfasts served from 7:30 AM",
    lunchService: "Hot home-cooked specials & fresh salad boxes from 11:30 AM",
    notes: "Steak & mushroom casserole served with homemade chips"
  },
  {
    day: "Thursday",
    shortDay: "Thu",
    openTime: "07:30",
    closeTime: "15:30",
    displayHours: "7:30 AM – 3:30 PM",
    breakfastService: "Cooked breakfasts served from 7:30 AM",
    lunchService: "Hot home-cooked specials & baked potatoes from 11:30 AM",
    notes: "Full cafe menu served fresh to order"
  },
  {
    day: "Friday",
    shortDay: "Fri",
    openTime: "07:30",
    closeTime: "15:30",
    displayHours: "7:30 AM – 3:30 PM",
    breakfastService: "Cooked breakfasts served from 7:30 AM",
    lunchService: "Fresh battered fish and homemade chips from 11:30 AM",
    notes: "Traditional Friday fish and chips with mushy peas"
  },
  {
    day: "Saturday",
    shortDay: "Sat",
    openTime: "07:30",
    closeTime: "15:30",
    displayHours: "7:30 AM – 3:30 PM",
    breakfastService: "Cooked breakfasts & toasted barms served all day",
    lunchService: "Full Saturday menu, burgers, specials & drinks",
    notes: "Family-friendly Saturday service — walk-ins welcome"
  },
  {
    day: "Sunday",
    shortDay: "Sun",
    openTime: "00:00",
    closeTime: "00:00",
    displayHours: "Closed (Family Day)",
    isClosed: true,
    notes: "Reopens Monday morning at 7:30 AM"
  }
];

export const MENU_ITEMS: MenuItem[] = [
  // ================= BREAKFASTS =================
  {
    id: "bf-mini",
    name: "Mini Breakfast",
    category: "breakfast",
    subCategory: "Cooked Breakfasts",
    price: 5.50,
    description: "2 Rashers of Bacon, 2 Sausages, Egg & 2 Toast. (Add hash brown for £0.50).",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 450,
    allergens: ["Gluten", "Eggs", "Dairy"],
    options: ["Add Hash Brown (+£0.50)"]
  },
  {
    id: "bf-medium",
    name: "Medium Breakfast",
    category: "breakfast",
    subCategory: "Cooked Breakfasts",
    price: 6.50,
    description: "2 Rashers of Bacon, 2 Sausages, Egg, Tomato, Black Pudding & 2 Toast. (Add hash brown for £0.50).",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 680,
    allergens: ["Gluten", "Eggs", "Dairy"],
    options: ["Add Hash Brown (+£0.50)"]
  },
  {
    id: "bf-hearty",
    name: "Hearty Breakfast",
    category: "breakfast",
    subCategory: "Cooked Breakfasts",
    price: 7.50,
    description: "2 Rashers of Bacon, 2 Sausages, 2 Eggs, 2 Slices of Black Pudding, Tomato, Beans, Mushrooms & 2 Toast. (Add hash brown for £0.50).",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80",
    tags: ["chef-pick"],
    calories: 920,
    allergens: ["Gluten", "Eggs", "Dairy"],
    options: ["Add Hash Brown (+£0.50)"],
    isPopular: true
  },
  {
    id: "bf-toast-barm",
    name: "Choice of Any One Item on Toast or Barm",
    category: "breakfast",
    subCategory: "Toasted Sandwiches",
    price: 3.50,
    description: "Your choice of any one item from the menu on toast or barm. Add extra meat (£1) or non-meat (£0.50).",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 380,
    allergens: ["Gluten", "Dairy"],
    options: [
      "Bread: Brown Sliced, White Sliced, Brown Barm, White Barm, Wrap",
      "Add Meat (£1.00): Bacon, Sausage, Ham, Beef, Chicken, Tuna",
      "Add Topping (£0.50): Black Pudding, Cheese, Egg, Hash Brown, Mushrooms, Onion, Tomato"
    ]
  },

  // ================= SANDWICHES: MEAT SELECTION =================
  {
    id: "sand-blt",
    name: "Bacon, Lettuce & Tomato",
    category: "sandwiches",
    subCategory: "Meat Selection",
    price: 4.00,
    description: "Crisp bacon rashers, fresh lettuce and sliced juicy tomato. Served on sliced bread, barm, or wrap.",
    image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 420,
    allergens: ["Gluten"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"],
    isPopular: true
  },
  {
    id: "sand-bacon-egg-mayo",
    name: "Bacon, Egg Mayo & Lettuce",
    category: "sandwiches",
    subCategory: "Meat Selection",
    price: 4.50,
    description: "Thick back bacon, creamy seasoned egg mayonnaise, and crisp lettuce.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 510,
    allergens: ["Gluten", "Eggs"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-club",
    name: "Club Sandwich",
    category: "sandwiches",
    subCategory: "Meat Selection",
    price: 5.00,
    description: "Classic multi-layer club sandwich with chicken, crispy bacon, lettuce, and tomato.",
    image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&w=800&q=80",
    tags: ["chef-pick"],
    calories: 590,
    allergens: ["Gluten", "Eggs"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"],
    isPopular: true
  },
  {
    id: "sand-roast-beef-onion",
    name: "Roast Beef & Onion",
    category: "sandwiches",
    subCategory: "Meat Selection",
    price: 4.00,
    description: "Tender sliced roast beef with fresh or fried onion on your choice of bread.",
    image: "https://images.unsplash.com/photo-1549611016-3a70d82b5040?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 440,
    allergens: ["Gluten"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-ham",
    name: "Ham Sandwich",
    category: "sandwiches",
    subCategory: "Meat Selection",
    price: 3.00,
    description: "Quality sliced ham served simply and fresh on your choice of bread or soft barm.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 330,
    allergens: ["Gluten"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },

  // ================= SANDWICHES: POULTRY SELECTION =================
  {
    id: "sand-roast-chicken-plain",
    name: "Roast Chicken or Turkey - Plain",
    category: "sandwiches",
    subCategory: "Poultry Selection",
    price: 3.50,
    description: "Tender slices of freshly roasted chicken breast or turkey.",
    image: "https://images.unsplash.com/photo-1621800043295-a73fe2f76e2c?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 360,
    allergens: ["Gluten"],
    options: ["Choice of Roast Chicken or Roast Turkey", "Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-roast-chicken-stuffing",
    name: "Roast Chicken or Turkey with Stuffing",
    category: "sandwiches",
    subCategory: "Poultry Selection",
    price: 4.00,
    description: "Succulent roast chicken or turkey with fragrant sage and onion stuffing.",
    image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 430,
    allergens: ["Gluten"],
    options: ["Choice of Roast Chicken or Roast Turkey", "Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-roast-chicken-bacon",
    name: "Roast Chicken or Turkey with Bacon",
    category: "sandwiches",
    subCategory: "Poultry Selection",
    price: 4.50,
    description: "Sliced roast chicken or turkey accompanied by crisp grilled bacon.",
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 480,
    allergens: ["Gluten"],
    options: ["Choice of Roast Chicken or Roast Turkey", "Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-coronation-chicken",
    name: "Coronation Chicken",
    category: "sandwiches",
    subCategory: "Poultry Selection",
    price: 4.50,
    description: "Diced chicken in mild, lightly curried coronation dressing with apricots and sultanas.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 460,
    allergens: ["Gluten", "Eggs"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-sweet-chilli-chicken",
    name: "Sweet Chilli Chicken",
    category: "sandwiches",
    subCategory: "Poultry Selection",
    price: 4.50,
    description: "Tender chicken breast coated in sweet, tangy chilli sauce.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 410,
    allergens: ["Gluten"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-cajun-chicken",
    name: "Cajun Chicken",
    category: "sandwiches",
    subCategory: "Poultry Selection",
    price: 4.50,
    description: "Zesty spiced Cajun seasoned chicken breast, freshly prepared.",
    image: "https://images.unsplash.com/photo-1527477378738-964293f9ef5a?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 420,
    allergens: ["Gluten"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },

  // ================= SANDWICHES: FISH SELECTION =================
  {
    id: "sand-tuna-mayo",
    name: "Tuna Mayonnaise",
    category: "sandwiches",
    subCategory: "Fish Selection",
    price: 3.50,
    description: "Flaked tuna gently mixed with rich, creamy mayonnaise.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 390,
    allergens: ["Gluten", "Fish", "Eggs"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-tuna-sweetcorn",
    name: "Tuna Mayonnaise & Sweetcorn",
    category: "sandwiches",
    subCategory: "Fish Selection",
    price: 3.50,
    description: "Flaked tuna and sweet, crunchy golden corn bound in mayonnaise.",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 400,
    allergens: ["Gluten", "Fish", "Eggs"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-prawn-mayo",
    name: "Prawn Mayonnaise",
    category: "sandwiches",
    subCategory: "Fish Selection",
    price: 4.00,
    description: "Plump North Atlantic prawns tossed in seasoned mayonnaise.",
    image: "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 370,
    allergens: ["Gluten", "Crustaceans", "Eggs"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-prawn-cream-cheese",
    name: "Prawn & Cream Cheese",
    category: "sandwiches",
    subCategory: "Fish Selection",
    price: 4.50,
    description: "Succulent cold-water prawns paired with smooth cream cheese on bread or barm.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    tags: [],
    calories: 410,
    allergens: ["Gluten", "Crustaceans", "Dairy"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },

  // ================= SANDWICHES: VEGETARIAN SELECTION =================
  {
    id: "sand-cheese",
    name: "Cheese",
    category: "sandwiches",
    subCategory: "Vegetarian Selection",
    price: 2.50,
    description: "Grated or sliced mature cheddar cheese on your choice of bread.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian"],
    calories: 340,
    allergens: ["Gluten", "Dairy"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-cheese-onion",
    name: "Cheese & Onion",
    category: "sandwiches",
    subCategory: "Vegetarian Selection",
    price: 3.00,
    description: "Mature cheddar cheese paired with crunchy sliced onion.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian"],
    calories: 350,
    allergens: ["Gluten", "Dairy"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },
  {
    id: "sand-egg-mayo",
    name: "Egg Mayonnaise",
    category: "sandwiches",
    subCategory: "Vegetarian Selection",
    price: 3.00,
    description: "Free-range chopped egg blended with seasoned creamy mayonnaise and cracked black pepper.",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian"],
    calories: 370,
    allergens: ["Gluten", "Eggs"],
    options: ["Bread: Brown/White Sliced, Brown/White Barm, Wrap (Baguette/Ciabatta/Nudger +50p)", "Add Salad (+50p)"]
  },

  // ================= BAKED POTATOES =================
  {
    id: "jp-butter",
    name: "Baked Potato - Plain with Butter",
    category: "potatoes",
    price: 4.00,
    description: "Piping hot baked jacket potato with crispy skin, served fluffy inside with melting butter.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "gluten-free"],
    calories: 320,
    allergens: ["Dairy"]
  },
  {
    id: "jp-beans",
    name: "Baked Potato - Baked Beans",
    category: "potatoes",
    price: 3.50,
    description: "Hot jacket potato topped with warm Heinz baked beans in rich tomato sauce.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "vegan", "gluten-free"],
    calories: 380,
    allergens: []
  },
  {
    id: "jp-cheese",
    name: "Baked Potato - Cheese",
    category: "potatoes",
    price: 4.50,
    description: "Hot jacket potato topped with a generous mound of melted mature cheddar cheese.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "gluten-free"],
    calories: 460,
    allergens: ["Dairy"]
  },
  {
    id: "jp-cheese-beans",
    name: "Baked Potato - Cheese & Beans",
    category: "potatoes",
    price: 5.00,
    description: "The classic cafe combination: bubbling baked beans layered with melted cheddar cheese.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "gluten-free"],
    calories: 520,
    allergens: ["Dairy"],
    isPopular: true
  },
  {
    id: "jp-coleslaw",
    name: "Baked Potato - Homemade Coleslaw",
    category: "potatoes",
    price: 5.00,
    description: "Baked jacket potato served with Chef Paul's fresh homemade crunchy coleslaw.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "gluten-free"],
    calories: 430,
    allergens: ["Eggs"]
  },
  {
    id: "jp-cottage-cheese",
    name: "Baked Potato - Cottage Cheese",
    category: "potatoes",
    price: 5.00,
    description: "Fluffy baked potato topped with cool, creamy low-fat cottage cheese.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "gluten-free"],
    calories: 360,
    allergens: ["Dairy"]
  },
  {
    id: "jp-tuna-mayo",
    name: "Baked Potato - Tuna Mayonnaise",
    category: "potatoes",
    price: 5.50,
    description: "Generously filled with flaked tuna in rich mayonnaise.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten-free"],
    calories: 470,
    allergens: ["Fish", "Eggs"]
  },
  {
    id: "jp-tuna-sweetcorn",
    name: "Baked Potato - Tuna Mayonnaise & Sweetcorn",
    category: "potatoes",
    price: 5.50,
    description: "Flaked tuna and sweetcorn mixed with creamy mayonnaise on a hot jacket potato.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten-free"],
    calories: 490,
    allergens: ["Fish", "Eggs"]
  },
  {
    id: "jp-tuna-coleslaw",
    name: "Baked Potato - Tuna Mayonnaise & Coleslaw",
    category: "potatoes",
    price: 6.00,
    description: "Combination of creamy tuna mayonnaise and fresh homemade crunchy coleslaw.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten-free"],
    calories: 540,
    allergens: ["Fish", "Eggs"]
  },
  {
    id: "jp-bacon-beans",
    name: "Baked Potato - Bacon & Beans",
    category: "potatoes",
    price: 5.50,
    description: "Crispy chopped bacon pieces folded into warm baked beans over a hot potato.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten-free"],
    calories: 510,
    allergens: []
  },
  {
    id: "jp-bacon-cream-cheese",
    name: "Baked Potato - Bacon & Cream Cheese",
    category: "potatoes",
    price: 5.50,
    description: "Savoury grilled bacon pieces mixed with rich and silky cream cheese.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten-free"],
    calories: 530,
    allergens: ["Dairy"]
  },
  {
    id: "jp-cajun-chicken",
    name: "Baked Potato - Cajun Chicken",
    category: "potatoes",
    price: 6.00,
    description: "Warm baked potato generously piled with seasoned spicy Cajun chicken breast.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten-free"],
    calories: 490,
    allergens: []
  },
  {
    id: "jp-coronation-chicken",
    name: "Baked Potato - Coronation Chicken",
    category: "potatoes",
    price: 6.00,
    description: "Diced chicken breast in mild curried coronation dressing loaded into a fluffy jacket potato.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten-free"],
    calories: 510,
    allergens: ["Eggs"]
  },
  {
    id: "jp-sweet-chilli-chicken",
    name: "Baked Potato - Sweet Chilli Chicken",
    category: "potatoes",
    price: 6.00,
    description: "Tender chicken breast coated in sweet chilli glaze atop an oven-baked potato.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten-free"],
    calories: 480,
    allergens: []
  },
  {
    id: "jp-prawns-cream-cheese",
    name: "Baked Potato - Prawns & Cream Cheese",
    category: "potatoes",
    price: 6.50,
    description: "Cold-water prawns and rich smooth cream cheese served generously on a piping hot jacket potato.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80",
    tags: ["gluten-free"],
    calories: 510,
    allergens: ["Crustaceans", "Dairy"],
    isPopular: true
  },

  // ================= SALAD BOXES =================
  {
    id: "salad-box-base",
    name: "Salad Box (Fresh Base Box)",
    category: "salads",
    price: 3.00,
    description: "Crisp fresh salad box filled with lettuce, cucumber, tomato, peppers, onion, beetroot & cress. Customise with your choice of tasty add-on toppings.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "vegan", "gluten-free"],
    calories: 140,
    allergens: [],
    options: [
      "Add Rice (+£1.50)",
      "Add Egg Mayonnaise (+£1.50)",
      "Add Homemade Coleslaw (+£1.50)",
      "Add Homemade Pasta Salad (+£1.50)",
      "Add Tuna Mayonnaise (+£1.50)",
      "Add Tuna Mayonnaise & Sweetcorn (+£2.00)",
      "Add Roast Beef or Ham (+£2.50)",
      "Add Roast Chicken or Turkey (+£2.50)",
      "Add Cajun Chicken (+£3.00)",
      "Add Coronation Chicken (+£3.00)",
      "Add Sweet Chilli Chicken (+£3.00)",
      "Add Prawn Mayonnaise (+£3.00)",
      "Add Prawn & Cream Cheese (+£3.50)"
    ],
    isPopular: true
  },

  // ================= SPECIALS =================
  {
    id: "sp-cheeseburger",
    name: "Cheese Burger and Chips",
    category: "specials",
    price: 6.50,
    description: "Our fresh 6oz prime beef burger, served on a bun with crisp salad and a generous portion of homemade chips. (Add cheese for 50p).",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
    tags: ["chef-pick"],
    calories: 820,
    allergens: ["Gluten", "Dairy"],
    options: ["Add Extra Cheese (+£0.50)"],
    isPopular: true
  },
  {
    id: "sp-fish-chips",
    name: "Fresh Battered Fish and Chips",
    category: "specials",
    price: 7.50,
    description: "Freshly battered cod or haddock fillet, served golden and crisp with a portion of our homemade chips and mushy peas.",
    image: "https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=800&q=80",
    tags: ["chef-pick"],
    calories: 840,
    allergens: ["Fish", "Gluten"],
    isPopular: true
  },
  {
    id: "sp-casserole",
    name: "Steak and Mushroom Casserole",
    category: "specials",
    price: 7.50,
    description: "Our casserole is freshly prepared slow-cooked beef and tender mushrooms in rich savoury gravy, served with a portion of homemade chips.",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80",
    tags: ["chef-pick"],
    calories: 780,
    allergens: ["Gluten"],
    isPopular: true
  },
  {
    id: "sp-soup",
    name: "Homemade Soup",
    category: "specials",
    price: 4.00,
    description: "Our homemade soup of the day, freshly made each morning and served with a crusty bread roll and butter. Ask a member of staff for today's soup.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian"],
    calories: 280,
    allergens: ["Gluten", "Dairy"]
  },
  {
    id: "sp-omelettes",
    name: "Omelettes",
    category: "specials",
    price: 3.50,
    description: "Freshly made 3-egg omelette. Add any meat ingredient for £1.00 each, and any non-meat ingredient for £0.50 each.",
    image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "gluten-free"],
    calories: 320,
    allergens: ["Eggs", "Dairy"],
    options: [
      "Add Meat (£1.00 each): Bacon, Sausage, Ham, Beef, Chicken",
      "Add Non-Meat (£0.50 each): Cheese, Mushrooms, Onion, Tomato"
    ]
  },

  // ================= DRINKS =================
  {
    id: "dr-tea",
    name: "Tea",
    category: "drinks",
    subCategory: "Hot Drinks",
    price: 1.50,
    description: "Traditional hot brewed English tea served with fresh milk and sugar to taste.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian"],
    calories: 20,
    allergens: ["Dairy"]
  },
  {
    id: "dr-filter-coffee",
    name: "Fresh Filtered Coffee",
    category: "drinks",
    subCategory: "Hot Drinks",
    price: 2.00,
    description: "Freshly brewed filter coffee, smooth and aromatic.",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian"],
    calories: 15,
    allergens: ["Dairy"]
  },
  {
    id: "dr-latte",
    name: "Latte",
    category: "drinks",
    subCategory: "Hot Drinks",
    price: 3.00,
    description: "Rich espresso combined with steamed milk and a delicate layer of foam.",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian"],
    calories: 140,
    allergens: ["Dairy"]
  },
  {
    id: "dr-cappuccino",
    name: "Cappuccino",
    category: "drinks",
    subCategory: "Hot Drinks",
    price: 3.00,
    description: "Classic espresso with thick creamy steamed milk foam, dusted with chocolate powder.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian"],
    calories: 130,
    allergens: ["Dairy"]
  },
  {
    id: "dr-hot-chocolate",
    name: "Hot Chocolate",
    category: "drinks",
    subCategory: "Hot Drinks",
    price: 3.50,
    description: "Warm, indulgent chocolate drink made with steamed milk.",
    image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian"],
    calories: 220,
    allergens: ["Dairy"]
  },
  {
    id: "dr-hot-chocolate-marshmallows",
    name: "Hot Chocolate with Cream & Marshmallows",
    category: "drinks",
    subCategory: "Hot Drinks",
    price: 4.00,
    description: "Luxury hot chocolate topped with swirling whipped dairy cream and fluffy mini marshmallows.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian"],
    calories: 310,
    allergens: ["Dairy"],
    isPopular: true
  },
  {
    id: "dr-juice",
    name: "Fresh Orange or Apple Juice",
    category: "drinks",
    subCategory: "Cold Drinks",
    price: 1.50,
    priceFormatted: "£1.50 / £2.00",
    description: "Chilled fresh orange juice or apple juice. Available in Regular (£1.50) or Large (£2.00).",
    image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "vegan", "gluten-free"],
    calories: 90,
    allergens: [],
    options: ["Regular: £1.50", "Large: £2.00"]
  },
  {
    id: "dr-milkshake",
    name: "Fresh Strawberry, Chocolate or Banana Milkshake",
    category: "drinks",
    subCategory: "Cold Drinks",
    price: 3.00,
    priceFormatted: "£3.00 / £3.50",
    description: "Thick ice cream milkshake in fresh Strawberry, Chocolate, or Banana flavour. Regular (£3.00) or Large (£3.50).",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "gluten-free"],
    calories: 320,
    allergens: ["Dairy"],
    options: ["Flavours: Strawberry, Chocolate, Banana", "Regular: £3.00", "Large: £3.50"],
    isPopular: true
  },
  {
    id: "dr-cans",
    name: "Cans (Soft Drinks)",
    category: "drinks",
    subCategory: "Cold Drinks",
    price: 1.00,
    description: "Selection of chilled canned sodas including Coca-Cola, Diet Coke, Fanta, Sprite, Irn-Bru and Vimto.",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "vegan", "gluten-free"],
    calories: 140,
    allergens: []
  },
  {
    id: "dr-water",
    name: "Bottled Water",
    category: "drinks",
    subCategory: "Cold Drinks",
    price: 1.00,
    description: "Chilled pure still spring water bottle.",
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=800&q=80",
    tags: ["vegetarian", "vegan", "gluten-free"],
    calories: 0,
    allergens: []
  }
];

export const TRIPADVISOR_STATS = {
  averageRating: 5.0,
  totalReviews: 218,
  ranking: "#1 Rated Cafe in St Helens",
  location: "St Helens",
  award: "TripAdvisor Travelers' Choice 2024",
  categories: [
    { name: "Food Quality", rating: 5.0, count: "Generous portions & fresh ingredients" },
    { name: "Service", rating: 5.0, count: "Warm, friendly St Helens hospitality" },
    { name: "Cleanliness", rating: 5.0, count: "Spotlessly clean cafe standard" },
    { name: "Value for Money", rating: 4.9, count: "Honest local prices" }
  ],
  ratingDistribution: [
    { stars: 5, percentage: 94, count: 205 },
    { stars: 4, percentage: 5, count: 11 },
    { stars: 3, percentage: 1, count: 2 },
    { stars: 2, percentage: 0, count: 0 },
    { stars: 1, percentage: 0, count: 0 }
  ]
};

export const TRIPADVISOR_REVIEWS: TripAdvisorReview[] = [
  {
    id: "ta-1",
    authorName: "Dave M.",
    authorLocation: "St Helens, Merseyside",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    travelerType: "Solo",
    rating: 5,
    title: "Best breakfast in St Helens by a country mile",
    date: "August 2024",
    stayDate: "Dined solo in August",
    content: "I've been visiting PDG's Eatery for years and Paul never disappoints. The Hearty Breakfast is fantastic value at £7.50 with proper thick bacon, quality sausages, eggs and black pudding. The cafe is always spotless and the staff treat everyone like family. Unbeatable in St Helens.",
    helpfulVotes: 42,
    visitedDishRecommendation: "The Hearty Cooked Breakfast",
    ownerResponse: {
      responder: "Paul Gaskin (Proprietor, PDG's Eatery)",
      date: "August 2024",
      text: "Thank you so much Dave! Really appreciate your loyal support over the years. We take pride in sourcing good butcher meat and keeping things proper. Look forward to seeing you for your next brew!"
    },
    verified: true
  },
  {
    id: "ta-2",
    authorName: "Brenda & Alan M.",
    authorLocation: "Rainford, St Helens",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    travelerType: "Couples",
    rating: 5,
    title: "Immaculate cleanliness, steak casserole like Sunday at mum's",
    date: "July 2024",
    stayDate: "Dined as a couple in July",
    content: "We popped in after visiting Queens Park on a Thursday. Had the steak and mushroom casserole and my husband had the fish and chips. Both were superb—the beef was melt-in-the-mouth with homemade chips. The tables and cutlery are always gleaming clean. A real St Helens treasure.",
    helpfulVotes: 31,
    visitedDishRecommendation: "Steak & Mushroom Casserole and Battered Fish & Chips",
    ownerResponse: {
      responder: "Paul Gaskin (Proprietor, PDG's Eatery)",
      date: "July 2024",
      text: "Thanks Brenda and Alan! That casserole is cooked slow for hours. Delighted you both enjoyed your visit after your walk in the park. See you both again soon."
    },
    verified: true
  },
  {
    id: "ta-3",
    authorName: "Gary T.",
    authorLocation: "Thatto Heath, St Helens",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    travelerType: "Friends",
    rating: 5,
    title: "Top-notch club sandwich and friendly banter",
    date: "July 2024",
    stayDate: "Dined with friends in July",
    content: "Working nearby in St Helens, we love dropping in for lunch. The club sandwich and toasted baguettes are packed full and crunchy. When we sit in, the atmosphere is warm and friendly. Paul has been in catering for over 40 years and you can tell in the consistency. 10/10 local cafe.",
    helpfulVotes: 26,
    visitedDishRecommendation: "Club Sandwich & Fresh Filter Coffee",
    verified: true
  },
  {
    id: "ta-4",
    authorName: "Sarah Jenkins & Family",
    authorLocation: "Eccleston, St Helens",
    authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    travelerType: "Families",
    rating: 5,
    title: "Lovely family cafe — kids loved the shakes and mini breakfasts",
    date: "June 2024",
    stayDate: "Dined with family in June",
    content: "Brought my two young kids and their grandad in on Saturday morning. They did mini breakfasts for the little ones and thick ice cream milkshakes that put a huge smile on their faces. Service was quick and friendly. Free roadside parking right outside makes it so easy. Highly recommend to any families in St Helens!",
    helpfulVotes: 19,
    visitedDishRecommendation: "Mini Breakfasts & Thick Milkshakes",
    ownerResponse: {
      responder: "Paul & the PDG's Team",
      date: "June 2024",
      text: "Thank you Sarah! We love welcoming families and grandads into the cafe. Glad the kids enjoyed their milkshakes and breakfasts. Always a pleasure having you in!"
    },
    verified: true
  },
  {
    id: "ta-5",
    authorName: "Mark L.",
    authorLocation: "Prescot, Merseyside",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=160&q=80",
    travelerType: "Business",
    rating: 5,
    title: "Great jacket potatoes and fresh salad box",
    date: "May 2024",
    stayDate: "Visited on business in May",
    content: "Met a colleague in St Helens and stopped at PDG's Eatery. Very clean, bright cafe with comfortable seating. Had a cheese & beans jacket potato and a sweet chilli chicken salad box—fresh, tasty, and incredible value. Friendly staff and fast service.",
    helpfulVotes: 15,
    visitedDishRecommendation: "Baked Potato with Cheese & Beans",
    verified: true
  },
  {
    id: "ta-6",
    authorName: "Patricia W.",
    authorLocation: "St Helens, United Kingdom",
    authorAvatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=160&q=80",
    travelerType: "Friends",
    rating: 5,
    title: "Proper cup of tea, lovely toasted barm and warm welcome",
    date: "April 2024",
    stayDate: "Dined with friends in April",
    content: "A friend and I met up on Friday afternoon. Had the hot soup with a warm roll and a pot of tea. You can tell everything is prepared with care. Paul has created a lovely community atmosphere where everyone feels comfortable and looked after.",
    helpfulVotes: 22,
    visitedDishRecommendation: "Homemade Soup with Bread Roll & Hot Tea",
    verified: true
  },
  {
    id: "ta-7",
    authorName: "Ian & Christine P.",
    authorLocation: "St Helens, Merseyside",
    authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&q=80",
    travelerType: "Couples",
    rating: 5,
    title: "Visiting since Paul opened in 2007 — always immaculate and piping hot",
    date: "March 2024",
    stayDate: "Dined as regular couples",
    content: "We have been visiting PDG's Eatery for nearly two decades. The standard has never slipped once. Paul has 40+ years in catering and it truly shows. Always a warm welcome, the tables and cutlery are spotlessly clean, and the food comes out fresh and piping hot every single time. Best cafe in St Helens.",
    helpfulVotes: 38,
    visitedDishRecommendation: "Medium Breakfast & Mug of Nescafe Gold Blend",
    verified: true
  },
  {
    id: "ta-8",
    authorName: "Liam K.",
    authorLocation: "Newtown, St Helens",
    authorAvatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=160&q=80",
    travelerType: "Solo",
    rating: 5,
    title: "Best hot roast beef baguette with gravy, unbeatable value",
    date: "February 2024",
    stayDate: "Dined solo on lunch break",
    content: "Working nearby on Cambridge Road, this is my go-to lunch spot. The hot roast beef baguette with rich onion gravy is legendary around here—packed to the brim with tender beef. Proper traditional cafe run by lovely, polite people. You couldn't ask for better.",
    helpfulVotes: 29,
    visitedDishRecommendation: "Hot Roast Beef Baguette with Rich Gravy",
    verified: true
  },
  {
    id: "ta-9",
    authorName: "Margaret B.",
    authorLocation: "Sutton, St Helens",
    authorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    travelerType: "Friends",
    rating: 5,
    title: "Homemade pea and ham soup and the friendliest staff",
    date: "January 2024",
    stayDate: "Dined with friends",
    content: "Popped in on a rainy Tuesday for lunch. Had the homemade pea and ham soup with a warm buttered roll and a pot of tea. It was thick, hearty, and full of flavour. The ladies serving are so pleasant and chatty. Cleanest cafe you will ever walk into.",
    helpfulVotes: 24,
    visitedDishRecommendation: "Homemade Pea & Ham Soup with Bread Roll",
    verified: true
  },
  {
    id: "ta-10",
    authorName: "Steve & Joanne H.",
    authorLocation: "St Helens",
    authorAvatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=160&q=80",
    travelerType: "Families",
    rating: 5,
    title: "Proper butcher sausages and thick back bacon — true quality",
    date: "December 2023",
    stayDate: "Dined with family for breakfast",
    content: "No greasy spoon shortcuts here! You get genuine butcher-quality pork sausages, thick back bacon, and eggs cooked to absolute perfection with runny yolks. You can taste the quality in every mouthful. Spotless cafe and free roadside parking right outside is an added bonus.",
    helpfulVotes: 33,
    visitedDishRecommendation: "The Hearty Cooked Breakfast",
    verified: true
  }
];

export interface CustomerQuoteHighlight {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating: number;
  highlightTag: string;
  dish?: string;
}

export const HIGHLIGHTED_QUOTES: CustomerQuoteHighlight[] = [
  {
    id: "quote-1",
    quote: "Best breakfast in St Helens by a country mile. The Hearty Breakfast is fantastic value with proper thick bacon, quality sausages, and runny eggs. Spotless cafe and staff treat everyone like family.",
    author: "Dave M.",
    role: "Regular Diner · St Helens",
    rating: 5,
    highlightTag: "Best Breakfast",
    dish: "The Hearty Cooked Breakfast"
  },
  {
    id: "quote-2",
    quote: "We've been coming since Paul opened in 2007. The standard has never slipped once. Spotlessly clean tables, gleaming cutlery, and piping hot food every single time.",
    author: "Ian & Christine P.",
    role: "Patrons for 17+ Years · St Helens",
    rating: 5,
    highlightTag: "Spotless Cleanliness",
    dish: "Cooked Breakfasts"
  },
  {
    id: "quote-3",
    quote: "The steak & mushroom casserole was melt-in-the-mouth, just like Sunday at mum's, served with homemade chips. A real St Helens treasure on Cambridge Road.",
    author: "Brenda & Alan M.",
    role: "Couples Diner · Rainford",
    rating: 5,
    highlightTag: "Melt-in-the-Mouth Casserole",
    dish: "Steak & Mushroom Casserole"
  },
  {
    id: "quote-4",
    quote: "The hot roast beef baguette with rich onion gravy is legendary around here—packed to the brim with tender beef. Proper traditional cafe run by lovely people.",
    author: "Liam K.",
    role: "Local Worker · Newtown",
    rating: 5,
    highlightTag: "Hot Beef Baguette",
    dish: "Hot Roast Beef Baguette"
  },
  {
    id: "quote-5",
    quote: "Brought my two young kids and their grandad in on Saturday. Mini breakfasts and thick milkshakes put a huge smile on their faces. Warm welcome and fast service.",
    author: "Sarah J. & Family",
    role: "Family Diner · Eccleston",
    rating: 5,
    highlightTag: "Family Atmosphere",
    dish: "Mini Breakfasts & Thick Shakes"
  },
  {
    id: "quote-6",
    quote: "Homemade pea and ham soup with a warm buttered roll. Thick, hearty, and full of flavour. The ladies serving are so pleasant and chatty. Cleanest cafe in town.",
    author: "Margaret B.",
    role: "Lunch Diner · Sutton",
    rating: 5,
    highlightTag: "Homemade Soup & Friendly Staff",
    dish: "Pea & Ham Soup with Roll"
  }
];

