import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import BiasNavBar from "./components/BiasNavBar";
import Center from "./pages/Center";
import Left from "./pages/Left";
import Right from "./pages/Right";
import Home from "./pages/Home";
import Axios from "axios";
import "./App.css";
import headlines from "./data/LatestHeadlinesWithSources.json";
import MBData from "./data/MBDS_with_clean_urls.json";
import SearchResults from "./pages/SearchResults";
import Sources from "./pages/Sources";

// Create new array to hold a combined object of both the media bias info and the article info
export const combined_articles = [];
for (let i = 0; i < headlines.articles.length; i++) {
  for (let j = 0; j < MBData.length; j++) {
    if (MBData[j].clean_url == headlines.articles[i].clean_url) {
      combined_articles.push({
        title: headlines.articles[i].title,
        link: headlines.articles[i].link,
        clean_url: headlines.articles[i].clean_url,
        excerpt: headlines.articles[i].excerpt,
        summary: headlines.articles[i].summary,
        media: headlines.articles[i].media,
        rating: MBData[j].rating,
        all_sides_url: MBData[j].url,
        source: MBData[j].news_source,
        screen_name: MBData[j].screen_name,
      });
      break;
    }
  }
}

export const left = [];
export const right = [];
export const center = [];
export const no_rating = [];

combined_articles.forEach((article) => {
  if (article.rating === "center" || article.rating == "mixed") {
    center.push(article);
  } else if (article.rating.includes("left")) {
    left.push(article);
  } else if (article.rating.includes("right")) {
    right.push(article);
  } else {
    no_rating.push(article);
  }
});
console.log(combined_articles);

function App() {
  // REMEMBER: You can repeat this process for the sources page

  return (
    <div className="App">
      {/* NavBars for every page */}
      <NavBar />
      <BiasNavBar />

      {/* Links to each media bias page */}
      <div className="routes-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="left" element={<Left />} />
          <Route path="center" element={<Center />} />
          <Route path="right" element={<Right />} />
          <Route path="search" element={<SearchResults />} />
          <Route path="sources" element={<Sources />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
