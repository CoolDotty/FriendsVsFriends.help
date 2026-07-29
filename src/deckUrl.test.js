import { describe, expect, it } from 'vitest';
import { createDeckHref, parseDeckParam, serializeDeck } from './deckUrl';

describe('deck URL utilities', () => {
  it('treats a missing deck parameter as an empty canonical deck', () => {
    expect(parseDeckParam(null)).toEqual({
      cards: [],
      canonicalParam: null,
      isCanonical: true,
    });
  });

  it('removes invalid and duplicate card IDs from a deck parameter', () => {
    const parsed = parseDeckParam('1.2.nope.9999.1');

    expect(parsed.cards.map((card) => card.id)).toEqual([1, 2]);
    expect(parsed.canonicalParam).toBe('1.2');
    expect(parsed.isCanonical).toBe(false);
  });

  it('serializes an empty deck without the string null', () => {
    expect(serializeDeck([])).toBeNull();
  });

  it('preserves unrelated URL state when creating a deck link', () => {
    expect(createDeckHref([1, 2], 'https://example.com/play?foo=bar#cards')).toBe(
      'https://example.com/play?foo=bar&deck=1.2#cards'
    );
  });
});
