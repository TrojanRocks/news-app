import NewsCard from '../NewsCard/Newscard';
import React from 'react';

export default function NewsContent ({pageSize,setPageSize,newsArray}){
    return(
    <div>
            { 
            newsArray.map((newsItem)=>(
              <NewsCard newsItem={newsItem}/>
            ))
    }

    <button class="add-more-news" onClick={()=>setPageSize(pageSize+10)}> Load More News</button>
    </div>
    );
    
}   