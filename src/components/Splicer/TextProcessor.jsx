import React, { useState } from "react";
import useTextProcessor from "./useTextProcessor";
import "./TextProcessor.css";

const TextProcessor = () => {
  const [inputText, setInputText] = useState("");
  const [frequency, setFrequency] = useState(11);
  const [removeNumbers, setRemoveNumbers] = useState(false);
  const [removeSpecialChars, setRemoveSpecialChars] = useState(false);
  const { result, processText } = useTextProcessor();

  const handleProcess = () => {
    processText(inputText, frequency, removeNumbers, removeSpecialChars);
  };

  return (
    <div className="text-processor">
      <h2>Text Processor</h2>

      <label htmlFor="text-input">Enter Text:</label>
      <textarea
        id="text-input"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        rows="6"
      />

      <div className="controls">
        <label>
          Frequency:
          <input
            type="number"
            min="1"
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
          />
        </label>

        <label>
          <input
            type="checkbox"
            checked={removeNumbers}
            onChange={() => setRemoveNumbers(!removeNumbers)}
          />
          Remove Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={removeSpecialChars}
            onChange={() => setRemoveSpecialChars(!removeSpecialChars)}
          />
          Remove Punctuation & Special Characters
        </label>
      </div>

      <button onClick={handleProcess}>Process Text</button>

      <label htmlFor="result">Output:</label>
      <textarea id="result" value={result} readOnly rows="4" />
    </div>
  );
};

export default TextProcessor;
