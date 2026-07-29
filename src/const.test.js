import { describe, expect, it } from 'vitest';
import { allCards } from './const';

describe('Dead Game Update cards', () => {
  it('includes the five new cards and Cloud Rummage personality card', () => {
    const newCards = allCards
      .filter(({ id }) => [169, 170, 171, 172, 173, 1029].includes(id))
      .map(({ id, batch, type, name, cost }) => ({ id, batch, type, name, cost }));

    expect(newCards).toEqual([
      { id: 169, batch: 14, type: 'Debuff', name: 'The End', cost: 2 },
      { id: 170, batch: 14, type: 'Buff', name: 'Trash Thief', cost: 2 },
      { id: 171, batch: 14, type: 'Wild', name: 'Back to the Past', cost: 2 },
      { id: 172, batch: 14, type: 'Helper', name: 'Life Support', cost: 2 },
      { id: 173, batch: 14, type: 'Helper', name: 'Holy Lantern', cost: 2 },
      { id: 1029, batch: 14, type: 'Personality', name: 'Trash Thief', cost: 2 },
    ]);
  });
});
