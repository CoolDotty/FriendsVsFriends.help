import { describe, expect, it } from 'vitest';
import { parsePlayerLog, PlayerLogError } from './playerLog';

const validPlayerLog = `
unrelated log line
===> {"code":0,"user":{"cards":[{"_id":"inventory-1","cardid":1},{"_id":"inventory-2","cardid":42}],"decks":[{"name":"Favorites","cards":["inventory-2","missing","inventory-1"]},{"name":"","cards":[]}]}}
`;

describe('parsePlayerLog', () => {
  it('converts inventory references into shareable card IDs', () => {
    expect(parsePlayerLog(validPlayerLog)).toEqual([
      { name: 'Favorites', cardIds: [42, 1] },
      { name: 'Deck 2', cardIds: [] },
    ]);
  });

  it('reports when player data is missing', () => {
    expect(() => parsePlayerLog('ordinary log output')).toThrowError(PlayerLogError);
    expect(() => parsePlayerLog('ordinary log output')).toThrow(
      'No Friends vs Friends player data was found'
    );
  });

  it('reports malformed player JSON', () => {
    expect(() => parsePlayerLog('===> {"user":')).toThrow(
      'The player data in this file is not valid JSON'
    );
  });
});
