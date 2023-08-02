import { useState } from "react";
import "./App.css";
import { ResultBox } from "./ResultBox";

function App() {
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  const [sentences, setSentences] = useState(0);
  const [paragraphs, setParagraphs] = useState(0);
  const [pronouns, setPronouns] = useState(0);

  const [averageReadingTime, setAverageReadingTime] = useState("-");
  const [longestWord, setLongestWord] = useState("-");

  const handleOnChange = (e) => {
    const valueFromTextArea = e.target.value;

    setWords(valueFromTextArea.split(" ").filter(x => x.length > 0).length);
  };

  return (
    <div className="small-container">
      <div className="main-div">
        <div className="result-bar">
          <ResultBox title="Words" value={words} />
          <ResultBox title="Characters" value={characters} />
          <ResultBox title="Sentences" value={sentences} />
          <ResultBox title="Paragraphs" value={paragraphs} />
          <ResultBox title="Pronouns" value={pronouns} />
        </div>
        <textarea
          className="text-area"
          onChange={handleOnChange}
          placeholder="Paste your text here"
        />
        <div className="bottom-result-box">
          <ResultBox title="Average Reading Time:" value={averageReadingTime} />
          <ResultBox title="Longest Word:" value={longestWord} />
        </div>
      </div>
    </div>
  );
}

export default App;
