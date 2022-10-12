import React from "react";

export default function Card(props) {
  return (
    <>
      <div className={`card mb-3 ${props.border}`}>
        <div class={`card-body ${props.text}`}>
          <img src="https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA=" class="card-img-top" alt="..."></img>
          <a href="#"><h5 class="card-title">Card title</h5></a>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
        </div>
      </div>
    </>
  );
}
