'use client'

// components/Patient/PatientDetail.tsx
import React, { useEffect, useState } from 'react';
import fetchPatientDetail from '../../services/fetchPatientsDetail';
import '../../styles/patientDetail.css';

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
  condition: string;
  procedure: string;
  // Add more fields as necessary
}

interface PatientDetailProps {
  patientId: number;
}

const PatientDetail: React.FC<PatientDetailProps> = ({ patientId }) => {
  const [patient, setPatient] = useState<Patient | null>(null);

  useEffect(() => {
    const loadPatientDetail = async () => {
      try {
        const data = await fetchPatientDetail(patientId);
        setPatient(data);
      } catch (error) {
        console.error('Error fetching patient details:', error);
      }
    };

    loadPatientDetail();
  }, [patientId]);

  if (!patient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="patient-detail-card">
      <h2 className="patient-name">{patient.name}</h2>
      <p><strong>Age:</strong> {patient.age}</p>
      <p><strong>Gender:</strong> {patient.gender}</p>
      <p><strong>Last Visit:</strong> {patient.lastVisit}</p>
      <p><strong>Condition:</strong> {patient.condition}</p>
      <p><strong>Procedure:</strong> {patient.procedure}</p>
      {/* Add more patient details here */}
    </div>
  );
};

export default PatientDetail;
