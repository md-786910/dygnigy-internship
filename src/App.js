import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import BlogTitle from "./components/BlogTitle";

import Header from "./components/Header";
import Home from "./components/Home";
import Profile from "./components/Profile";
import UserLoan from "./components/UserLoan";

function App() {
  const loanAllData = (props) => {
    console.log("app", props);
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<UserLoan />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:title" element={<BlogTitle />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={<Profile loanAllData={loanAllData} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
