import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import Feed from '../FeedPage/feed';
import Favorites from '../FavoritesPage/favorites';
import Library from '../LibraryPage/library';
import Player from '../PlayerPage/player';
import Trending from '../TrendingPage/trending';
import SpotifyLogin from '../SpotifyLoginPage/SpotifyLoginPage';
import { setClientToken } from '../../spotify';
export default function App() {
  const [user, setUser] = useState(getUser());
  const [token2, setToken2] = useState("");
  useEffect(() => {
    const token2 = window.localStorage.getItem("token2");
    const hash = window.location.hash;
    window.location.hash = "";
    if(!token2 && hash){
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token2", _token);
      setToken2(_token)
      setClientToken(_token)
    } else {
      setToken2(token2);
      setClientToken(token2)
    }
  }, []);
  return (
      !token2 ? (<SpotifyLogin />
      ):
    <main className="App">
      { user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/" element={<Library />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/player" element={<Player />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}
