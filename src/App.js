import { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    // Save current text to undo stack before updating
    setUndoStack(prev => [...prev, text]);
    setText(newText);
    setRedoStack([]);
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const previousText = undoStack[undoStack.length - 1];
      // Save current text to redo stack before undoing
      setRedoStack(prev => [...prev, text]);
      setText(previousText);
      setUndoStack(prev => prev.slice(0, -1));
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextText = redoStack[redoStack.length - 1];
      // Save current text to undo stack before redoing
      setUndoStack(prev => [...prev, text]);
      setText(nextText);
      setRedoStack(prev => prev.slice(0, -1));
    }
  };

  const handleClear = () => {
    setText('');
    setUndoStack([]);
    setRedoStack([]);
  };

  const formatStack = (stack) => {
    return stack
      .map((item, index) => `${index + 1}. ${item}`)
      .join('\n') || 'Empty';
  };

  return (
    <div className="App">
      <div className="container">
        <div className="toolbar">
          <button onClick={handleUndo} title="Undo">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="#4a5568" d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/>
            </svg>
          </button>
          
          <button onClick={handleRedo} title="Redo">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="#4a5568" d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>
            </svg>
          </button>
          
          <button onClick={handleClear} title="Clear">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="#4a5568" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>
        </div>

        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Start typing..."
        />

        <div className="stacks">
          <div className="stack-card">
            <h3>Undo History</h3>
            <pre>{formatStack(undoStack)}</pre>
          </div>
          <div className="stack-card">
            <h3>Redo Future</h3>
            <pre>{formatStack(redoStack)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
