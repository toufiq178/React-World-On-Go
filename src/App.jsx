import { Suspense } from 'react'
import './App.css'
import Countries from './Components/Countries/Countries'


const countriesPromise = fetch("https://openapi.programming-hero.com/api/all")
  .then(res => res.json())

function App() {

  return (


    <>

      <Suspense fallback={<p>Loading...</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>

      <h1>hello react</h1>

    </>
  )
}

export default App
