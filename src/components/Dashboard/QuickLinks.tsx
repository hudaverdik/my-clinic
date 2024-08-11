"use client";
import React from "react";
import Link from "next/link";
import "../../styles/QuickLinks.css"
import Card from "../Card";

const QuickLinks = () => {
  return (
    <Card>
      <h2 className="quick-links-title">Hızlı Erişim</h2>
      <ul className="quick-links-list">
        <li className="quick-links-item">
          <Link href="/appointments/new" className="quick-links-link">
            Yeni Randevu Ekle
          </Link>
        </li>
        <li className="quick-links-item">
          <Link href="/patients/new" className="quick-links-link">
            Yeni Hasta Ekle
          </Link>
        </li>
      </ul>
    </Card>
  );
};

export default QuickLinks;
