export default function FilterBar({ onFilterChange }) {
  return (
    <div className="filter-container">
      <select
        className="filter-select"
        onChange={(e) => onFilterChange(e.target.value)}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="completed">Completed</option>
      </select>
    </div>
  );
}
