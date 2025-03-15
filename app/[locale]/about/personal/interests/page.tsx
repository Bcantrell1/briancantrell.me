'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from './interests.module.scss';

export default function InterestsPage() {
  const t = useTranslations('AboutPage.personal');
  const interestsContainer = useRef<HTMLDivElement>(null);

  // Drag handling state and functions
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
    if (interestsContainer.current) {
      setScrollTop(interestsContainer.current.scrollTop);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const y = e.clientY;
    const deltaY = y - startY;
    if (interestsContainer.current) {
      interestsContainer.current.scrollTop = scrollTop - deltaY;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      ref={interestsContainer}
      className={styles.interestsContainer}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={styles.interestsContent}>
        <h1>My Interests & Passions</h1>
        
        <p>Beyond coding and technology, I have several interests that keep me balanced and inspired:</p>
        
        <h2>🎮 Gaming</h2>
        <p>I enjoy both casual and competitive gaming, with a particular interest in strategy and role-playing games. Gaming provides me with problem-solving challenges in a different context than programming.</p>
        
        <h2>📚 Learning & Reading</h2>
        <p>I'm constantly expanding my knowledge through books, online courses, and tutorials. My reading interests span from technical materials to science fiction and philosophy.</p>
        
        <h2>🏃‍♂️ Fitness & Wellbeing</h2>
        <p>Maintaining physical health is important to me. I regularly practice:</p>
        <ul>
          <li>Running</li>
          <li>Strength training</li>
          <li>Meditation for mental clarity</li>
        </ul>
        
        <h2>🌱 Sustainable Living</h2>
        <p>I'm passionate about environmentally friendly practices and try to incorporate sustainability into my daily life through conscious consumption and waste reduction.</p>
        
        <h2>🎵 Music</h2>
        <p>Whether it's discovering new artists or playing instruments, music has always been a significant part of my life. I particularly enjoy ambient and electronic genres while coding.</p>
      </div>
    </div>
  );
}