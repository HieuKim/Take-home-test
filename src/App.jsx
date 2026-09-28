import { useState } from 'react';
import UserFilters from './components/UserFilters.jsx';
import UserList from './components/UserList.jsx';
import { users } from './data/users.js';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleUsers = users.filter((user) => {
    const matchesName = user.name.toLowerCase().includes(normalizedQuery);
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'active' && user.active) ||
      (statusFilter === 'inactive' && !user.active);

    return matchesName && matchesStatus;
  });

  function clearFilters() {
    setSearchQuery('');
    setStatusFilter('all');
  }

  return (
    <div className="app-shell">
      <header className="page-header">
        <div className="brand-mark" aria-hidden="true">
          UD
        </div>
        <div>
          <p className="eyebrow">People operations</p>
          <h1>User Directory</h1>
          <p className="intro">
            Find teammates and check their current access status at a glance.
          </p>
        </div>
      </header>

      <main className="directory-card">
        <UserFilters
          searchQuery={searchQuery}
          statusFilter={statusFilter}
          onSearchChange={setSearchQuery}
          onStatusChange={setStatusFilter}
          onClear={clearFilters}
        />
        <UserList users={visibleUsers} totalUsers={users.length} />
      </main>

      <footer className="page-footer">Internal team directory</footer>
    </div>
  );
}

export default App;
