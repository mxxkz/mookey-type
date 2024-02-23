import React from 'react'
import GeneratedWords from './components/GeneratedWords'
import RestartButton from './components/RestartButton'
import Results from './components/Result'
import Typing from './components/Typing'
import useEngine from './hooks/useEngine'
import { calculateAccuracyPercentage } from './utils/helpers'
import Navbar from './components/Navbar'


const WordsContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative text-3xl leading-relaxed break-all mt-3">
            {children}
        </div>
    )
}

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
    return <h2 className="text-primary-400 font-black font-mono text-2xl self-start">Time: {timeLeft}</h2>
}

const App = () => {
    const { words, typed, timeLeft, errors, state, restart, totalTyped, wpm } =
        useEngine()

    return (
        <div className='flex flex-col gap-10 items-center justify-center'>
            <Navbar />
            <div className='flex flex-col gap-4 p-4 items-center justify-center w-1/2'>
            <CountdownTimer timeLeft={timeLeft} />
            <WordsContainer>
                <GeneratedWords key={words} words={words} />
                <Typing
                    className="absolute inset-0"
                    words={words}
                    userInput={typed}
                />
            </WordsContainer>
            <RestartButton
                className={"mx-auto mt-10 text-slate-500"}
                onRestart={restart}
            />
            <Results
                state={state}
                errors={errors}
                accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
                total={totalTyped}
                wpm={wpm}
            />
            </div>
        </div>
    )
}

export default App
