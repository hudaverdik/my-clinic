'use client'
// components/Appointments/AppointmentItem.tsx
import React from 'react';
import '../../styles/appointmentItem.css';  // Doğru yolu sağladığınızdan emin olun

interface AppointmentItemProps {
  appointment: {
    id: number;
    patientName: string;
    date: string;
    time: string;
  };
  onDelete: (id: number) => void;
}

const AppointmentItem: React.FC<AppointmentItemProps> = ({ appointment, onDelete }) => {
  return (
    <div className="appointment-item">
      <div className="item-header">{appointment.patientName}</div>
      <div className="item-body">{appointment.date} - {appointment.time}</div>
      <div className="item-actions">
        <button className="delete-button" onClick={() => onDelete(appointment.id)}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default AppointmentItem;
