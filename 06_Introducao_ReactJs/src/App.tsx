import { useState } from "react"
import { Tweet } from "./Tweet"
import './App.css';
import { AppRoutes } from "./Routes";

function App() {
 /* const [tweets, setTweets] =useState<string[]>([
    'Tweet 1',
    'Tweet 2',
    'Tweet 3',
    'Tweet 3'
  ])

  function creatTweet(){
    setTweets([...tweets,'Tweet5'])
  }*/

 return(
   <AppRoutes />
 /*<div>
  {tweets.map(tweet =>{
      return <Tweet text={tweet} />
    }
    )
  }

   <button onClick={creatTweet} style={
     {
       backgroundColor:'#8257e6',
       border:0,
     }
   }> 

   adicionar 
   
   </button>
 </div> */
    );
}

export default App
