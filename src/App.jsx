import {useEffect, useState } from 'react';
import './App.css'
import Navbar from './assets/Navbar'
import Recomanded from './assets/Recomanded';
import Featchdata from './assets/Featchdata';




function App() {
  const [user , setUser] = useState([]);
  useEffect(() => {
  fetch("/Movies.json").then(res => res.json()).then(data => setUser(data))

}, []);

  return (
    <>
      <div>
        <Navbar/>
        <Recomanded/>
        <div className=" grid grid-cols-4 p-5 gap-10 bg-black ">
          {
            user.map((movie) => (
            <Featchdata 
            key={movie.id}
            data = {movie}>
            </Featchdata>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
