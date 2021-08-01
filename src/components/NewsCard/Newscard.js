import './newsCard.css';

import React from 'react';

//moment.js, day.js
export default function Newscard({newsItem}){
    const dateOject=new Date(newsItem.publishedAt);
    const date=dateOject.toString().split(" ");
    const newHour=parseInt(date[4].substring(0,2)); 
    const partOfToday=newHour>12?false:true;
    const day=`${date[2]} ${date[1]} ${date[3]}`
    return(<div className="news-card">
        <img src={newsItem.urlToImage} height={100} width={100} className="news-image"/>
        <div>
        <h3>{newsItem.title}</h3>
         <p>{newsItem.content}</p>
         <p>{newsItem.desciption}</p>
         <p>{newsItem.source.name}</p>
         <p>{partOfToday?newHour-12<0?date[4]+ ' am' +" " +day:date[4]+ ' pm' +" "+ day:day}</p>
         <span>
             <a href={newsItem.url}  className="read-more">Read More</a>
         </span>
         </div>
    </div>);
}