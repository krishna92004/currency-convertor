import './App.css'
import bgImage from './video/background-img.mp4.mov'
import CurrencyConvertor from './components/currency-convertor'
function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <video autoPlay loop muted>
          <source src={bgImage} type="video/mp4"  />
        </video>
        <div className="container">
       <CurrencyConvertor/>
       </div>
      </div>
    </>
  )
}

export default App
