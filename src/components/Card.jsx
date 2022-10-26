import React from "react";

export default function Card(props) {
  return (
    <>
      <div className={`card mb-3 ${props.border}`}>
        <div class={`card-body ${props.textColor}`}>
          <img
            src={`${props.img}`}
            class="card-img-top"
            alt="..."
          ></img>
          <a href={`${props.link}`} target="_blank" class={`${props.textColor}`}>
            <h5 class="card-title">{props.title}</h5>
          </a>
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
