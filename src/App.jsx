import React,{ useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { numbers ,upperCaseLetters, lowerCaseLetters, specialCharacters } from './characters'

function App() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(8)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  const generateThePassword = () => {

    if(!includeLowercase && !includeUppercase && !includeNumbers && !includeSymbols){
      alert('--all checks are empty--');
      return
    }

    if(passwordLength < 8 || passwordLength > 50){
      alert('Length out of mentioned range');
      return
    }
    let charList = ''

    if(includeLowercase){
      charList = charList + lowerCaseLetters
    }
    if(includeUppercase){
      charList = charList + upperCaseLetters
    }

  if(includeNumbers){
    charList = charList + numbers
  }
  if(includeSymbols){
    charList = charList + specialCharacters
  }

  setPassword(createRandomPassword(charList))
}

const createRandomPassword = (charList) =>{
  let password = ' '
  const charListLength = charList.length

  for(let i = 0; i < passwordLength; i++){
    const charIndex = Math.round(Math.random()*charListLength)
    password = password + charList.charAt(charIndex)
    // charList[charIndex]
  }
  return password
}
const copyToClipboard = () => {
  const text = document.createElement('textarea')
  text.innerText = password
  document.body.appendChild(text)
  text.select()
  document.execCommand('copy')
  text.remove()
  alert('Password copied')
}
const copyPassword = () => {
  copyToClipboard()
}

  return (
    <div className="App">
      <div className="container">
        <div className="generator">
          <h2 className="genHeader">
            Password Generator
          </h2>
          <div className="genPassword">
            <h3>{password}</h3>
            <button onClick={copyPassword} className="copyButton"><i className="fa-solid fa-copy"></i></button>
          </div>

          <div className="form-group" id='passwordLength'>
            <label htmlFor="password-strength">Select Password length(**8-50 characters**)</label>
            <input defaultValue={passwordLength} onChange={(e) => setPasswordLength(e.target.value)}
            type="number" id='password-strength' name='password-strength'/>
          </div>
          <div className="form-group">
            <input checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
             type="checkbox" id='uppercase-letters' name='uppercase-letters'/>
            <label htmlFor="uppercase-letters">Include upper case</label>
          </div>
          <div className="form-group">
            <input 
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
            type="checkbox" id='lowercase-letters' name='lowerrcase-letters'/>
            <label htmlFor="lowerrcase-letters">Include lower case</label>
          </div>
          <div className="form-group">
            <input 
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            type="checkbox" id='include-numbers' name='include-numbers'/>
            <label htmlFor="include-numbers">Include numbers</label>
          </div>
          <div className="form-group">
            <input 
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            type="checkbox" id='include-symbols' name='include-symbols'/>
            <label htmlFor="include-symbols">Include symbols</label>
          </div>
          <button onClick={generateThePassword} className="generatorButton">Generate Password</button>
        </div>
      </div>
    </div>
  )
}

export default App
