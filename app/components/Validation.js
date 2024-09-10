const Validation = (values) => {
    let errors = {};
  
   
    if (!values.candidateName) {
      errors.candidateName = "Candidate Name is required";
    }
  
    if (!values.candidateID) {
      errors.candidateID = "Candidate ID is required";
    }
  

    if (!values.candidateClass) {
      errors.candidateClass = "Class is required";
    }
  

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(values.email)) {
      errors.email = "Email is invalid";
    }
  

    if (!values.contactNumber) {
      errors.contactNumber = "Contact Number is required";
    } 
  
    return errors;
  };
  
  export default Validation;
  