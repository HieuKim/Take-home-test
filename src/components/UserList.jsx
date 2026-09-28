function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('');
}

function UserList({ users: visibleUsers, totalUsers }) {
  return (
    <section className="user-section" aria-labelledby="user-list-heading">
      <div className="list-heading">
        <div>
          <p className="section-label">Directory</p>
          <h2 id="user-list-heading">Users</h2>
        </div>
        <p className="results-count" aria-live="polite">
          Showing {visibleUsers.length} of {totalUsers} users
        </p>
      </div>

      {visibleUsers.length > 0 ? (
        <ul className="user-list">
          {visibleUsers.map((user) => (
            <li key={user.id}>
              <article className="user-card">
                <div className="avatar" aria-hidden="true">
                  {getInitials(user.name)}
                </div>
                <div className="user-details">
                  <h3>{user.name}</h3>
                  <p>{user.role}</p>
                </div>
                <span className={`status-badge ${user.active ? 'is-active' : 'is-inactive'}`}>
                  <span className="status-dot" aria-hidden="true" />
                  {user.active ? 'Active' : 'Inactive'}
                </span>
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-state" role="status">
          <div className="empty-icon" aria-hidden="true">
            0
          </div>
          <h3>No users found</h3>
          <p>Try a different name or status filter.</p>
        </div>
      )}
    </section>
  );
}

export default UserList;
