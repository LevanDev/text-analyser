import './App.css'

function App() {


  return (
    <div>
      <div className='main-div'>
        <div className='result-bar'>
          <div className='result-box'>
            <span className='box-title'>words</span>
            <span className='box-value'>0</span>
          </div>
          <div className='result-box'>
            <span className='box-title'>characters</span>
            <span className='box-value'>0</span>
          </div>
          <div className='result-box'>
            <span className='box-title'>Sentences</span>
            <span className='box-value'>0</span>
          </div>
          <div className='result-box'>
            <span className='box-title'>Paragraphs</span>
            <span className='box-value'>0</span>
          </div>
          <div className='result-box'>
            <span className='box-title'>pronouns</span>
            <span className='box-value'>0</span>
          </div>
        </div>
      </div>
      <textarea className='text-area' placeholder='paste your text here'></textarea>
      <div className='bottom-result-box'>
        <div className='result-box'>
          <span className='box-title'>Average Reading Time</span>
          <span className='box-value'></span>
        </div>
        <div className='result-box'>
          <span className='box-title'>Longest Word</span>
          <span className='box-value'></span>
        </div>
      </div>
    </div>
  )
}

export default App
