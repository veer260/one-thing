

//react import
import { useState } from 'react'

import CustomForm from './Components/CustomForm';
import OneThing from './Components/OneThing';

import JSConfetti from 'js-confetti'

const jsConfetti = new JSConfetti()

import './App.css'

function getSuccessMessage() {
  const message = ["Congrats!", "Great Job!", "Dont you feel great?!", "Up, Up and Up!", "Um..Okay!", "Did you though ?!", "Don't feel like you tried your best ..!", "FAget bout it!"];
  return message[Math.floor(Math.random() * message.length)];
}

function App() {
  
  const [formValue, setFormValue] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCompleted(true);
  }

  const handleInput = (e) => {
    setFormValue(e.target.value);
  }

  const handleCompletedThings = async(e) => {
    console.log('runnign');
    e.target.setAttribute('disabled', true);
    setFormValue(getSuccessMessage());
    await jsConfetti.addConfetti({
      // emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸']
    });

    setIsCompleted(false);
    setFormValue("");


  }

  return (
    <main className="grid place-items-center min-h-screen bg-gradient-to-b from-slate-100 to-slate-200 dark:form-slate-800    dark:to-slate-900 text-slate-900 dark:text-slate-200">
      
        <div className='grid place-items-center gap-8 m-8'>
        {!isCompleted && <CustomForm handleInput={handleInput}  handleSubmit={handleSubmit} formValue={formValue} />
        }

        {
          isCompleted && <OneThing formValue={formValue} handleCompletedThings={handleCompletedThings} />
        }
        </div>
    </main>
  )
}

export default App
