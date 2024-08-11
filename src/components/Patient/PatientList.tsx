// components/Patient/PatientList.tsx
import React from 'react';
import PatientItem from './PatientItem';
import '../../styles/patientList.css';

interface Patient {
  id: number;
  name: string;
  lastVisit: string;
  // Include any other fields you need
}

interface PatientListProps {
  patients: Patient[];
}

const PatientList: React.FC<PatientListProps> = ({ patients }) => {
  return (
    <div className="patient-list">
      <div className="patients-grid">
        {patients.map((patient) => (
          <PatientItem key={patient.id} patient={patient} />
        ))}
      </div>
    </div>
  );
};

export default PatientList;
