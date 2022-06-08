import React, { useState, useEffect } from "react";
import Avatar from "react-avatar";
import { useLocation } from "react-router-dom";

function UserLoan() {
  const [loan, setLoan] = useState([]);
  const [show, setShow] = useState(true);

  const location = useLocation();

  const id = location.pathname.slice(1);

  const fetchUserData = async () => {
    try {
      const resp = await fetch("https://server-app-make.herokuapp.com/fetchById", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      });

      const data = await resp.json();

      setLoan(data.data);
      if (resp.status !== 200) {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="container mt-4">
        {loan ? (
          ""
        ) : (
          <div className="spinner">
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        )}

        <div className="userImg">
          <Avatar name="md ashif" round={true} size="100" />
        </div>

        <div className="containerUser p-4 col mt-4   shadow-lg">
          <div className="user   border border-1 p-2">
            <fieldset>
              <legend>Personal details</legend>
              <form className="row g-3">
                <div className="col-md-4">
                  <label for="validationServer01" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationServer01"
                    name="firstName"
                    value={loan.firstName}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label for="validationServer02" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="validationServer02"
                    name="lastName"
                    value={loan.lastName}
                    required
                  />
                </div>

                <div className="col-md-3">
                  <label for="validationServer05" className="form-label">
                    Mobile No
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    name="mobileNumber"
                    required
                    value={loan.mobileNumber}
                    maxLength={10}
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationServer05" className="form-label">
                    Age
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    name="age"
                    required
                    value={loan.age}
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationServer05" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    name="email"
                    required
                    value={loan.email}
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationServer05" className="form-label">
                    Dob
                  </label>
                  <input
                    type="date"
                    className="form-control "
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    name="dob"
                    required
                    value={loan.dob}
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationServer05" className="form-label">
                    Gender
                  </label>

                  <input
                    type="text"
                    className="form-control "
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    name="gender"
                    value={loan.gender}
                    required
                  />
                </div>

                <div className="col-md-3">
                  <label for="validationServer05" className="form-label">
                    Religion
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    name="religion"
                    value={loan.religion}
                    required
                  />
                </div>

                <div className="col-md-3">
                  <label for="validationServer05" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    name="address"
                    value={loan.address}
                    required
                    placeholder="eg : address 12"
                  />
                </div>
              </form>
            </fieldset>
          </div>

          {/* business */}
          <div className="businessData mt-4  border border-1 p-2 ">
            <fieldset>
              <legend>Business Details</legend>
              <form className="row g-3">
                <div className="col-md-4">
                  <label for="validationServer01" className="form-label">
                    Business Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationServer01"
                    name="Bname"
                    value={loan.Bname}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label for="validationServer01" className="form-label">
                    Business Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationServer01"
                    name="Bemail"
                    value={loan.Bemail}
                    required
                  />
                </div>

                <div className="col-md-6">
                  <label for="validationServer03" className="form-label">
                    Company Status
                  </label>

                  <input
                    type="text"
                    className="form-control "
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    name="Baddress"
                    value={loan.Bstatus}
                  />
                </div>

                <div className="col-md-3">
                  <label for="validationServer05" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    name="Baddress"
                    value={loan.Baddress}
                  />
                </div>

                <div className="col-md-3">
                  <label for="validationServer05" className="form-label">
                    Phone No
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    name="BphoneNumber"
                    value={loan.BphoneNumber}
                    maxLength={10}
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationServer05" className="form-label">
                    GST No
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="validationServer05"
                    aria-describedby="validationServer05Feedback"
                    name="Gstno"
                    required
                    value={loan.Gstno}
                  />
                </div>
              </form>
            </fieldset>
          </div>

          {/* loan */}

          <div className="loan mt-4 border border-1 p-2">
            <fieldset>
              <legend>Loan Details</legend>

              <form className="row g-3">
                <div className="col-md-4">
                  <label for="validationServer01" className="form-label">
                    Loan Amount
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="validationServer01"
                    name="amount"
                    required
                    value={loan.amount}
                  />
                </div>

                <div className="col-md-6">
                  <label for="validationServer03" className="form-label">
                    Interest Rate %
                  </label>
                  <input
                    type="number"
                    className="form-control "
                    id="validationServer03"
                    aria-describedby="validationServer03Feedback"
                    name="rate"
                    value={loan.rate}
                  />
                </div>
                <div className="col-md-3">
                  <label for="validationServer04" className="form-label">
                    Loan Tenure
                  </label>
                  <input
                    type="text"
                    className="form-control "
                    id="validationServer03"
                    aria-describedby="validationServer03Feedback"
                    name="tenure"
                    required
                    value={loan.tenure}
                  />
                </div>
              </form>
            </fieldset>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserLoan;
