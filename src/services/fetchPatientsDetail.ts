// services/fetchPatientDetail.ts
const fetchPatientDetail = async (id: number) => {
    const response = await fetch(`/api/patients/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch patient details');
    }
    const data = await response.json();
    return data;
  };
  
  export default fetchPatientDetail;
  