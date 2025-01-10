import { useState, useEffect } from 'react';

export function useKey(key, action) {
  useEffect(() => {
    function callback(event) {
      if (event.key === key) {
        action();
      }
    }
    document.addEventListener('keydown', callback);
    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, [action, key]);
}
