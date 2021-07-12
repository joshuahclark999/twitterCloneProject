import React from "react";
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets'
// import SignIn from './components/SignIn';

import "./App.css";

export default function App(){
    return(
        <div className="app">
            {/* <h1>Hello</h1> */}

            {/* Sidebar/Navbar */}
            <Sidebar />
            {/* Main content/input feild/feed */}
            <Feed />
            {/* Explore/Whats Happening etc */}
            <Widgets />
        </div>
    )
}