import React from 'react';

interface ZelleIconProps {
  className?: string;
}

export function ZelleIcon({ className = "w-6 h-6" }: ZelleIconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.33 1.77-.58 1.57-1.6 1.57s-1.2-.83-1.2-.83l-2.79-3.14c-.32-.35-.48-.52-.16-.84l3.2-3.2c.35-.35.44-.44.26-.44s-.35.09-.61.35L9.3 12.77c-.79.79-1.34.75-1.74.61L6.29 13c-.35-.09-.35-.44 0-.7l7.49-4.41c.35-.22.89-.48 1.5-.48.62 0 1.5.26 1.36 1.39z"/>
    </svg>
  );
}