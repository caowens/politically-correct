import React from 'react';
import { combined_articles } from '../App';
import SourceCard from '../components/SourceCard';
import SourcesRow from '../components/SourcesRow';

export default function Sources() {
    // Have a list of 4 articles
    // Pass that list to the row layout
    // Then row layout makes as many cards as are in that list of 4 or less

    // 1. Check if last item in array
    // 2. If last item, push to row and break

    const articles = [];
    let i = 0;
    let j = 0;
    let row = [];
    while (i < combined_articles.length) {
        // Test if last item in the array (In the case that the row is less than 4)
        if (combined_articles[i] === combined_articles[combined_articles.length - 1]) {
            row.push(combined_articles[i]);
            articles.push(row);
            break;
        }

        // Each row will need 4 articles
        else if (j < 4) {
            row.push(combined_articles[i]);
            j++;
        }
        else {
            j = 0;
            articles.push(row);
            row = [];
        }
        i++;
    }
  return (
    <>
    <h1>Sources</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptate accusamus illo voluptatem eveniet modi numquam doloremque consectetur omnis veritatis unde commodi nostrum harum illum, reprehenderit iure officiis. Illum, fugit?</p>
    <hr></hr>
    {articles.map((item, key)=> 
            <SourcesRow row={item} key={key} />
        )}
    {/* <SourceCard /> */}
    </>
  );
}
