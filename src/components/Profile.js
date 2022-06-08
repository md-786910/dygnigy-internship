import React, { useState } from "react";
import BusinessDetails from "./personal/BusinessDetails";
import LoanDetails from "./personal/LoanDetails";
import PersonalDetails from "./personal/PersonalDetails";

function Profile(props) {
  const [loan, setLoan] = useState([]);
  const [count, setCount] = useState(0);

  const personalData = (props) => {
    setLoan({ ...loan, personal: props });
    setCount(count + 1);
  };

  const businessData = (props) => {
    setLoan({ ...loan, business: props });
    setCount(count + 1);
  };

  const loanData = (props) => {
    setLoan({ ...loan, loan: props });
    setCount(count + 1);
  };

  const sendLoanData = async () => {
    try {
      const {
        firstName,
        lastName,
        mobileNumber,
        age,
        email,
        dob,
        address,
        gender,
        religion,
      } = loan.personal;

      const { Bname, Bstatus, BphoneNumber, Bemail, Baddress, Gstno } =
        loan.business;

      const { amount, rate, tenure } = loan.loan;

      // send to server

      const resp = await fetch("/loan_details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          mobileNumber: mobileNumber,
          age: age,
          email: email,
          dob: dob,
          address: address,
          gender: gender,
          religion: religion,
          Bname: Bname,
          BphoneNumber: BphoneNumber,
          Bemail: Bemail,
          Bstatus: Bstatus,
          Baddress: Baddress,
          Gstno: Gstno,
          amount: amount,
          rate: rate,
          tenure: tenure,
        }),
      });

      const data = await resp.json();
      console.log(data);
      console.log(resp);
      if (resp.status === 200) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="profile shadow-sm p-4">
          <div className="profile d-flex justify-content-between ">
            <h1>Profile 🧾</h1>
            {loan !== undefined && count === 3 ? (
              <button
                className="btn btn-primary"
                onClick={() => sendLoanData()}
              >
                submit details
              </button>
            ) : (
              <button disabled className="btn btn-primary">
                submit details
              </button>
            )}
          </div>
          <nav className="mt-4">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Personal details
              </button>
              <button
                class="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Business details
              </button>
              <button
                class="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Loan Application details
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              <PersonalDetails personalData={personalData} />
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <BusinessDetails businessData={businessData} />
            </div>
            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabindex="0"
            >
              <LoanDetails loanData={loanData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
