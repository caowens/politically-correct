import React from "react";
import CardMedium from "./CardMedium";

export default function RowLayout(props) {
  return (
    <>
      <div class="card-group">
        {props.row.map((article, key) => (
          <CardMedium
            border={props.border}
            textColor={props.textColor}
            title={article.title}
            key={key}
            img={article.media}
            excerpt={article.excerpt}
            source={article.clean_url}
          />
        ))}
      </div>
    </>
  );
}
