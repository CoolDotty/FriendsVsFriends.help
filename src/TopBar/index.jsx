import { useRef, useState } from 'react';
import assetUrl from '../assetUrl';
import Button from '../Button';
import { createDeckHref } from '../deckUrl';
import Modal from '../Modal';
import { parsePlayerLog } from '../playerLog';
import TextInput from '../TextInput';
import { MAX_COST, MIN_CARDS } from '../const';
import './styles.css';

function openInNewTab(url) {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
  if (newWindow) newWindow.opener = null;
}

export default function TopBar({
  deckCost,
  deckCount,
  onReset,
  shareableUrl,
  copyPasteRef,
  onCopy,
}) {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [importedDecks, setImportedDecks] = useState([]);
  const [importError, setImportError] = useState('');
  const inputRef = useRef();

  const toggleMenu = (menu) =>
    setActiveMenu((currentMenu) => (currentMenu === menu ? null : menu));

  const handleFileUpload = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;

    try {
      setImportedDecks(parsePlayerLog(await file.text()));
      setImportError('');
    } catch (error) {
      setImportedDecks([]);
      setImportError(
        error instanceof Error ? error.message : 'Could not read this file.'
      );
    }
  };

  return (
    <header className="topMenuContainer">
      <div className="topMenu">
        <div className="title">
          <img className="logo" src={assetUrl('favicon.ico')} alt="" />
          <span className="text">FvF Deck Builder</span>
        </div>

        <div className="costMenu" aria-label="Deck totals">
          <span>
            Cost:{' '}
            {deckCost > MAX_COST ? (
              <strong className="invalidTotal">{deckCost}</strong>
            ) : (
              deckCost
            )}
            /{MAX_COST}
          </span>
          <span>
            Count:{' '}
            {deckCount < MIN_CARDS ? (
              <strong className="invalidTotal">{deckCount}</strong>
            ) : (
              deckCount
            )}
            /{MIN_CARDS}
          </span>
        </div>

        <nav className="topMenuActions" aria-label="Deck actions">
          <Button onClick={() => setIsResetModalOpen(true)} label="Reset" />
          <Button
            onClick={() => toggleMenu('share')}
            label="Share"
            forceActive={activeMenu === 'share'}
            aria-expanded={activeMenu === 'share'}
          />
          <Button
            onClick={() => toggleMenu('load')}
            label="Load"
            forceActive={activeMenu === 'load'}
            aria-expanded={activeMenu === 'load'}
          />
        </nav>
      </div>

      <Modal
        isOpen={isResetModalOpen}
        title="Clear Deck?"
        onCancel={() => setIsResetModalOpen(false)}
        onConfirm={() => {
          onReset();
          setIsResetModalOpen(false);
        }}
      />

      <div
        className={`ShareMenu ${activeMenu === 'share' ? 'open' : ''}`}
        aria-hidden={activeMenu !== 'share'}
        inert={activeMenu !== 'share'}>
        <label className="ShareContainer" htmlFor="share-link">
          Link:
          <TextInput
            id="share-link"
            ref={copyPasteRef}
            value={shareableUrl}
            readOnly
            onClick={onCopy}
          />
        </label>
      </div>

      <div
        className={`LoadMenu ${activeMenu === 'load' ? 'open' : ''}`}
        aria-hidden={activeMenu !== 'load'}
        inert={activeMenu !== 'load'}>
        <div className="LoadContainer">
          <Button onClick={() => inputRef.current?.click()} label="Upload Player.log" />
          <input
            ref={inputRef}
            type="file"
            accept=".log,.txt,text/plain"
            hidden
            onChange={handleFileUpload}
          />
          <div id="decksHolder">
            {importedDecks.map((deck, index) => (
              <Button
                key={`${deck.name}-${index}`}
                label={deck.name}
                style={{ margin: '8px' }}
                onClick={() =>
                  openInNewTab(createDeckHref(deck.cardIds, window.location.href))
                }
              />
            ))}
          </div>
        </div>
        {importError && (
          <p className="importError" role="alert">
            {importError}
          </p>
        )}
        <p className="playerLogHint">
          Located in: /Users/<span className="playerNameHint">your name</span>
          /AppData/LocalLow/Brainwash Gang/Friends vs Friends/player.log
        </p>
      </div>
    </header>
  );
}
