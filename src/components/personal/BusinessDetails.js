import React, { useState } from "react";

function BusinessDetails(props) {
  const [user, setUser] = useState({
    Bname: "",
    BphoneNumber: "",
    Bemail: "",
    Baddress: "",
    Bstatus: "",
    Gstno: "",
  });

  const handleBUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleStatus = (e) => {
    const val = e.target.value;

    setUser({ ...user, status: val });
  };

  // send user

  const sendBUser = async () => {
    try {
      const { Bname, Bstatus, BphoneNumber, Bemail, Baddress, Gstno } = user;

      if (!Bname || !BphoneNumber || !Bemail || !Baddress || !Gstno) {
        alert("Please fill all required fields");
      } else {
        // send to profile

        props.businessData(user);

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
              Business Name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationServer01"
              name="Bname"
              value={user.Bname}
              onChange={handleBUser}
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
              value={user.Bemail}
              onChange={handleBUser}
              required
            />
          </div>

          <div className="col-md-6">
            <label for="validationServer03" className="form-label">
              Company Status
            </label>
            <select
              class="form-select "
              id="validationServer04"
              aria-describedby="validationServer04Feedback"
              onChange={handleStatus}
              required
            >
              <option value="">Choose</option>

              <option value="active">Active</option>
              <option value="closed">Closed</option>
            </select>
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
              value={user.Baddress}
              onChange={handleBUser}
              required
              placeholder="7745421474"
              maxLength={10}
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
              value={user.BphoneNumber}
              onChange={handleBUser}
              required
              placeholder="7745421474"
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
              value={user.Gstno}
              onChange={handleBUser}
              required
              placeholder="77454214742323"
              maxLength={10}
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
              <div id="invalidCheck3Feedback" className="invalid-feedback">
                You must agree before submitting.
              </div>
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

export default BusinessDetails;
