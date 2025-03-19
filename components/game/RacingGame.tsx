'use client'

import { useState, useEffect, useImperativeHandle, forwardRef, useCallback } from 'react'
import styles from './racingGame.module.scss'

type Position = { x: number; y: number }

const GRID_WIDTH = 20
const GRID_HEIGHT = 34
const OBSTACLE_COUNT = 20
const MOVE_INTERVAL = 150

function generateTrees(): Position[] {
  const trees: Position[] = [];
  while (trees.length < OBSTACLE_COUNT) {
    const x = Math.floor(Math.random() * GRID_WIDTH) + 1;
    const y = Math.floor(Math.random() * (GRID_HEIGHT - 8)) + 1;
    if (!trees.some(tree => tree.x === x && tree.y === y)) {
      trees.push({ x, y });
    }
  }
  return trees;
}

const RacingGame = forwardRef((props, ref) => {
  const [car, setCar] = useState<Position>({ x: 10, y: GRID_HEIGHT })
  const [trees, setTrees] = useState<Position[]>([])
  const [gameStarted, setGameStarted] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [win, setWin] = useState(false)
  const [lastMoveTime, setLastMoveTime] = useState(0)

  const moveLeft = useCallback(() => {
    if (gameStarted && !gameOver && car.x > 1) {
      setCar(prev => ({ ...prev, x: prev.x - 1 }))
    }
  }, [gameStarted, gameOver, car.x])

  const moveRight = useCallback(() => {
    if (gameStarted && !gameOver && car.x < GRID_WIDTH) {
      setCar(prev => ({ ...prev, x: prev.x + 1 }))
    }
  }, [gameStarted, gameOver, car.x])

  const startGame = useCallback(() => {
    setCar({ x: 10, y: GRID_HEIGHT })
    setTrees(generateTrees())
    setGameStarted(true)
    setGameOver(false)
    setWin(false)
    setLastMoveTime(0)
  }, [])

  useImperativeHandle(ref, () => ({
    moveLeft,
    moveRight,
    startGame
  }), [moveLeft, moveRight, startGame])

  useEffect(() => {
    if (!gameStarted || gameOver) return

    let animationFrameId: number
    let lastTimestamp = 0

    const gameLoop = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp
      
      if (timestamp - lastMoveTime >= MOVE_INTERVAL) {
        setCar(prev => {
          const newY = prev.y - 1
          if (newY < 1) {
            setWin(true)
            setGameOver(true)
            return prev
          }
          if (trees.some(tree => tree.x === prev.x && tree.y === newY)) {
            setGameOver(true)
            return prev
          }
          setLastMoveTime(timestamp)
          return { ...prev, y: newY }
        })
      }
      
      animationFrameId = requestAnimationFrame(gameLoop)
    }
    
    animationFrameId = requestAnimationFrame(gameLoop)
    
    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [gameStarted, gameOver, trees, lastMoveTime])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!gameStarted || gameOver) return
      
      if (event.key === 'ArrowLeft') {
        moveLeft()
      } else if (event.key === 'ArrowRight') {
        moveRight()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [gameStarted, gameOver, moveLeft, moveRight])

  const rowsToFinish = car.y - 1

  return (
    <div className={styles.gameScreen}>
      <div className={styles.scores}>
        {gameStarted && !gameOver && <p>Rows to finish: {rowsToFinish}</p>}
      </div>
      <div className={styles.outcomeDisplay}>
        {!gameStarted && !gameOver && (
          <button onClick={startGame}>Start Game</button>
        )}
        {gameOver && (
          <p className={styles.outcome}>{win ? 'You Win!' : 'Game Over'}</p>
        )}
        {gameOver && (
          <div
            className={styles.congrats}
            onClick={startGame}
          >
            Play Again
          </div>
        )}
      </div>
      <div className={styles.grid}>
        {trees.map((tree, index) => (
          <div
            key={index}
            className={styles.tree}
            style={{ gridColumn: tree.x, gridRow: tree.y }}
          />
        ))}
        <div
          className={styles.car}
          style={{ gridColumn: car.x, gridRow: car.y }}
        />
      </div>
    </div>
  )
})

export default RacingGame