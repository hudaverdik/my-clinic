'use client'

import React from 'react';
import '../../styles/appointmentOverview.css'; // Yolu projenize göre ayarlayın.
import Card from '../Card';

const AppointmentOverview = () => {
  return (
    <Card >
      <h2 className="overview-header">Yaklaşan Randevular</h2>
      <ul className="overview-list">
        <li className="overview-list-item">Hasta: Ayşe Yılmaz - Tarih: 15 Ağustos 2024</li>
        <li className="overview-list-item">Hasta: Mehmet Demir - Tarih: 16 Ağustos 2024</li>
        <li className="overview-list-item">Hasta: Fatma Kaya - Tarih: 17 Ağustos 2024</li>
      </ul>
    </Card>
  );
};

export default AppointmentOverview;
