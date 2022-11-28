import React from "react";
import Layout from '../components/Layout';
import RowLayout from '../components/RowLayout';
import myData from "../data/news.json";
import { center } from "../App";

export default function Center() {
  // Have a list of 4 articles
  // Pass that list to the row layout
  // Then row layout makes as many cards as are in that list of 4 or less

  // 1. Check if last item in array
  // 2. If last item, push to row and break

  const articles = [];
  let i = 0;
  let j = 0;
  let row = [];
  while (i < center.length) {
    // Test if last item in the array (In the case that the row is less than 4)
    if (center[i] === center[center.length - 1]) {
      row.push(center[i]);
      articles.push(row);
      break;
    }

    // Each row will need 4 articles
    else if (j < 4) {
      row.push(center[i]);
      j++;
    } else {
      j = 0;
      articles.push(row);
      row = [];
    }
    i++;
  }
  const layoutArticles = [];
  layoutArticles.push(center[0]);
  layoutArticles.push(center[1]);
  layoutArticles.push(center[2]);
  return (
    <>
      <Layout articles={layoutArticles}/>
      {articles.map((item, key) => (
        <RowLayout
          row={item}
          key={key}
        />
      ))}
    </>
  );
}
