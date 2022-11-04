import './App.css';
import FoodList from './components/food-list/FoodList';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar, Footer, Loading } from './components/home-login';
import { Home, Profile } from './components/home-login/views';
import AuthNav from './components/home-login/auth-nav';
import './App.css';

const App = () => {
  const { user, isLoading } = useAuth0();
  const [siteUser, setSiteUser] = useState({});
  const [foods, setFoods] = useState([]);
  
  const getFoods = async () => {
  console.log()
   await fetch('http://localhost:8080/api/myFoods')
    .then((res) => res.json())
    .then((res) => {
      setFoods(([ ...res ]));
      console.log('res here!', res);
    });
  }
    // GET request that fetches everything from http://localhost:8080/api/myFoods
  useEffect(() => {
    getFoods();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  console.log('user', user);
  return (
    <div id="app" className="d-flex flex-column h-100">
      {user ? (
        <>
          <NavBar setSiteUser={setSiteUser} />
            <div className="container flex-grow-1">
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/profile" element={<Profile siteUser={siteUser} foods={foods} />} />
              <Route path="/foodList" element={<FoodList siteUser={siteUser} foods={foods} />} />
            </Routes>
          </div>
          <div>
            
          </div>

            <Footer />
          </>
         ) :
          (
          <>
            <div className="container flex-grow-1">
              <AuthNav />
            </div>
        </>
        )
      }
    </div>
  );
};

export default App;
// function App() {
//   return (
//     <div className="App">
//       hiasdf;lkjasdfasdflaksdf';lkaf
//     </div>
//   );
// }

// export default App;
