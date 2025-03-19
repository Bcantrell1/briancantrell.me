'use client'

import { useRef } from 'react'
import RacingGame from './RacingGame'
import styles from './gameContainer.module.scss'
import { Link } from '@/i18n/navigation'
import { ArrowLeftSquareIcon, ArrowRightSquareIcon } from 'lucide-react'


export default function GameContainer() {
  const racingGameRef = useRef<any>(null)

  const triggerMove = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      racingGameRef.current?.moveLeft()
    } else {
      racingGameRef.current?.moveRight()
    }
  }

  return (
    <div className={styles.gameContainer}>
      <div className={styles.screws}>
        {Array.from({ length: 4 }).map((_, i) => (
          <span key={i}>x</span>
        ))}
      </div>
      <RacingGame ref={racingGameRef} />
      <div className={styles.gameController}>
        <span className={styles.instructions}>Move the car from left to right to dodge the trees!</span>
        <div className={styles.boardArrows}>
          <span onClick={() => triggerMove('left')}>
            <ArrowLeftSquareIcon />
          </span>
          <span onClick={() => triggerMove('right')}>
            <ArrowRightSquareIcon />
          </span>
        </div>
        <Link
          aria-label="about page"
          href="/about"
        >
          <button className={`${styles.skip} ${styles.buttonStyle} ${styles.primary}`}>
            Continue
          </button>
        </Link>
      </div>
    </div>
  )
}