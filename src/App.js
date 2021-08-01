import './App.css';

import React,{useEffect, useState} from 'react';

import NewsContent from './components/NewsContent/NewsContent';
import axios from 'axios';

function App() {
  const [newsArray,setNewsArray]=useState([]);
  const apiKey="722205f8f4224157865e7ba4df60df53";
  const [pageSize,setPageSize]=useState(15);

  const fetchNewsApi=async()=>{
    const latestNews=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${pageSize}`);
    setNewsArray(latestNews.data.articles);
  }
  
  useEffect(()=>{
    fetchNewsApi();
  },[pageSize]);
  
  return (
    <div className="App">
      <NewsContent pageSize={pageSize} setPageSize={setPageSize} newsArray={newsArray}/>
    </div>
  );
}

export default App;
