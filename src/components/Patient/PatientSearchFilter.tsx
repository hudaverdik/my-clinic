// components/Patient/PatientSearchFilter.tsx
import React, { useState } from 'react';
import '../../styles/searchFilter.css'; // Styles for the component

interface SearchFilterProps {
  onSearch: (query: string) => void;
  onFilter: (filters: Record<string, string>) => void;
}

const PatientSearchFilter: React.FC<SearchFilterProps> = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    ageGroup: '',
    gender: '',
    condition: '',
    procedure: '',
  });

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilter(newFilters);
  };

  return (
    <div className="search-filter-container">
      <input
        type="text"
        placeholder="Search by name or ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>
      
      <select name="ageGroup" value={filters.ageGroup} onChange={handleFilterChange} className="filter-select">
        <option value="">Filter by age group</option>
        <option value="0-18">0-18</option>
        <option value="19-35">19-35</option>
        <option value="36-50">36-50</option>
        <option value="50+">50+</option>
      </select>
      
      <select name="gender" value={filters.gender} onChange={handleFilterChange} className="filter-select">
        <option value="">Filter by gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input
        type="text"
        placeholder="Filter by condition"
        name="condition"
        value={filters.condition}
        onChange={handleFilterChange}
        className="filter-input"
      />

      <select name="procedure" value={filters.procedure} onChange={handleFilterChange} className="filter-select">
        <option value="">Filter by procedure</option>
        <option value="Botox">Botox</option>
        <option value="Fillers">Fillers</option>
        {/* Add more procedures as needed */}
      </select>
    </div>
  );
};

export default PatientSearchFilter;
