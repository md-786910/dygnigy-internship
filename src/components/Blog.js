import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [news, setNews] = useState([]);

  const [show, setShow] = useState(true);

  const fetchNews = async () => {
    try {
      const TechName = [
        "jeff bezos",
        "elon musk",
        "sachin tendulkar",
        "mark zuckerberg",
      ];
      const len = TechName.length;
      const randName = Math.floor(Math.random() * len);

      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "free-news.p.rapidapi.com",
          "X-RapidAPI-Key":
            "2feae67a2emsh92d0de018ae315ep15fecajsn4b297966b8de",
        },
      };

      const resp = await fetch(
        `https://free-news.p.rapidapi.com/v1/search?q=${TechName[randName]}&lang=en&page=1&page_size=25`,
        options
      );

      const data = await resp.json();
      const articlesMap = data;

      setShow(false);

      setNews(articlesMap.articles);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="container mt-4">
      {show ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="blog d-flex flex-wrap">
          {news &&
            news.map((elem, index) => {
              return (
                <div
                  className="card m-3"
                  key={index}
                  style={{ width: "18rem" }}
                >
                  <img src={elem.media} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h6 className="card-title">{elem.title}</h6>
                    <p className="card-text">{elem.published_date}</p>
                    <Link
                      to={`/blog/${elem.title}`}
                      state={{ state: elem }}
                      className="btn btn-primary"
                    >
                      read more
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Blog;
