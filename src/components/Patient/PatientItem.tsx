// components/Patient/PatientItem.tsx
import React from 'react';
import { useRouter } from 'next/router';
import '../../styles/patientItem.css'; // Add styles for patient items

interface Patient {
  id: number;
  name: string;
  lastVisit: string;
  // Include any other fields you need
}

interface PatientItemProps {
  patient: Patient;
}

const PatientItem: React.FC<PatientItemProps> = ({ patient }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/patient/${patient.id}`);
  };

  return (
    <div className="patient-item-card" onClick={handleClick}>
      <h3 className="patient-item-name">{patient.name}</h3>
      <p><strong>Last Visit:</strong> {patient.lastVisit}</p>
      {/* Add more patient summary details if needed */}
    </div>
  );
};

export default PatientItem;
