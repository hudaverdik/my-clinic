"use client";

import React, { useState, useEffect } from "react";
import Layout from "../components/clientlayout"; // Layout bileşeninin doğru yolu
import AppointmentForm from "../components/Appointments/AppointmentForm";
import AppointmentList from "../components/Appointments/AppointmentList";
import "../styles/appointmentsPage.css"; // Stil dosyasını içe aktarın
import Card from "@/components/Card";

interface Appointment {
  id: number;
  patientName: string;
  date: string;
  time: string;
}

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [newAppointment, setNewAppointment] = useState<Appointment>({
    id: 0,
    patientName: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    // Simulated data fetch
    const fetchAppointments = async () => {
      const exampleAppointments = [
        {
          id: 1,
          patientName: "Ayşe Yılmaz",
          date: "2024-08-15",
          time: "10:00",
        },
        {
          id: 2,
          patientName: "Mehmet Demir",
          date: "2024-08-16",
          time: "11:30",
        },
        { id: 3, patientName: "Fatma Kaya", date: "2024-08-17", time: "14:00" },
      ];
      setAppointments(exampleAppointments);
    };

    fetchAppointments();
  }, []);

  const handleAddAppointment = () => {
    if (
      newAppointment.patientName &&
      newAppointment.date &&
      newAppointment.time
    ) {
      setAppointments([...appointments, { ...newAppointment, id: Date.now() }]);
      setNewAppointment({ id: 0, patientName: "", date: "", time: "" });
    }
  };

  const handleDeleteAppointment = (id: number) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id)
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setNewAppointment((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      <Card>
        <h1 className="appointments-title">Randevular</h1>
        <div className="appointments-grid">
          <AppointmentForm
            newAppointment={newAppointment}
            onChange={handleInputChange}
            onSubmit={handleAddAppointment}
          />
          <AppointmentList
            appointments={appointments}
            onDelete={handleDeleteAppointment}
          />
        </div>
      </Card>
    </Layout>
  );
};

export default AppointmentsPage;
