import React, { createContext, useEffect, useRef, useState } from 'react';
import GuessSectionContainer from './components/guessSectionContainer';
import HistoryContainer from './components/historyContainer';
import Guess from './interfaces/guess';

export const GuessClickCallbackContext = createContext((guess: number[]) => {});

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

const getSolution = () => [
  getRandomInt(1, 6),
  getRandomInt(1, 6),
  getRandomInt(1, 6),
  getRandomInt(1, 6),
];

const App = () => {
  const [guessKey, setKey] = useState(0);
  const [guessCount, setGuessCount] = useState(0);
  const [hasGameEnded, setGameEnd] = useState(false);
  const solutionColourCount = useRef<number[]>(Array<number>(6).fill(0));
  const solution = useRef<number[]>(getSolution());
  const guessesMade = useRef<Guess[]>([]);

  useEffect(() => {
    solutionColourCount.current = Array<number>(6).fill(0);
    solution.current.forEach(
      (colourIndex) => solutionColourCount.current[colourIndex]++
    );
    console.log(solution.current);
    console.log(solutionColourCount.current);
    //eslint-disable-next-line
  }, [solution.current]);

  const restartGame = () => {
    setGameEnd(false);
    solution.current = getSolution();
    setGuessCount(0);
    guessesMade.current = [];
    setKey(Math.random());
  };

  const onGuessClick = (guess: number[]) => {
    if (guess.some((colourIndex) => colourIndex === 0)) return;
    setGuessCount(guessCount + 1);
    setKey(Math.random());
    const redCount = guess.filter(
      (colourIndex, positionIndex) =>
        solution.current[positionIndex] === colourIndex
    ).length;
    if (redCount === 4) setGameEnd(true);
    const guessColourCount = Array<number>(6).fill(0);
    guess.forEach((colourIndex) => guessColourCount[colourIndex]++);
    const whiteCount =
      guessColourCount
        .map((colourCount, colourIndex) =>
          Math.min(colourCount, solutionColourCount.current[colourIndex])
        )
        .reduce((whiteCount, current) => whiteCount + current) - redCount;
    guessesMade.current.unshift({
      guess: guess,
      redCount: redCount,
      whiteCount: whiteCount,
    } as Guess);
  };

  return (
    <GuessClickCallbackContext.Provider value={onGuessClick}>
      <h1>Mastermind</h1>
      <h2>
        {hasGameEnded ? `You finished the game!` : `Guess Count: ${guessCount}`}
      </h2>
      <button onClick={restartGame}>Restart Game</button>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <GuessSectionContainer key={guessKey} />
        <HistoryContainer guessHistory={guessesMade.current} />
      </div>
    </GuessClickCallbackContext.Provider>
  );
};

export default App;
