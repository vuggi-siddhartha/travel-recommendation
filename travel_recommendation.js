// ── DOM References ──────────────────────────────────────────
const searchInput    = document.getElementById('searchInput');
const searchBtn      = document.getElementById('searchBtn');
const resetBtn       = document.getElementById('resetBtn');
const resultsSection = document.getElementById('results');
const resultsGrid    = document.getElementById('resultsGrid');
const resultsTitle   = document.getElementById('resultsTitle');
const resultsSub     = document.getElementById('resultsSub');

// Page sections
const homeSection    = document.getElementById('home');
const aboutSection   = document.getElementById('about');
const contactSection = document.getElementById('contact');

// Nav links
const navLinks = document.querySelectorAll('.nav-link');

// ── Navigation ──────────────────────────────────────────────
function showPage(page) {
  [homeSection, aboutSection, contactSection].forEach(s => {
    s.classList.add('section-hidden');
    s.classList.remove('section-visible');
  });
  resultsSection.classList.add('section-hidden');
  resultsSection.classList.remove('section-visible');

  const target = document.getElementById(page);
  if (target) {
    target.classList.remove('section-hidden');
    target.classList.add('section-visible');
  }

  // Toggle search bar visibility (hide on About/Contact)
  const searchBar = document.querySelector('.nav-search');
  if (page === 'home') {
    searchBar.style.display = 'flex';
  } else {
    searchBar.style.display = 'none';
  }

  // Update active nav link
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) link.classList.add('active');
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

// ── Navbar scroll effect ────────────────────────────────────
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ── Time zone mapping for countries ─────────────────────────
const TIMEZONE_MAP = {
  'australia':         'Australia/Sydney',
  'sydney':            'Australia/Sydney',
  'melbourne':         'Australia/Melbourne',
  'japan':             'Asia/Tokyo',
  'tokyo':             'Asia/Tokyo',
  'kyoto':             'Asia/Tokyo',
  'brazil':            'America/Sao_Paulo',
  'rio de janeiro':    'America/Sao_Paulo',
  'são paulo':         'America/Sao_Paulo',
  'sao paulo':         'America/Sao_Paulo',
  'cambodia':          'Asia/Phnom_Penh',
  'angkor wat':        'Asia/Phnom_Penh',
  'indonesia':         'Asia/Jakarta',
  'borobudur':         'Asia/Jakarta',
  'india':             'Asia/Kolkata',
  'golden temple':     'Asia/Kolkata',
  'french polynesia':  'Pacific/Tahiti',
  'bora bora':         'Pacific/Tahiti',
  'maldives':          'Indian/Maldives',
  'hawaii':            'Pacific/Honolulu',
  'maui':              'Pacific/Honolulu',
  'thailand':          'Asia/Bangkok',
  'phi phi':           'Asia/Bangkok',
  'fushimi inari':     'Asia/Tokyo',
};

function getLocalTime(placeName) {
  const lower = placeName.toLowerCase();
  let tz = null;
  for (const [key, zone] of Object.entries(TIMEZONE_MAP)) {
    if (lower.includes(key)) {
      tz = zone;
      break;
    }
  }
  if (!tz) return null;
  const options = {
    timeZone: tz,
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    weekday: 'short',
  };
  try {
    return new Date().toLocaleTimeString('en-US', options) + ` (${tz.split('/').pop().replace('_', ' ')})`;
  } catch {
    return null;
  }
}

// ── Create result card ──────────────────────────────────────
function createCard(item) {
  const localTime = getLocalTime(item.name);
  const card = document.createElement('div');
  card.className = 'result-card';
  card.innerHTML = `
    <img src="${item.imageUrl}" alt="${item.name}" loading="lazy"
         onerror="this.src='https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80'">
    <div class="result-card-body">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      ${localTime ? `<div class="local-time">🕐 Local time: ${localTime}</div>` : ''}
    </div>
  `;
  return card;
}

// ── Search logic ────────────────────────────────────────────
function performSearch() {
  const raw = searchInput.value.trim();
  if (!raw) return;

  const keyword = raw.toLowerCase();

  fetch('travel_recommendation_api.json')
    .then(res => {
      if (!res.ok) throw new Error('Failed to load recommendations data');
      return res.json();
    })
    .then(data => {
      console.log('Fetched travel data:', data);

      let results = [];
      let categoryLabel = '';

      // Match beaches
      if (['beach', 'beaches'].includes(keyword)) {
        results = data.beaches || [];
        categoryLabel = 'Beach Destinations';
      }
      // Match temples
      else if (['temple', 'temples'].includes(keyword)) {
        results = data.temples || [];
        categoryLabel = 'Temple Destinations';
      }
      // Match countries — try exact country name match first
      else if (['country', 'countries'].includes(keyword)) {
        results = [];
        categoryLabel = 'Country Destinations';
        (data.countries || []).forEach(country => {
          (country.cities || []).forEach(city => {
            results.push(city);
          });
        });
      }
      // Match a specific country name (e.g. "australia", "japan", "brazil")
      else {
        const matchedCountry = (data.countries || []).find(c =>
          c.name.toLowerCase() === keyword
        );
        if (matchedCountry) {
          results = matchedCountry.cities || [];
          categoryLabel = `${matchedCountry.name} — Cities`;
        } else {
          // Generic search across everything
          const allItems = [
            ...(data.beaches || []),
            ...(data.temples || []),
          ];
          (data.countries || []).forEach(c => {
            (c.cities || []).forEach(city => allItems.push(city));
          });
          results = allItems.filter(item =>
            item.name.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword)
          );
          categoryLabel = results.length > 0 ? 'Search Results' : '';
        }
      }

      displayResults(results, categoryLabel, raw);
    })
    .catch(err => {
      console.error('Error fetching data:', err);
      resultsGrid.innerHTML = `<div class="no-results"><span class="icon">⚠️</span><p>Error loading recommendations. Please try again.</p></div>`;
      showResultsSection();
    });
}

function displayResults(results, categoryLabel, query) {
  resultsGrid.innerHTML = '';

  if (results.length === 0) {
    resultsTitle.textContent = 'No Results Found';
    resultsSub.textContent = `We couldn't find recommendations for "${query}". Try searching for beach, temple, or a country name.`;
    resultsGrid.innerHTML = `<div class="no-results"><span class="icon">🔍</span><p>No matching destinations found.</p></div>`;
  } else {
    resultsTitle.textContent = categoryLabel;
    resultsSub.textContent = `${results.length} destination${results.length > 1 ? 's' : ''} found for "${query}"`;
    results.forEach(item => {
      resultsGrid.appendChild(createCard(item));
    });
  }

  showResultsSection();
}

function showResultsSection() {
  resultsSection.classList.remove('section-hidden');
  resultsSection.classList.add('section-visible');
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Clear / Reset ───────────────────────────────────────────
function clearResults() {
  searchInput.value = '';
  resultsGrid.innerHTML = '';
  resultsTitle.textContent = '';
  resultsSub.textContent = '';
  resultsSection.classList.add('section-hidden');
  resultsSection.classList.remove('section-visible');
}

// ── Event listeners ─────────────────────────────────────────
searchBtn.addEventListener('click', performSearch);
resetBtn.addEventListener('click', clearResults);
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') performSearch();
});

// ── Contact form handler ────────────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name  = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const msg   = document.getElementById('contactMessage').value.trim();

    if (!name || !email || !msg) {
      alert('Please fill in all fields.');
      return;
    }

    alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`);
    contactForm.reset();
  });
}

// ── Initialize ──────────────────────────────────────────────
showPage('home');
