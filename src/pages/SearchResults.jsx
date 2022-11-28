import React from 'react';
import RowLayout from '../components/RowLayout';
import { search_results } from '../components/NavBar';

export default function SearchResults() {
    // Have a list of 4 articles
    // Pass that list to the row layout
    // Then row layout makes as many cards as are in that list of 4 or less

    // 1. Check if last item in array
    // 2. If last item, push to row and break

    const articles = [];
    let i = 0;
    let j = 0;
    let row = [];
    while (i < search_results.length) {
        // Test if last item in the array (In the case that the row is less than 4)
        if (search_results[i] === search_results[search_results.length - 1]) {
            row.push(search_results[i]);
            articles.push(row);
            break;
        }

        // Each row will need 4 articles
        else if (j < 4) {
            row.push(search_results[i]);
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
        {articles.map((item, key)=> 
            <RowLayout row={item} key={key} />
        )}
        </>
  )
}
