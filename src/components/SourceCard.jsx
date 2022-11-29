import React from "react";

export default function SourceCard(props) {
  return (
    <>
      <div className={`card ${props.border}`}>
        <div class="card-body">
          <h5 class="card-title">{props.screen_name}</h5>
          <a href={props.clean_url} target="_blank" class="card-link">
            {props.clean_url}
          </a>
          <a href={props.all_sides_url} target="_blank" class="card-link">
            Allsides
          </a>
        </div>
      </div>
    </>
  );
}
