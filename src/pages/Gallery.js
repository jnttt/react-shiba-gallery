import React from "react";
import { useState, useEffect} from 'react';

export default function Gallery() {
   const [imgs, setImgs] = useState(0);
  const url = "http://shibe.online/api/shibes?count=100"
  
  const getImgs = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setImgs(data)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getImgs()
  }, [])

     return (
     <div>
      <h1>Gallery</h1>
      <img src={imgs[0]} alt="shiba"/>
      <img src={imgs[1]} alt="shiba"/>
      
      {
      const imgArr = imgs.map((img)=> {
         return <img src ={imgs}/>
      });
      
      }
      
      {/* {for (let i = 0, i<imgs.map, i++){
         <img src={imgs[i]} alt="shiba"/>
      }} */}

      </div>
     );
  }