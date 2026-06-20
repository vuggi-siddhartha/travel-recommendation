# TravelScape — Travel Recommendation Website

A modern, responsive travel recommendation website built with HTML5, CSS3, and vanilla JavaScript. Discover beautiful beaches, ancient temples, and vibrant cities around the world.

## 🌍 Features

- **Dynamic Search**: Search for beaches, temples, or countries with case-insensitive keyword matching
- **Real-time Results**: Fetch travel data from JSON API and display results in a responsive grid
- **Local Time Display**: Shows current local time for each destination with timezone support
- **Responsive Design**: Mobile-friendly layout with smooth animations and transitions
- **Multi-page Navigation**: Home, About Us, and Contact Us pages
- **Contact Form**: Allow users to reach out with inquiries
- **Social Media Links**: Connect with us on Facebook, Instagram, Twitter, and YouTube

## 📁 Project Structure

```
travelRecommendation/
├── travel_recommendation.html      # Main HTML file
├── style.css                       # Styling (CSS3, animations, responsive)
├── travel_recommendation.js        # JavaScript logic (fetch, search, navigation)
├── travel_recommendation_api.json  # Travel data (countries, temples, beaches)
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (for fetch API to work)

### Running Locally

1. Clone the repository:
```bash
git clone https://github.com/YOUR-USERNAME/travel-recommendation.git
cd travel-recommendation
```

2. Start a local web server:
```bash
# Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

3. Open your browser and navigate to:
```
http://localhost:8000/travel_recommendation.html
```

## 🎯 How to Use

### Search for Destinations
1. Enter a keyword in the search bar (e.g., "beach", "temple", "australia")
2. Click the **Search** button or press Enter
3. View results in a responsive grid with images and descriptions
4. Each destination shows the local time in that location

### Supported Keywords
- **Beaches**: beach, beaches
- **Temples**: temple, temples
- **Countries**: australia, japan, brazil, country, countries
- **Generic Search**: Search by destination name or description

### Clear Results
Click the **Reset** button to clear search results and the search input.

### Navigation
- **Home**: Browse and search destinations
- **About Us**: Learn about TravelScape and our team
- **Contact Us**: Send us a message with inquiries

## 📊 Data Structure

The `travel_recommendation_api.json` file contains:

```json
{
  "countries": [
    {
      "name": "Country Name",
      "cities": [
        {
          "name": "City Name",
          "imageUrl": "https://...",
          "description": "..."
        }
      ]
    }
  ],
  "temples": [
    {
      "name": "Temple Name",
      "imageUrl": "https://...",
      "description": "..."
    }
  ],
  "beaches": [
    {
      "name": "Beach Name",
      "imageUrl": "https://...",
      "description": "..."
    }
  ]
}
```

## 🎨 Design Highlights

- **Modern UI**: Clean, professional design with smooth animations
- **Color Scheme**: Blue primary (#1a73e8), orange accent (#ff6f3c)
- **Typography**: Inter font family for excellent readability
- **Responsive Grid**: Auto-fill grid layout that adapts to screen size
- **Glass Navbar**: Frosted glass effect with backdrop blur
- **Hover Effects**: Interactive cards with elevation and scale transforms
- **Smooth Scrolling**: Automatic scroll-to-top on page navigation

## 🌐 Deployment

This website is deployed on **GitHub Pages** and is publicly accessible at:
```
https://YOUR-USERNAME.github.io/travel-recommendation/travel_recommendation.html
```

### To Deploy Your Own Version:

1. Create a public GitHub repository
2. Push this code to the `main` branch
3. Go to **Settings → Pages**
4. Select **Deploy from a branch** → **main** → **/root**
5. Your site will be live in 1-2 minutes

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, animations, transitions
- **JavaScript (ES6+)**: Fetch API, DOM manipulation, event handling
- **JSON**: Data storage and retrieval
- **GitHub Pages**: Free static hosting

## 📝 Features Implemented

- ✅ HTML template structure (Task 1)
- ✅ Navigation bar with search (Task 2)
- ✅ Hero home page with social icons (Task 3)
- ✅ About Us page with team members (Task 4)
- ✅ Contact Us form (Task 5)
- ✅ Fetch API integration (Task 6)
- ✅ Keyword search with case-insensitive matching (Task 7)
- ✅ Recommendation results display (Task 8)
- ✅ Clear/Reset functionality (Task 9)
- ✅ Local time display by timezone (Task 10)

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## 📄 License

This project is open source and available under the MIT License.

## 👥 Team

- **Arjun Kumar** — Founder & CEO
- **Sophia Patel** — Head of Travel Curation
- **Marco Rossi** — Lead Developer
- **Lily Wang** — UX Designer

## 📧 Contact

Have questions or feedback? Reach out through our [Contact Us](travel_recommendation.html) page or email us at info@travelscape.com

---

**Made with ❤️ for explorers worldwide** — TravelScape 2026
