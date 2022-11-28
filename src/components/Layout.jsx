import React from 'react';
import Card from './Card';
import CardLong from './CardLong';

export default function Layout(props) {
  return (
    <>
        <div className='container-1'>
        <div className='box-1'>
        <CardLong
            border={props.articles[1].rating.includes('left') ? 'border-primary' : props.articles[1].rating.includes('right') ? 'border-danger' : props.articles[1].rating.includes('center') && 'border-indigo'}
            textColor={props.articles[1].rating.includes('left') ? 'text-primary' : props.articles[1].rating.includes('right') ? 'text-danger' : props.articles[1].rating.includes('center') && 'text-indigo'}
            title={props.articles[1].title}
            img={props.articles[1].media}
            excerpt={props.articles[1].summary}
            source={props.articles[1].clean_url}
            link={props.articles[1].link}
          />
        </div>
        <div className='box-2'>
        <Card
            title={props.articles[0].title}
            img={props.articles[0].media}
            excerpt={props.articles[0].summary}
            source={props.articles[0].clean_url}
            link={props.articles[0].link}
            border={props.articles[0].rating.includes('left') ? 'border-primary' : props.articles[1].rating.includes('right') ? 'border-danger' : props.articles[1].rating.includes('center') && 'border-indigo'}
            textColor={props.articles[0].rating.includes('left') ? 'text-primary' : props.articles[1].rating.includes('right') ? 'text-danger' : props.articles[1].rating.includes('center') && 'text-indigo'}
          />
        </div>
        <div className='box-3'>
        <CardLong
            border={props.articles[2].rating.includes('left') ? 'border-primary' : props.articles[1].rating.includes('right') ? 'border-danger' : props.articles[1].rating.includes('center') && 'border-indigo'}
            textColor={props.articles[2].rating.includes('left') ? 'text-primary' : props.articles[1].rating.includes('right') ? 'text-danger' : props.articles[1].rating.includes('center') && 'text-indigo'}
            title={props.articles[2].title}
            img={props.articles[2].media}
            excerpt={props.articles[2].summary}
            source={props.articles[2].clean_url}
            link={props.articles[2].link}
          />
        </div>
      </div>
    </>
  )
}
