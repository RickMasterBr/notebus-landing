import React from 'react';

export interface PhoneFrameProps {
  children: React.ReactNode;
  time?: string;
  className?: string;
  dark?: boolean;
}

export function PhoneFrame({ children, time = '08:14', className = '', dark = false }: PhoneFrameProps) {
  return (
    <div className={`phone-frame ${dark ? 'phone-frame--dark' : ''} ${className}`}>
      {/* Dynamic Island / Top Speaker */}
      <div className="phone-island">
        <div className="phone-island-camera" />
      </div>

      {/* iOS Status Bar */}
      <div className="phone-status-bar">
        <span className="phone-time num-tabular">{time}</span>
        <div className="phone-icons">
          {/* Signal */}
          <svg width="15" height="11" viewBox="0 0 15 11" fill="currentColor">
            <rect x="0" y="8" width="2.5" height="3" rx="0.5" />
            <rect x="4" y="5" width="2.5" height="6" rx="0.5" />
            <rect x="8" y="2.5" width="2.5" height="8.5" rx="0.5" />
            <rect x="12" y="0" width="2.5" height="11" rx="0.5" opacity="0.4" />
          </svg>
          {/* Wifi */}
          <svg width="14" height="11" viewBox="0 0 14 11" fill="currentColor">
            <path d="M7 10.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z" />
            <path d="M3.7 6.3a4.7 4.7 0 0 1 6.6 0 .9.9 0 0 0 1.3-1.3 6.5 6.5 0 0 0-9.2 0 .9.9 0 0 0 1.3 1.3Z" />
            <path d="M1.2 3.8a8.3 8.3 0 0 1 11.6 0 .9.9 0 0 0 1.3-1.3A10.1 10.1 0 0 0 0 2.5a.9.9 0 1 0 1.2 1.3Z" />
          </svg>
          {/* Battery */}
          <svg width="22" height="11" viewBox="0 0 22 11" fill="currentColor">
            <rect x="0" y="0.5" width="19" height="10" rx="3" stroke="currentColor" strokeWidth="1" fill="none" />
            <rect x="2" y="2.5" width="14" height="6" rx="1.5" />
            <path d="M20.5 4v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Screen Content */}
      <div className="phone-screen">
        {children}
      </div>

      {/* iOS Home Indicator */}
      <div className="phone-home-indicator">
        <div className="phone-home-bar" />
      </div>
    </div>
  );
}
