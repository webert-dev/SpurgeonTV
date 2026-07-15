"use client";

import { useState } from 'react';

export default function SermonTags({ tags, dict }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fallback
  const titleText = dict ? dict.reader.tags : "Themes & Topics Abordados";

  if (!tags || tags.length === 0) return null;

  return (
    <div className="sermon-tags-container">
      <details 
        className="sermon-tags-details" 
        open={isOpen} 
        onToggle={(e) => setIsOpen(e.currentTarget.open)}
      >
        <summary className="sermon-tags-summary">
          <div className="summary-content">
            <span className="summary-icon">
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease'
                }}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
            <span className="summary-text">{titleText}</span>
          </div>
        </summary>
        <div className="sermon-tags-content">
          {tags.map((tag, index) => (
            <span key={index} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </details>
    </div>
  );
}
