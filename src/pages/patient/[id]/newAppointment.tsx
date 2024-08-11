'use client'

// pages/patient/[id]/newAppointment.tsx
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Layout from '../../../components/clientlayout'; // Adjust path as needed
import '../../../styles/appointment.css'; // Ensure you have a CSS file for styling

const NewAppointmentPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleScheduleAppointment = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    // Mock API call or state update logic for appointment
    console.log(`Scheduled appointment for patient ID ${id} on ${selectedDate.toISOString()}`);

    // Navigate back to the patient detail page after scheduling
    router.push(`/Patient/${id}`);
  };

  return (
    <Layout>
      <div className="container">
        <h1 className="page-title">Schedule New Appointment</h1>
        <form onSubmit={handleScheduleAppointment}>
          <div className="form-group">
            <label htmlFor="appointment-date">Select Date:</label>
            <DatePicker
              id="appointment-date"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy/MM/dd"
              placeholderText="Select a date"
              className="date-picker"
            />
          </div>
          <div className="button-container">
            <button type="submit" className="submit-button">Schedule Appointment</button>
            <button type="button" className="back-button" onClick={() => router.back()}>
              Back to Patient Details
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default NewAppointmentPage;
