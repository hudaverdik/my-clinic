// pages/api/patients.ts
import type { NextApiRequest, NextApiResponse } from 'next';

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  lastVisit: string;
  condition: string;
  procedure: string;
}

// Sample data with procedure field
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
      // Filter logic
      let filteredPatients = patientsData;

      if (query.name) {
        filteredPatients = filteredPatients.filter(patient =>
          patient.name.toLowerCase().includes((query.name as string).toLowerCase())
        );
      }

      if (query.id) {
        filteredPatients = filteredPatients.filter(patient =>
          patient.id.toString() === query.id
        );
      }

      if (query.ageGroup) {
        switch (query.ageGroup) {
          case '0-18':
            filteredPatients = filteredPatients.filter(patient => patient.age >= 0 && patient.age <= 18);
            break;
          case '19-35':
            filteredPatients = filteredPatients.filter(patient => patient.age >= 19 && patient.age <= 35);
            break;
          case '36-50':
            filteredPatients = filteredPatients.filter(patient => patient.age >= 36 && patient.age <= 50);
            break;
          case '50+':
            filteredPatients = filteredPatients.filter(patient => patient.age > 50);
            break;
          default:
            break;
        }
      }

      if (query.gender) {
        filteredPatients = filteredPatients.filter(patient =>
          patient.gender.toLowerCase() === (query.gender as string).toLowerCase()
        );
      }

      if (query.condition) {
        filteredPatients = filteredPatients.filter(patient =>
          patient.condition.toLowerCase().includes((query.condition as string).toLowerCase())
        );
      }

      if (query.procedure) {
        filteredPatients = filteredPatients.filter(patient =>
          patient.procedure.toLowerCase() === (query.procedure as string).toLowerCase()
        );
      }

      const total = filteredPatients.length;
      res.status(200).json({ patients: filteredPatients, total });
      break;

    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
