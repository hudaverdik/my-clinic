import React, { useState } from 'react';
import { useRouter } from 'next/router';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface ScheduleAppointmentProps {
  patientId: number;
  onAppointmentScheduled: (date: Date, patientId: number) => void;
}

const ScheduleAppointment: React.FC<ScheduleAppointmentProps> = ({
  patientId,
  onAppointmentScheduled,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (selectedDate) {
      onAppointmentScheduled(selectedDate, patientId);
      alert('Appointment scheduled successfully');
      router.push('/patients');
    } else {
      console.error('No date selected');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat="yyyy/MM/dd"
        placeholderText="Select a date"
      />
      <div className="button-container">
        <button type="submit" className="submit-button">
          Schedule Appointment
        </button>
        <button
          type="button"
          className="back-button"
          onClick={() => router.back()}
        >
          Back to Patients
        </button>
      </div>
    </form>
  );
};

export default ScheduleAppointment;
