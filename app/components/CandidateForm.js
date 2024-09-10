"use client";
import React, { useEffect, useState } from "react";
import Validation from "./Validation";

function SignUpForm({ SubmitButton }) {
  const [values, setValues] = useState({
    candidateName: "",
    candidateID: "",
    candidateClass: "",
    email: "",
    contactNumber: ""
  });

  const [errors, setErrors] = useState({});

  const [data, setData] = useState();

  useEffect(() => {
    if (Object.keys(errors).length === 0 && data) {
      SubmitButton(true);
    }
  }, [errors]);

  const handleOnClick = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
    setData(true);
  };

  const handleOnChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form autoComplete="off" className="form">
        <h3 className="h3">Candidate form</h3>

        <label htmlFor="candidateName" className="label">
          Candidate Name
        </label>
        <input
          value={values.candidateName}
          onChange={handleOnChange}
          type="text"
          className="input"
          placeholder="Enter Candidate Name"
          name="candidateName"
        />
        {errors.candidateName && <p className="p">{errors.candidateName}</p>}

        <label htmlFor="candidateID" className="label">
          Candidate ID
        </label>
        <input
          value={values.candidateID}
          onChange={handleOnChange}
          type="text"
          className="input"
          placeholder="Enter Candidate ID"
          name="candidateID"
        />
        {errors.candidateID && <p className="p">{errors.candidateID}</p>}

        <label htmlFor="candidateClass" className="label">
          Class
        </label>
        <input
          value={values.candidateClass}
          onChange={handleOnChange}
          type="text"
          className="input"
          placeholder="Enter Class"
          name="candidateClass"
        />
        {errors.candidateClass && <p className="p">{errors.candidateClass}</p>}

        <label htmlFor="email" className="label">
          Email Address
        </label>
        <input
          value={values.email}
          onChange={handleOnChange}
          type="email"
          className="input"
          placeholder="Enter Your Email"
          name="email"
        />
        {errors.email && <p className="p">{errors.email}</p>}

        <label htmlFor="contactNumber" className="label">
          Contact Number
        </label>
        <input
          value={values.contactNumber}
          onChange={handleOnChange}
          type="text"
          className="input"
          placeholder="Enter Your Contact Number"
          name="contactNumber"
        />
        {errors.contactNumber && <p className="p">{errors.contactNumber}</p>}

        <button className="button" onClick={handleOnClick}>
          Submit
        </button>
      </form>
    </>
  );
}

export default SignUpForm;
