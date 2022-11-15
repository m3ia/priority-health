import "./App.css";
import FoodList from "./components/food-list/FoodList";
import React, {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import {NavBar, Footer, Loading} from "./components/home-login";
import {Home, Profile} from "./components/home-login/views";
import Collections from "./components/recipes-collections/Collections";
import NewRecipeForm from "./components/recipes-collections/NewRecipeForm";
import SingleRecipeView from "./components/recipes-collections/SingleRecipeView";

import AuthNav from "./components/home-login/auth-nav";
import "./App.css";

const App = () => {
  const {user, isLoading, isAuthenticated} = useAuth0();
  const [siteUser, setSiteUser] = useState({userId: 3});

  // const getUser = async (siteUser) => {
  //   // setSiteUser(prev => ({ ...prev, ...user }))
  //   await fetch("/api/me")
  //     .then((res) => res.json())
  //     .then((res) => setSiteUser((prev) => ({...prev, userId: res.id})));
  // };
  const [foodView, setFoodView] = useState("");

  useEffect(() => {
    setSiteUser(prev => ({...prev, ...user}));
    console.log("isUserAuthenticated? ", isAuthenticated);
    console.log('siteUser: ', siteUser);
  }, [user, isAuthenticated]);

  // useEffect(() => {
  //   console.log('siteuser l;akdsjfl;akjsdf;lasjkf', siteUser)
  //   getUser();
  // }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  // console.log("siteUser", siteUser.userId);
  return (
    <div id="app" className="d-flex flex-column h-100 app">
      {!user ? (
                // Log in page
        <>
          <div className="container flex-grow-1 log-in-div">
            <h1>priorityHealth</h1>
            <AuthNav />
          </div>
        </>
      ) : (
// What user sees if they're logged in
        <>
          <header>
          <div className="app-header">
            <h1 className="logo">priorityHealth</h1>
            <NavBar setFoodView={setFoodView} />
            </div>
            </header>
          <div className="container flex-grow-1">
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route
                path="/profile"
                element={<Profile siteUser={siteUser} />}
              />
              <Route
                path="/recipes"
                element={<Collections siteUser={siteUser} />}
              />
              <Route
                path="/food-list"
                element={
                  <FoodList
                    siteUser={siteUser}
                    foodView={foodView}
                    setFoodView={setFoodView}
                  />
                }
              />
              <Route
                path="/add-new-recipe"
                element={<NewRecipeForm siteUser={siteUser} />}
              />
              <Route
                path="/recipe/:recipeId"
                element={<SingleRecipeView siteUser={siteUser} />}
              />
            </Routes>
          </div>

          <Footer />
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
