import React from "react";
import CardMedium from "./CardMedium";

export default function RowLayout(props) {
  return (
    <>
      <div class="card-group row row-cols-1 row-cols-md-4 g-4">
        {props.row.map((article, key) => (
          <CardMedium
            border={article.rating.includes('left') ? 'border-primary' : article.rating.includes('right') ? 'border-danger' : article.rating.includes('center') && 'border-indigo'}
            textColor={article.rating.includes('left') ? 'text-primary' : article.rating.includes('right') ? 'text-danger' : article.rating.includes('center') && 'text-indigo'}
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
