import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchField from './Components/SearchField'

const DEV = true
const apiRoot = DEV ? "http://localhost:8888" : ""

let res = await fetch(apiRoot + "/api/lang/Swedish")
let sw = await res.json()
console.log(sw)
let res1 = await fetch(apiRoot + "/api/lang/english")
let en = await res1.json()
console.log(en)

// myStore.Provider
export const myStore = createContext();
const initialStore = {
  en, sw
}

// initialStore["theme"] = "dark"
// initialStore.language = "CN"
// console.log(initialStore)

// https://github.com/dugalcedo/use-context-tutorial/blob/master/src/examples/Beginner/Beginner.jsx

function App() {
  const [count, setCount] = useState(0)
  // const [lang, setLang] = useState()
  let [store, updateStore] = useState(initialStore)

  // function setLang(lang) {
  //   storeUpdater("language", lang)
  // }

  // function storeUpdater(key, value) {
  //   let updated = { ...store }
  //   updated[key] = value
  //   updateStore(updated)
  // }

  /*
     Backend
        install:
                  mongooose
                  dotenv
                  cors
                  express
        - get your mongo URI
        - call dotenv.config so you have access to process.env
        - call mongoose.connect and pass in your uri
        - make sure you are connecting to the desired database
        - make sure to enable cors via app.use so your front and backend can talk to each other
        - set up a route for getting language data
      Frontend
        - use fetch to request the language data from your backend
  */

  return (
    <myStore.Provider value={[store, updateStore]}>




      <button onClick={() => setLang("SE")}>current langage SE: {store.language}</button>
      <button onClick={() => setLang("EN")}>current langage: {store.language}</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more123123
      </p>

      <SearchField />
    </myStore.Provider>
  )
}

export default App
