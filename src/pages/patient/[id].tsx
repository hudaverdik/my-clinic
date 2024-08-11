// pages/patient/[id].tsx
'use client';

import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/clientlayout';
import PatientDetail from '../../components/Patient/PatientDetail';
import '../../styles/patientDetail.css'; // Ensure you have a CSS file for styling

const PatientDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <div className="container">
        <h1 className="page-title">Patient Detail</h1>
        <button className="back-button" onClick={() => router.back()}>
          Back to Patients
        </button>
        <PatientDetail patientId={parseInt(id as string, 10)} />
      </div>
    </Layout>
  );
};

export default PatientDetailPage;
