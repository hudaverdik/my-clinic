// components/Appointments/AppointmentList.tsx
import React from 'react';
import AppointmentItem from './AppointmentItem';
import '../../styles/appointmentList.css'; // Adjust path as necessary
import Card from '../Card'; // Card bileşenini içe aktarın

interface Appointment {
  id: number;
  patientName: string;
  date: string;
  time: string;
}

interface AppointmentListProps {
  appointments: Appointment[];
  onDelete: (id: number) => void;
}

const AppointmentList: React.FC<AppointmentListProps> = ({
  appointments,
  onDelete,
}) => {
  return (
    <Card>
      <h2 className="appointment-list-title">Mevcut Randevular</h2>
      <ul className="appointment-list">
        {appointments.map((appointment) => (
          <AppointmentItem
            key={appointment.id}
            appointment={appointment}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </Card>
  );
};

export default AppointmentList;
