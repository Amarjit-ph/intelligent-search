/*
 * Author: Amarjit Pheiroijam
 * OS : Zorin OS 16 Core
 * Editor : Visual Studio Code 1.64.0
 * Created Date: Tuesday, February 22nd 2022, 11:49:41 pm
 * Year 2022
 */
import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import Alita from './asset/alita-amarjit.png';
import intro from './asset/Intro.mp3';
import enterQs from './asset/question.mp3';
import pulse from './asset/pulse.svg';
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI,
});
const openai = new OpenAIApi(configuration);
const App = () => {
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [play] = useSound(intro, { interrupt: true });
  const [playQuestion] = useSound(enterQs);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [gotAnswer, setGotAnswer] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setProgress(100);
    }, 4000)
  }, [])
  function PlayIntro() {
    play();
    setTimeout(() => {
      setRunning(true);
      setCount(0);
      setAnswer("");
      setGotAnswer(false);
      playQuestion();
    }, 16000)
  }
  function handleSetQuestion(q) {
    setQuestion(q);
  }
  const ask = async () => {
    setProcessing(true);
    if (count > 5) {
      setRunning(false);
      setProcessing(false);
      return;
    } else {
      var c = count + 1;
      setCount(c);
    }
    console.log("Question : ", question);
    const response = await openai.createCompletion("text-davinci-001", {
      prompt: question,
      temperature: 0.3,
      max_tokens: 150,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    });
    setAnswer(response.data.choices[0].text);
    console.log("Answer :", response.data.choices[0].text);
    setGotAnswer(true);
    setProcessing(false);

  }
  return (
    <React.Fragment>
      {running ? <Running pulse={pulse} processing={processing}
        handleSetQuestion={handleSetQuestion}
        ask={ask} answer={answer}
        gotAnswer={gotAnswer} /> :
        <Introduction PlayIntro={PlayIntro} />}
    </React.Fragment>
  );
}


const Introduction = ({ PlayIntro }) => {
  return (
    <div class="grid place-items-center h-screen bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
      <div className='mt-2'>
      </div>
      <div className='text-white text-5xl mt-5 mb-0'>
        Alita
      </div>
      <div className='text-white mt-0 text-lg font-extrabold'>
        KNOWLEDGE ANGEL
      </div>
      <div className='text-white text-center p-4'>
        Alita is a female AI cyborg,<br />
        Revived by Amarjit Pheiroijam,<br /> An Engineer, who realise that she actually has the soul of a teenager.
        Alita is still learning but she will help you create your study notes and find all your answers.
        <br /><br />
        Powered by<br />
        Generative Pre-trained Transformer 3
      </div>
      <div className='max-w-sm'>
        <img src={Alita} onClick={PlayIntro} />
      </div>

    </div >
  )
}

const Running = ({ processing, pulse, handleSetQuestion, ask, answer, gotAnswer }) => {
  return (
    <div class="m-10 h-screen">
      <div className='text-black text-3xl mt-5 mb-0'>
        ALITA
      </div>
      <div className='text-black mt-0 text-md font-bold'>
        Knowledge Angel
      </div>
      <div className='mt-4 mb-2'>Your can ask your question like a normal human being?</div>
      <div>Example : Name any three Indian city?</div>
      <div className='mt-4 mb-2 font-bold'>Please Enter your Question.</div>
      <div><textarea rows="3" name="description" className='bg-gray-200 w-full p-5'
        onChange={(e) => {
          handleSetQuestion(e.target.value);
        }}
        placeholder='Please Enter your Question.'>
      </textarea></div>
      <div className='text-gray-400'>Only 5 Question Per Session,<br />Please be mindful</div>
      {processing ?
        <div className='flex ml-25'>
          <img className="w-16 h-16 " src={pulse} />
          <img className="w-16 h-16 " src={pulse} /> <img className="w-16 h-16 " src={pulse} />
          <img className="w-16 h-16 " src={pulse} /><img className="w-16 h-16 " src={pulse} />
        </div>
        :
        <button class="rounded-full bg-black text-white w-full h-10 mt-5" onClick={ask}>ASK</button>}
      {gotAnswer == true ? <>
        <div className='mt-4 mb-1 font-bold'>Answer: </div>
        <div className='mt-4 mb-2 '>{answer}</div>
      </> : <></>}
    </div >

  );
}
export default App;
