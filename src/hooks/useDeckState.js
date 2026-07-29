import { useCallback, useEffect, useMemo, useState } from 'react';
import { parseDeckParam, serializeDeck } from '../deckUrl';

function readDeckParam() {
  return new URL(window.location.href).searchParams.get('deck');
}

function writeDeckParam(deckParam, method) {
  const url = new URL(window.location.href);

  if (deckParam) {
    url.searchParams.set('deck', deckParam);
  } else {
    url.searchParams.delete('deck');
  }

  window.history[method](window.history.state, '', url);
}

export default function useDeckState() {
  const [deckParam, setDeckParam] = useState(readDeckParam);
  const parsedDeck = useMemo(() => parseDeckParam(deckParam), [deckParam]);

  useEffect(() => {
    if (parsedDeck.isCanonical) return;

    writeDeckParam(parsedDeck.canonicalParam, 'replaceState');
  }, [parsedDeck.canonicalParam, parsedDeck.isCanonical]);

  useEffect(() => {
    const handlePopState = () => setDeckParam(readDeckParam());
    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const setDeck = useCallback(
    (nextDeck) => {
      const nextParam = serializeDeck(nextDeck);
      if (nextParam === parsedDeck.canonicalParam) return;

      writeDeckParam(nextParam, 'pushState');
      setDeckParam(nextParam);
    },
    [parsedDeck.canonicalParam]
  );

  return [parsedDeck.cards, setDeck];
}
