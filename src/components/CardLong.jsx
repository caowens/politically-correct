import React from "react";

export default function CardLong(props) {
  return (
    <>
      <div className={`card ${props.border}`}>
        <img
          src={`${props.img}` ? `${props.img}` : `https://designshack.net/wp-content/uploads/placeholder-image.png`}
          class="card-img-top"
          alt="..."
        ></img>
        <div className={`card-body ${props.textColor}`}>
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.excerpt}</p>
        </div>
        <p class="card-text">
            <small class="text-muted">{props.source}</small>
        </p>
        {/* <ul class="list-group list-group-flush">
          <li class="list-group-item">Info</li>
          <li class="list-group-item">More info</li>
          <li class="list-group-item">More info</li>
        </ul> */}
      </div>
    </>
  );
}
