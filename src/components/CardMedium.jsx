import React from "react";

export default function CardMedium(props) {
  return (
    <>
      <div class={`card ${props.border} ${props.textColor}`}>
        <div class="placeholder">
          <img
            src={
              `${props.img}`
                ? `${props.img}`
                : `https://designshack.net/wp-content/uploads/placeholder-image.png`
            }
            class="card-img-top"
            alt="..."
          ></img>
        </div>
        <div class="card-body">
          <a
            href={`${props.link}`}
            target="_blank"
            class={`${props.textColor} a-${props.textColor}`}
          >
            <h5 class="card-title">{props.title}</h5>
          </a>
          <p class="card-text">{props.excerpt}</p>
          <p class="card-text">
            <small class="text-muted">{props.source}</small>
          </p>
        </div>
      </div>
    </>
  );
}
