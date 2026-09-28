const statusOptions = [
  { value: 'all', label: 'All statuses' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

function UserFilters({ searchQuery, statusFilter, onSearchChange, onStatusChange, onClear }) {
  return (
    <section className="filters" aria-label="Filter users">
      <div className="field-group search-field">
        <label htmlFor="user-search">Search by name</label>
        <input
          id="user-search"
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search users"
          aria-describedby="search-help"
        />
        <p id="search-help" className="field-help">
          Matches anywhere in a user&apos;s name.
        </p>
      </div>

      <div className="field-group status-field">
        <label htmlFor="status-filter">Status</label>
        <select
          id="status-filter"
          value={statusFilter}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button className="clear-button" type="button" onClick={onClear}>
        Clear filters
      </button>
    </section>
  );
}

export default UserFilters;
