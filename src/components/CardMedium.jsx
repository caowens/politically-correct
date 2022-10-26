import React from "react";

export default function CardMedium(props) {
  return (
    <>
      <div class={`card ${props.border} ${props.textColor}`}>
        <img
          src={`${props.img}`}
          class="card-img-top"
          alt="..."
        ></img>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
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
