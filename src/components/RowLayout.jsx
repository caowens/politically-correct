import React from "react";
import CardMedium from "./CardMedium";

export default function RowLayout(props) {
  return (
    <>
      <div class="card-group">
        {props.row.map((article, key) => (
          <CardMedium
            border={article.rating.includes('left') ? 'border-primary' : article.rating.includes('right') && 'border-danger'}
            textColor={article.rating.includes('left') ? 'text-primary' : article.rating.includes('right') && 'text-danger'}
            title={article.title}
            key={key}
            img={article.media}
            excerpt={article.excerpt}
            source={article.clean_url}
            link={article.link}
          />
        ))}
      </div>
    </>
  );
}
