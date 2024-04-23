import React from "react"
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
      <>
        <h1 className="text-2xl text-red-500">Home Page</h1>
        <Link to='/signin'>Sign In</Link>
      </>
    );
}

export default Home