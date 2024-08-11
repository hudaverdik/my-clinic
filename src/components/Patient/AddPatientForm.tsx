import React, { useState } from "react";
import "../../styles/PatientStyle/addPatientForm.css";
import { useRouter } from "next/router";

interface AddPatientFormProps {
  onSubmit: (newPatient: {
    name: string;
    surname: string;
    gender: string;
    age: number;
    contact: string;
    diagnosis: string;
    procedure: string;
  }) => void;
}

const AddPatientForm: React.FC<AddPatientFormProps> = ({ onSubmit }) => {
  const [patient, setPatient] = useState({
    name: "",
    surname: "",
    gender: "",
    age: "",
    contact: "",
    diagnosis: "",
    procedure: "",
  });
  const router = useRouter();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPatient((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!patient.name) newErrors.name = "Name is required";
    if (!patient.surname) newErrors.surname = "Surname is required";
    if (!patient.gender) newErrors.gender = "Gender is required";
    if (!patient.age || isNaN(Number(patient.age)))
      newErrors.age = "Valid age is required";
    if (!patient.contact) newErrors.contact = "Contact is required";
    if (!patient.diagnosis) newErrors.diagnosis = "Diagnosis is required";
    if (!patient.procedure) newErrors.procedure = "Procedure is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit({
        name: patient.name,
        surname: patient.surname,
        gender: patient.gender,
        age: Number(patient.age),
        contact: patient.contact,
        diagnosis: patient.diagnosis,
        procedure: patient.procedure,
      });
      setPatient({
        name: "",
        surname: "",
        gender: "",
        age: "",
        contact: "",
        diagnosis: "",
        procedure: "",
      });
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    
    <form onSubmit={handleSubmit} className="add-patient-form">
      
      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={patient.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="surname">Surname</label>
        <input
          type="text"
          id="surname"
          name="surname"
          value={patient.surname}
          onChange={handleInputChange}
        />
        {errors.surname && <p className="error">{errors.surname}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={patient.gender}
          onChange={handleInputChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        {errors.gender && <p className="error">{errors.gender}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={patient.age}
          onChange={handleInputChange}
        />
        {errors.age && <p className="error">{errors.age}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="contact">Contact</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={patient.contact}
          onChange={handleInputChange}
        />
        {errors.contact && <p className="error">{errors.contact}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="diagnosis">Diagnosis</label>
        <input
          type="text"
          id="diagnosis"
          name="diagnosis"
          value={patient.diagnosis}
          onChange={handleInputChange}
        />
        {errors.diagnosis && <p className="error">{errors.diagnosis}</p>}
      </div>

      <div className="form-field">
        <label htmlFor="procedure">Procedure</label>
        <input
          type="text"
          id="procedure"
          name="procedure"
          value={patient.procedure}
          onChange={handleInputChange}
        />
        {errors.procedure && <p className="error">{errors.procedure}</p>}
      </div>
      <div className="button-container">
    <button type="submit" className="submit-button">
      Add Patient
    </button>
    <button type="button" className="back-button" onClick={() => router.push("/Patients")}>
      Back to Patients
    </button>
  </div>
    </form>
  );
};

export default AddPatientForm;
