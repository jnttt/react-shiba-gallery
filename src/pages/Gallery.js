import React from "react";
import { useState, useEffect} from 'react';

export default function Gallery() {
   const [imgs, setImgs] = useState([]);
  const url = "https://shibe.online/api/shibes?count=100"

  const getImgs = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setImgs(data)
      console.log(data)
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
      <div className="imgsDiv">
      {imgs.map((img,index)=> ( <img src ={img} className="images" alt = "shiba" key={index}/>))};
      </div>
      
      {/* <img src={imgs} alt="shiba"/> */}

      </div>
      )}
