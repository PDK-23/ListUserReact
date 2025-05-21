import React, { useEffect, useState } from 'react';

const DevToolDetector = ({ children }) => {
  const [isDevToolOpen, setIsDevToolOpen] = useState(false);

  useEffect(() => {
    // Function to detect if DevTools is open
    const detectDevTools = () => {
      // Method 1: Using window size difference (most reliable)
      const widthThreshold = window.outerWidth - window.innerWidth > 160;
      const heightThreshold = window.outerHeight - window.innerHeight > 160;
      
      // Method 2: Check if dev tools are likely open
      if (widthThreshold || heightThreshold) {
        if (!isDevToolOpen) {
          setIsDevToolOpen(true);
          // Navigate to a 404 error page when dev tools are detected
          window.location.href = "/404.html?blocked=devtools";
        }
      }
    };

    // Disable various context menus and keyboard shortcuts
    const disableRightClick = (e) => {
      e.preventDefault();
      return false;
    };
    
    const disableDevToolsKeys = (e) => {
      // Block F12 key
      if (e.key === 'F12' || 
          // Block Ctrl+Shift+I (Chrome, Edge, Firefox)
          (e.ctrlKey && e.shiftKey && e.key === 'I') ||
          // Block Ctrl+Shift+J (Chrome, Edge)
          (e.ctrlKey && e.shiftKey && e.key === 'J') ||
          // Block Ctrl+Shift+C (Chrome, Edge, Firefox)
          (e.ctrlKey && e.shiftKey && e.key === 'C') ||
          // Block Ctrl+Shift+K (Firefox)
          (e.ctrlKey && e.shiftKey && e.key === 'K') ||
          // Block Ctrl+Option+I (Mac)
          (e.ctrlKey && e.altKey && e.key === 'I')) {
        e.preventDefault();
        window.location.href = "/404.html?blocked=Web-Name";
        return false;
      }
    };

    // Handle visibility change (possible dev tools focus)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTimeout(detectDevTools, 100);
      }
    };

    // Continuously check for dev tools
    const checkInterval = setInterval(detectDevTools, 1000);
    
    // Add event listeners
    document.addEventListener('visibilitychange', handleVisibilityChange);
    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableDevToolsKeys);
    window.addEventListener('resize', detectDevTools);
    
    // Simple console warning
    console.warn('This application has security measures that prevent developer tools usage.');

    return () => {
      clearInterval(checkInterval);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableDevToolsKeys);
      window.removeEventListener('resize', detectDevTools);
    };
  }, [isDevToolOpen]);

  // Only render children if dev tools aren't open
  return children;
};

export default DevToolDetector; 