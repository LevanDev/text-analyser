import './App.css'
import { ResultBox } from './ResultBox'
import { TextArea } from './TextArea'

function App() {


  return (
    <div>
      <div className='main-div'>
        <div className='result-bar'>
          <ResultBox title="words" value="0" />
          <ResultBox title="characters" value="0" />
          <ResultBox title="Sentences" value="0" />
          <ResultBox title="Paragraphs" value="0" />
          <ResultBox title="pronouns" value="0" />
        </div>
      </div>
      <TextArea />
      <div className='bottom-result-box'>
        <ResultBox title="Average Reading Time" value="0" />
        <ResultBox title="Longest Word" value="0" />
      </div>
    </div>
  )
}

export default App
