import React from "react";
import { combined_articles, sources_cards } from "../App";
import SourceCard from "../components/SourceCard";
import SourcesRow from "../components/SourcesRow";

export default function Sources() {
  const sources = [];
  const sources_cards = [];
  combined_articles.forEach((article) => {
    if (!sources.includes(article.clean_url)) {
      sources_cards.push(article);
      sources.push(article.clean_url);
    }
  });
  // Have a list of 4 articles
  // Pass that list to the row layout
  // Then row layout makes as many cards as are in that list of 4 or less

  // 1. Check if last item in array
  // 2. If last item, push to row and break

  const articles = [];
  let i = 0;
  let j = 0;
  let row = [];
  while (i < sources_cards.length) {
    // Test if last item in the array (In the case that the row is less than 4)
    if (sources_cards[i] === sources_cards[sources_cards.length - 1]) {
      row.push(sources_cards[i]);
      articles.push(row);
      break;
    }

    // Each row will need 4 articles
    else if (j < 4) {
      row.push(sources_cards[i]);
      j++;
    } else {
      j = 0;
      articles.push(row);
      row = [];
    }
    i++;
  }
  return (
    <>
      <h1>Sources</h1>
      <p>
        AllSides Media Bias Ratings™ make the political leanings of hundreds of
        media sources transparent so that you can get the full picture and think
        for yourself. AllSides has rated over 1,400 sources. Below, you can find
        the sources used in today's latest headlines from Politically Correct.
      </p>
      <hr></hr>
      {articles.map((item, key) => (
        <SourcesRow row={item} key={key} />
      ))}
    </>
  );
}
