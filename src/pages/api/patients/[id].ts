// pages/api/patients/[id].ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
  condition: string;
  procedure: string;
  // Add more fields as necessary
}

const patientsData: Patient[] = [
  { id: 1, name: 'Ayşe Yılmaz', age: 30, gender: 'Female', lastVisit: '2024-08-12', condition: 'Diabetes', procedure: 'Botox' },
  { id: 2, name: 'Mehmet Demir', age: 45, gender: 'Male', lastVisit: '2024-08-10', condition: 'Hypertension', procedure: 'Fillers' },
  { id: 3, name: 'Fatma Kaya', age: 28, gender: 'Female', lastVisit: '2024-08-08', condition: 'Asthma', procedure: 'Botox' },
  // Additional records
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  switch (method) {
    case 'GET':
      const { id } = query;
      const patient = patientsData.find(patient => patient.id.toString() === id);

      if (patient) {
        res.status(200).json(patient);
      } else {
        res.status(404).json({ error: 'Patient not found' });
      }
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
