import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { combined_articles } from "../App";

// search button filtering
export const search_results = [];

function filterBySearch() {
  var input, filter;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  console.log(`Search: ${filter}`);
  for (let i = 0; i < combined_articles.length; i++) {
    if (
      (combined_articles[i].title && combined_articles[i].title.toUpperCase().includes(filter)) ||
      (combined_articles[i].excerpt && combined_articles[i].excerpt.toUpperCase().includes(filter)) ||
      (combined_articles[i].summary && combined_articles[i].summary.toUpperCase().includes(filter)) ||
      (combined_articles[i].souce && combined_articles[i].source.toUpperCase().includes(filter))
    ) {
        search_results.push(combined_articles[i]);
    }
  }
  console.log("Search results:");
  console.log(search_results);
}
export default function NavBar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Politically Correct
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/sources">
                  Sources
                </a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="search-input"
              ></input>
              <Link to="search">
                <button
                  class="btn btn-outline-dark "
                  type="submit"
                  onClick={filterBySearch}
                >
                  Search
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
