// pages/Patients.tsx

"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Layout from "../components/clientlayout";
import PatientList from "../components/Patient/PatientList";
import Pagination from "../components/Pagination";
import PatientSearchFilter from "../components/Patient/PatientSearchFilter";
import fetchPatients from "../services/fetchPatients";
import "../styles/patientsPage.css";

interface Patient {
  id: number;
  name: string;
  surname: string;
  gender: string;
  age: number;
  contact: string;
  diagnosis: string;
  procedure: string;
  lastVisit: string;
}

const Patients: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchPatients({
          page: currentPage,
          limit: 10,
          searchQuery,
          filters,
        });

        setPatients(data.patients);
        setTotalPages(Math.ceil(data.total / 10));
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    loadPatients();
  }, [currentPage, searchQuery, filters]);

  return (
    <Layout>
      <div className="container">
        <h1 className="page-title">Patients</h1>

        <PatientSearchFilter onSearch={setSearchQuery} onFilter={setFilters} />
        <PatientList patients={patients} />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />

        <div className="patients-actions">
          <Link href="/Patients/new" className="add-patient-button">
            Add New Patient
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Patients;
