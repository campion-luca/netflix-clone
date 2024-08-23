import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./Components/MyNav"
import SearchBar from "./Components/SearchBar";
import "./App.css";
import MyFoot from "./Components/MyFoot";
import FilmList from "./Components/FilmList";


function App() {
  return (
    <>
      <header>
        <MyNav />
        <SearchBar />
      </header>
      <main className="bg-dark">

<h3 className="bg-dark text-light pt-2 ps-3">Trending Now</h3>
<FilmList filmc={"Harry Potter"}/>
<h3 className="bg-dark text-light pt-2 ps-3">Watch it Again</h3>
<FilmList filmc={"Marvel"}/>
<h3 className="bg-dark text-light pt-2 ps-3">New Releases</h3>
<FilmList filmc={"Lord of the Ring"}/>


      </main>
      <footer>
        <MyFoot />
      </footer>
    </>
  );
}

export default App;
