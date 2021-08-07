import React,{useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsCard from '../NewsCard/Newscard';
import {fetchNews} from '../../actions/newsAction';

export default function NewsContent (){
  // const [newsArray,setNewsArray]=useState([]);
  const apiKey="722205f8f4224157865e7ba4df60df53";
  const [pageSize,setPageSize]=useState(15);
  const state=useSelector(state=>state);
  const newsArray=state.newsItems.newsItems;

  const dispatch=useDispatch();
  
  useEffect(()=>{
    fetchNews(dispatch,pageSize,apiKey)
  },[pageSize]);
  
    return(
    <div>
            { newsArray&&newsArray.length>0 &&
            newsArray.map((newsItem)=>(
              <NewsCard newsItem={newsItem}/>
            ))
    }

    <button class="add-more-news" onClick={()=>setPageSize(pageSize+10)}> Load More News</button>
    </div>
    );
    
}   