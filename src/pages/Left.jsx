import React from "react";
import RowLayout from "../components/RowLayout";
import Card from "../components/Card";
import CardLong from "../components/CardLong";
import myData from "../data/news.json";

export default function Left() {
  // Have a list of 4 articles
  // Pass that list to the row layout
  // Then row layout makes as many cards as are in that list of 4 or less

  // 1. Check if last item in array
  // 2. If last item, push to row and break

  const articles = [];
  let i = 0;
  let j = 0;
  let row = [];
  while (i < myData.articles.length) {
    // Test if last item in the array (In the case that the row is less than 4)
    if (myData.articles[i] === myData.articles[myData.articles.length - 1]) {
      row.push(myData.articles[i]);
      articles.push(row);
      break;
    }

    // Each row will need 4 articles
    else if (j < 4) {
      row.push(myData.articles[i]);
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
      <div className="container-1">
        <div className="box-4">
          <Card
            border="border-primary"
            textColor="text-primary"
            title={myData.articles[0].title}
            img={myData.articles[0].media}
            excerpt={myData.articles[0].excerpt}
            source={myData.articles[0].clean_url}
          />
        </div>
        <div className="box-5">
          <CardLong border="border-primary" text="text-primary" />
        </div>
        <div className="box-6">
          <CardLong border="border-primary" text="text-primary" />
        </div>
      </div>
      {articles.map((item, key) => (
        <RowLayout
          row={item}
          key={key}
          border="border-primary"
          textColor="text-primary"
        />
      ))}
    </>
  );
}
