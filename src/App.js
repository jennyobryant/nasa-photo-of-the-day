import React, { useState } from "react";
import axios from "axios"; 
import Picture from "./components/Picture.js"; 
import Explanation from "./components/Explanation.js"; 
import "./App.scss";

let exampleResponse = {
  data: {
    "date": "2019-08-28",
    "explanation": "Image data from the Hubble Space Telescope, the European Southern Observatory, and small telescopes on planet Earth are combined in this magnificent portrait of face-on spiral galaxy Messier 61 (M61). A mere 55 million light-years away in the Virgo Cluster of Galaxies, M61 is also known as NGC 4303. It's considered to be an example of a barred spiral galaxy similar to our own Milky Way. Like other spiral galaxies, M61 also features sweeping spiral arms, cosmic dust lanes, pinkish star forming regions, and young blue star clusters. The bright galactic core is offset to the left in this 50 thousand light-year wide close-up.",
    "hdurl": "https://apod.nasa.gov/apod/image/1908/M61-HST-ESO-L.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Messier 61 Close Up",
    "url": "https://apod.nasa.gov/apod/image/1908/M61-HST-ESO-S1024.jpg"
  }
};


function App() {
  const [data, setData] = useState({}); 
  //const [explanation, setExplanation] = useState(""); 
 // const [url, setUrl] = useState(""); 
  //console.log("top")

  //console.log("data: ", Object.hasOwnProperty(data, 'url'), data);
  if (!data.hasOwnProperty('url')) {   
   // axios.get("https://api.nasa.gov/planetary/apod?api_key=Uja8W9uLSf30BLKoimN4IB6CyLSJvDgA2Mctwflm")
    //axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    axios.get("/") //testing 
    .then(res => {
      res = exampleResponse;//testing
      console.log("axios ran"); 
      setData(res.data); 

      //setExplanation(res.data.explanation); 
    }); 
  }
  //console.log("buttom"); 

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Picture title = {data.title}
                url = {data.url} />
      <Explanation explanation = {data.explanation} />
    </div>
  );
}

export default App;
