import React from "react";
import RowLayout from '../components/RowLayout';
import Card from '../components/Card';
import CardLong from '../components/CardLong';
import { right } from "../App";

export default function Right() {
  // Have a list of 4 articles
  // Pass that list to the row layout
  // Then row layout makes as many cards as are in that list of 4 or less

  // 1. Check if last item in array
  // 2. If last item, push to row and break

  const articles = [];
  let i = 0;
  let j = 0;
  let row = [];
  while (i < right.length) {
    // Test if last item in the array (In the case that the row is less than 4)
    if (right[i] === right[right.length - 1]) {
      row.push(right[i]);
      articles.push(row);
      break;
    }

    // Each row will need 4 articles
    else if (j < 4) {
      row.push(right[i]);
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
        <div className='container-1'>
        <div className="box-7">
          <CardLong
            border="border-danger"
            textColor="text-danger"
            title={right[9].title}
            img={right[9].media}
            excerpt={right[9].summary}
            source={right[9].clean_url}
            link={right[9].link}
          />
        </div>
        <div className="box-8">
          <CardLong
            border="border-danger"
            textColor="text-danger"
            title={right[14].title}
            img={right[14].media}
            excerpt={right[14].summary}
            source={right[14].clean_url}
            link={right[14].link}
          />
        </div>
        <div className="box-9">
          <Card
            border="border-danger"
            textColor="text-danger"
            title={right[4].title}
            img={right[4].media}
            excerpt={right[4].excerpt}
            source={right[4].clean_url}
            link={right[4].link}
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
