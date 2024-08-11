"use client";

import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/clientlayout";
import AddPatientForm from "../../components/Patient/AddPatientForm";
import "../../styles/PatientStyle/addPatientForm.css";

const NewPatientPage = () => {
  const router = useRouter();

  const handleAddPatient = (newPatient: {
    name: string;
    surname: string;
    gender: string;
    age: number;
    contact: string;
    diagnosis: string;
    procedure: string;
  }) => {
    // Add logic to send the new patient data to the backend or update the state
    console.log("Adding new patient:", newPatient);
    // Optionally redirect back to the Patients list after adding
    router.push("/Patients");
  };

  return (
    <Layout>
      <div className="container">
        <h1 className="page-title">Yeni Hasta Ekle</h1>
        <AddPatientForm onSubmit={handleAddPatient} />
      </div>
    </Layout>
  );
};

export default NewPatientPage;
