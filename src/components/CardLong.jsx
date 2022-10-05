import React from "react";

export default function CardLong(props) {
  return (
    <>
      <div className={`card ${props.border}`}>
        <img src="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=" class="card-img-top" alt="..."></img>
        <div className={`card-body ${props.text}`}>
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Info</li>
          <li class="list-group-item">More info</li>
          <li class="list-group-item">More info</li>
        </ul>
      </div>
    </>
  );
}
