import { allCards } from './const';

const cardsById = new Map(allCards.map((card) => [card.id, card]));

export function serializeDeck(cards) {
  const cardIds = cards.map((card) => card.id);
  return cardIds.length > 0 ? cardIds.join('.') : null;
}

export function parseDeckParam(deckParam) {
  if (deckParam === null) {
    return {
      cards: [],
      canonicalParam: null,
      isCanonical: true,
    };
  }

  const cards = [];
  const seenCardIds = new Set();

  for (const token of deckParam.split('.')) {
    if (!/^\d+$/.test(token)) continue;

    const card = cardsById.get(Number(token));
    if (!card || seenCardIds.has(card.id)) continue;

    seenCardIds.add(card.id);
    cards.push(card);
  }

  const canonicalParam = serializeDeck(cards);

  return {
    cards,
    canonicalParam,
    isCanonical: deckParam === canonicalParam,
  };
}

export function createDeckHref(cardIds, currentHref = window.location.href) {
  const url = new URL(currentHref);

  if (cardIds.length > 0) {
    url.searchParams.set('deck', cardIds.join('.'));
  } else {
    url.searchParams.delete('deck');
  }

  return url.href;
}
