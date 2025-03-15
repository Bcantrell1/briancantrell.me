'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import styles from './milestones.module.scss';

export default function MilestonesPage() {
  const t = useTranslations('AboutPage.personal');
  const milestonesContainer = useRef<HTMLDivElement>(null);

  // Drag handling state and functions
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
    if (milestonesContainer.current) {
      setScrollTop(milestonesContainer.current.scrollTop);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const y = e.clientY;
    const deltaY = y - startY;
    if (milestonesContainer.current) {
      milestonesContainer.current.scrollTop = scrollTop - deltaY;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div 
      ref={milestonesContainer}
      className={styles.milestonesContainer}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className={styles.milestonesContent}>
        <h1>Personal Milestones</h1>
        
        <p>A timeline of significant moments and achievements in my personal journey:</p>
        
        <h2>🎓 2019</h2>
        <p><strong>Graduated from Grand Canyon University</strong><br />
        Completed my Bachelor's degree in Computer Science with honors, establishing the foundation for my career in software engineering.</p>
        
        <h2>🚀 2020</h2>
        <p><strong>First Open Source Contribution</strong><br />
        Made my first significant contribution to an open-source project, which was accepted and merged into the main codebase. This was a pivotal moment that connected me to the broader developer community.</p>
        
        <h2>🏆 2021</h2>
        <p><strong>Completed First Major Project</strong><br />
        Built and launched my first complete web application from scratch, overcoming numerous technical challenges and learning invaluable lessons about the software development lifecycle.</p>
        
        <h2>💼 2022</h2>
        <p><strong>Career Transition</strong><br />
        Made a significant pivot in my career path, focusing exclusively on modern web technologies and diving deeper into the JavaScript ecosystem.</p>
        
        <h2>🌱 2023</h2>
        <p><strong>Mentorship & Community</strong><br />
        Began mentoring junior developers and became more active in local tech meetups, finding fulfillment in helping others grow their skills while continuing to develop my own.</p>
        
        <h2>🔍 2024</h2>
        <p><strong>Personal Growth & Balance</strong><br />
        Achieved a better work-life balance while continuing to expand my technical skills, focusing on sustainable career growth and personal wellbeing.</p>
        
        <h2>🚶‍♂️ Present</h2>
        <p><strong>Continuous Learning Journey</strong><br />
        Currently focused on mastering advanced concepts in web development and exploring emerging technologies while building meaningful projects.</p>
      </div>
    </div>
  );
}