// services/fetchPatients.ts
interface FetchPatientsOptions {
  page: number;
  limit: number;
  searchQuery?: string;
  filters?: Record<string, string>;
}

const fetchPatients = async ({ page, limit, searchQuery = '', filters = {} }: FetchPatientsOptions) => {
  const query = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    name: searchQuery,
    ...filters,
  });

  try {
    const response = await fetch(`/api/patients?${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch patients');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching patients:', error);
    throw error;
  }
};

export default fetchPatients;
