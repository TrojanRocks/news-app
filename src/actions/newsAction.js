import {NEWS_API_FETCH} from './actionType';
import axios from 'axios';

const fetchNewsApi=async(pageSize,apiKey,dispatch)=>{
    const latestNews=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${pageSize}`);
    dispatch({
        type:NEWS_API_FETCH,
        news:latestNews.data.articles
    });
}

export const fetchNews=(dispatch,pageSize,apiKey)=>{
  fetchNewsApi(pageSize,apiKey,dispatch);  
}