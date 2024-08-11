'use client';
import Link from 'next/link';
import React from 'react';
import '../styles/layout.css'; // Ensure the CSS file is set up for styling

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="custom-layout">
      <header className="custom-layout-header">
        <h1 className="custom-header-title">Dermatoloji Klinik Admin Paneli</h1>
      </header>
      <section className="custom-layout-ribbon">
        <div className="ribbon-card">
          <Link href="/Dashboard"
            className="card-link">Dashboard
          </Link>
        </div>
        <div className="ribbon-card">
          <Link href="/Appointments"
            className="card-link">Randevular
          </Link>
        </div>
        <div className="ribbon-card">
          <Link href="/Patients"
            className="card-link">Hastalar
          </Link>
        </div>
        <div className="ribbon-card">
          <Link href="/Reports"
            className="card-link">Raporlar
          </Link>
        </div>
      </section>
      <main className="custom-layout-main">{children}</main>
      <footer className="custom-layout-footer">
        <p>© 2024 Dermatoloji Klinik. Tüm Hakları Saklıdır.</p>
      </footer>
    </div>
  );
};

export default Layout;
