import React from "react";
import RowLayout from "../components/RowLayout";
import Card from "../components/Card";
import CardLong from "../components/CardLong";
import { left } from "../App";

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
  while (i < left.length) {
    // Test if last item in the array (In the case that the row is less than 4)
    if (left[i] === left[left.length - 1]) {
      row.push(left[i]);
      articles.push(row);
      break;
    }

    // Each row will need 4 articles
    else if (j < 4) {
      row.push(left[i]);
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
            title={left[4].title}
            img={left[4].media}
            excerpt={left[4].summary}
            source={left[4].clean_url}
            link={left[4].link}
          />
        </div>
        <div className="box-5">
          <CardLong
            border="border-primary"
            textColor="text-primary"
            title={left[9].title}
            img={left[9].media}
            excerpt={left[9].summary}
            source={left[9].clean_url}
            link={left[9].link}
          />
        </div>
        <div className="box-6">
          <CardLong
            border="border-primary"
            textColor="text-primary"
            title={left[14].title}
            img={left[14].media}
            excerpt={left[14].summary}
            source={left[14].clean_url}
            link={left[14].link}
          />
        </div>
      </div>
      {articles.map((item, key) => (
        <RowLayout
          row={item}
          key={key}
        />
      ))}
    </>
  );
}
