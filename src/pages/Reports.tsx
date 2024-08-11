// pages/Reports.tsx
'use client';

import React from 'react';
import Layout from '../components/clientlayout'; // Reusing the Layout component for consistent styling
import Card from '../components/Card';
import '../styles/reportsPage.css'; // Import specific styles for the reports page

interface Report {
  id: number;
  title: string;
  summary: string;
}

const Reports: React.FC = () => {
  const reports: Report[] = [
    { id: 1, title: 'Monthly Sales Report', summary: 'Summary of sales for the month.' },
    { id: 2, title: 'Yearly Growth Analysis', summary: 'Analysis of the growth over the year.' },
    { id: 3, title: 'Patient Satisfaction Survey', summary: 'Results from the recent survey.' },
  ];

  return (
    <Layout>
      <div className="container">
        <h1 className="page-title">Reports</h1>
        <div className="reports-grid">
          {reports.map((report) => (
            <Card key={report.id}>
              <div className="report-info">
                <h2 className="report-title">{report.title}</h2>
                <p className="report-summary">{report.summary}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Reports;
