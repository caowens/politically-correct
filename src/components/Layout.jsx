import React from 'react';
import Card from './Card';
import CardLong from './CardLong';
import props from "../data/news.json";

export default function Layout(props) {
  return (
    <>
        <div className='container-1'>
        <div className='box-1'>
        <CardLong
            border="border-primary"
            textColor="text-primary"
            title={props.articles[1].title}
            img={props.articles[1].media}
            excerpt={props.articles[1].summary}
            source={props.articles[1].clean_url}
          />
        </div>
        <div className='box-2'>
        <Card
            title={props.articles[0].title}
            img={props.articles[0].media}
            excerpt={props.articles[0].excerpt}
            source={props.articles[0].clean_url}
            link={props.articles[0].link}
          />
        </div>
        <div className='box-3'>
        <CardLong
            border="border-danger"
            textColor="text-danger"
            title={props.articles[2].title}
            img={props.articles[2].media}
            excerpt={props.articles[2].summary}
            source={props.articles[2].clean_url}
          />
        </div>
      </div>
    </>
  )
}
