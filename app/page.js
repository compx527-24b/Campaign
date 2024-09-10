"use client";
import CandidateForm from "./components/CandidateForm";
import { useState } from "react";

export default function Home() {
  const [submit, setSubmit] = useState(false);

  const SubmitButton = () => {
    setSubmit(true);
  };

  return (
    <>
      {!submit ? <CandidateForm SubmitButton={SubmitButton} /> : <div>Sign Up Completed</div>}
    </>
  )
};