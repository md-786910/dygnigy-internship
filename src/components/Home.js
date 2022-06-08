import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Avatar from "react-avatar";

function Home(props) {
  const [userData, setUserData] = useState([]);
  const [len, setLen] = useState([]);
  const navigate = useNavigate();

  const fetchLoanData = async () => {
    const resp = await fetch("https://server-app-make.herokuapp.com/loan", {
      method: "GET",
    });

    const data = await resp.json();

    setUserData(data.message);
    setLen(data.message);
    if (resp.status === 200) {
      // nothing do
    } else {
      alert(data.message);
    }
  };

  useEffect(() => {
    fetchLoanData();
  }, []);

  console.log(len);

  return (
    <div className="container mt-5 ">
      {/* jumbotron */}
      <div className="jombo shadow-sm p-4 mt-4 rounded-sm">
        <div className="jumbotron">
          <h1>Loan Application Form</h1>
          <p>
            to obtain, to get money on a temporary basis, for example from a
            bank. idiom. to take out a library book to borrow a book from a
            lending library
          </p>
        </div>

        <div className="btn">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/profile")}
          >
            Proceed Application
          </button>
        </div>
      </div>

      <div className="container mt-4 d-flex justify-content-center flex-wrap">
        {userData &&
          userData.map((elem, index) => {
            return (
              <div
                key={index}
                className="card m-4 p-2"
                style={{ width: "16rem" }}
              >
                <div className="avatar mx-auto">
                  <Avatar name={elem.firstName} size="100" round={true} />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {elem.firstName} &nbsp; {elem.lastName}
                  </h5>
                  <p className="card-text">{elem.email}</p>
                  <Link
                    to={`/${elem._id}`}
                    type="button"
                    className="btn btn-primary"
                  >
                    see details
                  </Link>
                </div>
              </div>
            );
          })}

        {len ? "" : <h1>Empty</h1>}
      </div>
    </div>
  );
}

export default Home;
