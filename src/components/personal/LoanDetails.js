import React, { useState } from "react";

function LoanDetails(props) {
  const [loan, setLoan] = useState({
    amount: "",
    rate: "",
    tenure: "",
  });

  const handleBUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoan({ ...loan, [name]: value });
  };

  // send user

  const sendBUser = async () => {
    try {
      const { amount, rate, tenure } = loan;

      if (!amount || !rate || !tenure) {
        alert("Please fill all required fields");
      } else {
        // send to profile

        props.loanData(loan);
        alert("successfull saved data");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container  mt-4">
      <div className="personal">
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
              value={loan.amount}
              onChange={handleBUser}
              required
            />
          </div>

          <div className="col-md-6">
            <label for="validationServer03" className="form-label">
              Interest Rate
            </label>
            <input
              type="number"
              className="form-control "
              id="validationServer03"
              aria-describedby="validationServer03Feedback"
              name="rate"
              value={loan.rate}
              onChange={handleBUser}
              placeholder="ex-10%"
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
              value={loan.tenure}
              onChange={handleBUser}
              required
            />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input "
                type="checkbox"
                value=""
                id="invalidCheck3"
                aria-describedby="invalidCheck3Feedback"
                required
              />
              <label className="form-check-label" for="invalidCheck3">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="col-12">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => sendBUser()}
            >
              Save Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoanDetails;
