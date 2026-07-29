import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';

afterEach(() => {
  cleanup();
  window.history.replaceState({}, '', '/');
});

describe('App deck interactions', () => {
  it('adds a card and writes the deck to browser history', async () => {
    const user = userEvent.setup();
    render(<App />);

    const card = screen.getByRole('button', { name: 'Add Big Head to deck' });
    expect(card).toHaveAttribute('aria-pressed', 'false');

    await user.click(card);

    expect(window.location.search).toBe('?deck=1');
    expect(
      screen.getAllByRole('button', { name: 'Remove Big Head from deck' })
    ).toHaveLength(2);
  });

  it('canonicalizes malformed deck URLs without losing valid cards', async () => {
    window.history.replaceState({}, '', '/?deck=9999.1.1.nope');
    render(<App />);

    await waitFor(() => expect(window.location.search).toBe('?deck=1'));
    expect(
      screen.getAllByRole('button', { name: 'Remove Big Head from deck' })
    ).toHaveLength(2);
  });
});
