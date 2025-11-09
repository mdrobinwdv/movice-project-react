import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './assets/Navbar';
import Recomanded from './assets/Recomanded';
import Featchdata from './assets/Featchdata';
import Footer from './assets/Footer';
import Imageslider from './assets/Imageslider';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("/Movies.json")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []);

  const categoris = ["All", ...new Set(user.map((m) => m.category))];
  const [selectcategory, setselectcategory] = useState("All");
  const filtermovie = selectcategory === "All"
    ? user
    : user.filter((m) => m.category === selectcategory);

  const [showall, setShowall] = useState(false);
  const visiblemovie = showall ? filtermovie : filtermovie.slice(0, 8);

  return (
    <>
      <div>
        <Navbar />
        <Imageslider />

        <div className="w-full flex flex-col justify-center items-start gap-8 px-12 py-8 bg-black">
          <h1 className="text-3xl uppercase text-white">Recommended for you</h1>
          <Recomanded
            categoris={categoris}
            selectcategory={selectcategory}
            setselectcategory={setselectcategory}
          />
        </div>

        <div className="grid grid-cols-4 p-5 gap-12 bg-black">
          {visiblemovie.map((movie) => (
            <Featchdata key={movie.id} data={movie} />
          ))}
        </div>

        <div className="flex justify-center my-4">
          <button
            onClick={() => setShowall(!showall)}
            className="px-4 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-600"
          >
            {showall ? "Show Less" : "Show All"}
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;