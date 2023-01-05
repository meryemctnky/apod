import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/Header';
import Home from './components/Home';
import Loading from './components/Loading';
import NotFound from './components/NotFound';

const url="https://api.nasa.gov/planetary/apod?api_key=x82beFFDnNP9ib1BvIaD7FwbuLYvdZ5RQaZzpIZi";

function App() {
  const [loading, setLoading] = useState(true);
  const[date, setDate] = useState(null);
  const[title, setTitle] = useState("");
  const[copyright, setCopyright] = useState("");
  const[explanation, setExplanantion] = useState("");
  const[img, setImg]= useState("")


  const getResult = async ()=> {
    setLoading(true);
    try {
    const res = await axios.get(url);
    setDate(res.data.date);
    setTitle(res.data.title);
    setCopyright(res.data.copyright);
    setExplanantion(res.data.explanation);
    setImg(res.data.url);
    setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  
  useEffect(() => {
    getResult();
  }, [])

  const data = {date, title, copyright, explanation, img}

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (data.length === 0) {
    return (
      <NotFound />
      );
    }
  

  return (
    <main className='container bg-transparent'>
      <Header date={date}/>
      <Home data={data} />
    </main>
  );
}

export default App;