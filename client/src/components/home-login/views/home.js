import React, { Fragment } from "react";

const Home = ({user}) => (
  <Fragment>
  <div className="text-center hero">
      {user ? (
        <h1>Welcome, {user.given_name}!</h1>
      ) :
        (
          <h1>USER IS NOT SIGNED IN</h1>
  )}
      {/* <HomeContent /> */}
  </div>
  </Fragment>
);

export default Home;
