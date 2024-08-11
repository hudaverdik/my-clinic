'use client';
import React from 'react';
import '../styles/card.css'; // Kart için genel stil dosyasını ekleyin

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="common-card">{children}</div>;
};

export default Card;
