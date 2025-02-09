import React from 'react';

interface AppleIconProps {
  className?: string;
}

export function AppleIcon({ className = "w-6 h-6" }: AppleIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.53-3.2 0-1.44.71-2.23.51-3.11-.41C3.93 16.25 4.24 9.35 8.26 9c1.76-.15 2.9 1.05 4.25 1.08 1.34-.03 2.43-1.26 4.25-1.08.73.03 2.76.31 4.07 2.37-3.56 2.19-3 7.39.57 8.97-.5 1.09-1.14 2.08-2.35 2.94zM12.03 8.95c-.14-2.79 2.28-5.14 4.96-4.95.31 2.43-2.18 5.07-4.96 4.95z"/>
    </svg>
  );
}