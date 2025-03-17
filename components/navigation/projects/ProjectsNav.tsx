'use client';

import React from 'react';
import FoldableTab from '@/components/global/FoldableTab';

interface SidebarToggleProps {
  onToggleSidebar: () => void;
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ onToggleSidebar }) => {
  const handleToggle = () => {
    onToggleSidebar();
  };

  return (
    <FoldableTab hasLine={true} onToggle={handleToggle}>
      <p>projects</p>
    </FoldableTab>
  );
};

export default SidebarToggle;