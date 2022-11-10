import './App.css';
import FoodList from './components/food-list/FoodList';
import React, {useEffect, useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { NavBar, Footer, Loading } from './components/home-login';
import { Home, Profile } from './components/home-login/views';
import Collections from './components/recipes-collections/Collections';
import NewRecipeForm from './components/recipes-collections/NewRecipeForm';

import AuthNav from './components/home-login/auth-nav';
import './App.css';

const App = () => {
  const { user, isLoading, isAuthenticated } = useAuth0();
  const [siteUser, setSiteUser] = useState({});
  const [foodView, setFoodView] = useState("");

  useEffect(() => {
    setSiteUser(user);
    console.log('isUserAuthenticated? ', isAuthenticated);

  }, [user, isAuthenticated]);

  if (isLoading) {
    return <Loading />;
  }

  console.log('user', user);
  console.log('siteUser', siteUser);
  return (
    <div id="app" className="d-flex flex-column h-100 app">
      {user ? (
        // What user sees if they're logged in
        <>
          <h1 className="logo">priorityHealth</h1>
          <NavBar setFoodView={setFoodView} />
            <div className="container flex-grow-1">
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/profile" element={<Profile siteUser={siteUser} />} />
              <Route path="/recipes" element={<Collections siteUser={siteUser} />} />
              <Route path="/food-list" element={<FoodList siteUser={siteUser} foodView={foodView} setFoodView={setFoodView} />} />
              <Route path="/add-new-recipe" element={<NewRecipeForm siteUser={siteUser} />} />
            </Routes>
          </div>
          <div>
            
          </div>

            <Footer />
          </>
         ) :
        (
          // Log in page
          <>
            <div className="container flex-grow-1 log-in-div">
              <h1>priorityHealth</h1>
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
