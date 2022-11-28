import React from 'react';
import SourceCard from './SourceCard';

export default function SourcesRow(props) {
  return (
    <>
    <div class="card-group row row-cols-1 row-cols-md-4 g-4">
        {props.row.map((source, key) => (
          <SourceCard
            border={source.rating.includes('left') ? 'border-primary' : source.rating.includes('right') ? 'border-danger' : source.rating.includes('center') && 'border-indigo'}
            textColor={source.rating.includes('left') ? 'text-primary' : source.rating.includes('right') ? 'text-danger' : source.rating.includes('center') && 'text-indigo'}
            screen_name={source.screen_name ? source.screen_name : source.source }
            all_sides_url={source.all_sides_url}
            clean_url={source.clean_url}
            key={key}
          />
        ))}
      </div>
    </>
  )
}
