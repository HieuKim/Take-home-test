import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from './App.jsx';

describe('User Directory', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('shows all users and their key details initially', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(screen.getByText('Aisha Khan')).toBeInTheDocument();
    expect(screen.getByText('Admin')).toBeInTheDocument();
    expect(screen.getByText('Ben Smith')).toBeInTheDocument();
    expect(within(screen.getByText('Ben Smith').closest('article')).getByText('Inactive'))
      .toBeInTheDocument();
    expect(screen.getByText('Showing 4 of 4 users')).toBeInTheDocument();
  });

  it('searches by name case-insensitively', async () => {
    const user = userEvent.setup();

    await user.type(screen.getByRole('searchbox', { name: 'Search by name' }), 'CHLOE');

    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Chloe Jones')).toBeInTheDocument();
    expect(screen.getByText('Showing 1 of 4 users')).toBeInTheDocument();
  });

  it('trims whitespace around a search query', async () => {
    const user = userEvent.setup();

    await user.type(screen.getByRole('searchbox', { name: 'Search by name' }), '  ben  ');

    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Ben Smith')).toBeInTheDocument();
  });

  it('filters active users', async () => {
    const user = userEvent.setup();

    await user.selectOptions(screen.getByRole('combobox', { name: 'Status' }), 'active');

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByText('Aisha Khan')).toBeInTheDocument();
    expect(screen.getByText('Chloe Jones')).toBeInTheDocument();
    expect(screen.getByText('Daniel Brown')).toBeInTheDocument();
    expect(screen.getByText('Showing 3 of 4 users')).toBeInTheDocument();
  });

  it('filters inactive users', async () => {
    const user = userEvent.setup();

    await user.selectOptions(screen.getByRole('combobox', { name: 'Status' }), 'inactive');

    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Ben Smith')).toBeInTheDocument();
  });

  it('combines search and status filters with AND logic', async () => {
    const user = userEvent.setup();
    const search = screen.getByRole('searchbox', { name: 'Search by name' });
    const status = screen.getByRole('combobox', { name: 'Status' });

    await user.type(search, 'Daniel');
    await user.selectOptions(status, 'inactive');

    expect(screen.getByText('No users found')).toBeInTheDocument();
    expect(screen.getByText('Showing 0 of 4 users')).toBeInTheDocument();

    await user.selectOptions(status, 'active');

    expect(screen.getAllByRole('listitem')).toHaveLength(1);
    expect(screen.getByText('Daniel Brown')).toBeInTheDocument();
  });

  it('clears both filters and restores the full directory', async () => {
    const user = userEvent.setup();
    const search = screen.getByRole('searchbox', { name: 'Search by name' });
    const status = screen.getByRole('combobox', { name: 'Status' });

    await user.type(search, 'Daniel');
    await user.selectOptions(status, 'active');
    await user.click(screen.getByRole('button', { name: 'Clear filters' }));

    expect(search).toHaveValue('');
    expect(status).toHaveValue('all');
    expect(screen.getAllByRole('listitem')).toHaveLength(4);
    expect(screen.getByText('Showing 4 of 4 users')).toBeInTheDocument();
  });
});
