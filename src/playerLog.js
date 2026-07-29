export class PlayerLogError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PlayerLogError';
  }
}

export function parsePlayerLog(contents) {
  if (typeof contents !== 'string' || contents.trim().length === 0) {
    throw new PlayerLogError('The selected file is empty.');
  }

  const userLine = contents
    .split(/\r?\n/)
    .find((line) => line.trim().startsWith('===>') && line.includes('"user"'));

  if (!userLine) {
    throw new PlayerLogError('No Friends vs Friends player data was found in this file.');
  }

  let payload;
  try {
    payload = JSON.parse(userLine.slice(userLine.indexOf('===>') + 4).trim());
  } catch {
    throw new PlayerLogError('The player data in this file is not valid JSON.');
  }

  const { user } = payload;
  if (!user || !Array.isArray(user.cards) || !Array.isArray(user.decks)) {
    throw new PlayerLogError('The player data is missing its card inventory or decks.');
  }

  const cardIdByInventoryId = new Map(
    user.cards
      .filter((card) => card && card._id !== undefined && Number.isInteger(card.cardid))
      .map((card) => [card._id, card.cardid])
  );

  return user.decks.map((deck, index) => ({
    name:
      typeof deck?.name === 'string' && deck.name.trim().length > 0
        ? deck.name
        : `Deck ${index + 1}`,
    cardIds: Array.isArray(deck?.cards)
      ? deck.cards
          .map((inventoryId) => cardIdByInventoryId.get(inventoryId))
          .filter(Number.isInteger)
      : [],
  }));
}
