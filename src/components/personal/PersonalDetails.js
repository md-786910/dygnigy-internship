import React, { useState } from "react";

function PersonalDetails(props) {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    age: "",
    email: "",
    dob: "",
    address: "",
    gender: "",
    religion: "",
  });

  const handleUser = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleReligion = (e) => {
    const val = e.target.value;
    setUser({ ...user, religion: val });
  };
  const handleGender = (e) => {
    const val = e.target.value;
    setUser({ ...user, gender: val });
  };

  // send user

  const sendUser = async () => {
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
      } = user;

      if (
        !firstName ||
        !lastName ||
        !mobileNumber ||
        !age ||
        !email ||
        !dob ||
        !address ||
        !religion ||
        !email ||
        !gender
      ) {
        alert("Please fill all required fields");
      } else {
        // send to profile

        props.personalData(user);
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
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="validationServer01"
              name="firstName"
              value={user.firstName}
              onChange={handleUser}
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
              value={user.lastName}
              onChange={handleUser}
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
              value={user.mobileNumber}
              onChange={handleUser}
              required
              placeholder="7745421474"
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
              value={user.age}
              onChange={handleUser}
              required
              placeholder="eg : 10"
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
              value={user.email}
              onChange={handleUser}
              required
              placeholder="eg : 10"
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
              value={user.dob}
              onChange={handleUser}
              required
              placeholder="eg : 10"
            />
          </div>
          <div className="col-md-3">
            <label for="validationServer05" className="form-label">
              Gender
            </label>

            <select
              class="form-select "
              id="validationServer04"
              aria-describedby="validationServer04Feedback"
              onChange={handleGender}
              value={user.gender}
              required
            >
              <option>choose</option>
              <option value="male" name="male">
                male
              </option>
              <option value="male" name="female">
                female
              </option>
            </select>
          </div>

          <div className="col-md-3">
            <label for="validationServer05" className="form-label">
              Religion
            </label>

            <select
              class="form-select "
              id="validationServer04"
              aria-describedby="validationServer04Feedback"
              value={user.religion}
              onChange={handleReligion}
              required
            >
              <option>choose</option>
              <option value="hindu">hindu</option>
              <option value="muslim">muslim</option>
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
              name="address"
              value={user.address}
              onChange={handleUser}
              required
              placeholder="eg : address 12"
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
              onClick={() => sendUser()}
            >
              Save details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalDetails;
