import React from "react";
import '../App.css';

export default function Card(props) {
  return (
    <>
      <div className={`card mb-3 ${props.border} h-100`}>
        <div class={`card-body ${props.textColor}`}>
          <img
            src={`${props.img}` ? `${props.img}` : `https://designshack.net/wp-content/uploads/placeholder-image.png`}
            class="card-img-top"
            alt="..."
          ></img>
          <a href={`${props.link}`} target="_blank" class={`${props.textColor} a-${props.textColor}`}>
            <h5 class="card-title">{props.title}</h5>
          </a>
          <p class={`card-text ${props.textColor}`}>
            {props.excerpt}
          </p>
          <p class="card-text">
            <small class="text-muted">{props.source}</small>
          </p>
        </div>
      </div>
    </>
  );
}
