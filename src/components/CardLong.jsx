import React from "react";

export default function CardLong(props) {
  return (
    <>
      <div className={`card ${props.border} h-100`}>
        <img
          src={
            `${props.img}`
              ? `${props.img}`
              : `https://designshack.net/wp-content/uploads/placeholder-image.png`
          }
          class="card-img-top"
          alt="..."
        ></img>
        <div className={`card-body ${props.textColor}`}>
          <a
            href={`${props.link}`}
            target="_blank"
            class={`${props.textColor} a-${props.textColor}`}
          >
            <h5 class="card-title">{props.title}</h5>
          </a>
          <p class="card-text">{props.excerpt}</p>
        </div>
        <p class="card-text">
          <small class="text-muted">{props.source}</small>
        </p>
      </div>
    </>
  );
}
