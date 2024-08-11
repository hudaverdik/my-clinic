"use client";
import React from "react";
import "../../styles/recentPatients.css"; // Stil dosyasını bağlayın
import Card from "../Card";

const RecentPatients = () => {
  return (
    <Card>
      <h2 className="recent-patients-title">Son Eklenen Hastalar</h2>
      <ul className="recent-patients-list">
        <li className="recent-patients-item">
          Ayşe Yılmaz - Son Ziyaret: 12 Ağustos 2024
        </li>
        <li className="recent-patients-item">
          Mehmet Demir - Son Ziyaret: 10 Ağustos 2024
        </li>
        <li className="recent-patients-item">
          Fatma Kaya - Son Ziyaret: 8 Ağustos 2024
        </li>
      </ul>
    </Card>
  );
};

export default RecentPatients;
