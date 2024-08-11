'use client';
import React from 'react';
import Layout from '../components/clientlayout'; // 'Layout' bileşenini doğru bir şekilde içe aktardığınızdan emin olun.
import AppointmentOverview from '../components/Dashboard/AppointmentOverview';
import RecentPatients from '../components/Dashboard/RecentPatients';
import QuickLinks from '../components/Dashboard/QuickLinks';
import '../styles/homePage.css'; 

export default function HomePage() {
  return (
    <Layout>
      <div className="homepage-container">
        <h1 className="homepage-title">Ana Sayfa</h1>
        <div className="homepage-grid">
          <AppointmentOverview />
          <RecentPatients />
          <QuickLinks />
        </div>
      </div>
    </Layout>
  );
}
