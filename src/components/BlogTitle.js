import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function BlogTitle() {
  const [news, setNews] = useState([]);
  const { state } = useLocation();

  useEffect(() => {
    setNews(state.state);
  }, []);

  console.log(news);
  return (
    <div className="container mt-4 shadow-lg p-4">
      <div className="title">
        <h3>{news.title}</h3>
      </div>

      <div className="content p-4">
        <img width=" 600px" className=" rounded" src={news.media} alt="" />

        <div className="desc fs-5 mt-4">
          <p>{news.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogTitle;
