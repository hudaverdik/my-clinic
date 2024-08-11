import React from 'react';
import '../../styles/appointmentForm.css'; // Yolu projenize göre ayarlayın.
import Card from '../Card'; // Kart bileşenini içe aktarın

interface AppointmentFormProps {
  newAppointment: { patientName: string; date: string; time: string };
  onChange: (field: string, value: string) => void;
  onSubmit: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  newAppointment,
  onChange,
  onSubmit,
}) => {
  return (
    <Card>
      <h2 className="form-header">Yeni Randevu Ekle</h2>
      <div className="form-body">
        <input
          type="text"
          placeholder="Hasta Adı"
          className="form-input"
          value={newAppointment.patientName}
          onChange={(e) => onChange('patientName', e.target.value)}
        />
        <input
          type="date"
          className="form-input"
          value={newAppointment.date}
          onChange={(e) => onChange('date', e.target.value)}
        />
        <input
          type="time"
          className="form-input"
          value={newAppointment.time}
          onChange={(e) => onChange('time', e.target.value)}
        />
        <button className="form-button" onClick={onSubmit}>
          Randevu Ekle
        </button>
      </div>
    </Card>
  );
};

export default AppointmentForm;
