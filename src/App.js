import './App.css';
import Home from './pages/home/Home.tsx'
import Login from './pages/login/login.tsx'
import MovieDetail from './pages/movie-detail/MovieDetail.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
