'use client'
import React, { useEffect } from 'react';

const VALID_URLS = ['/', '/Jobs', '/Contact','/Game','/Press']; 
const RedirectToHomeIfInvalid = () => {
 useEffect(() => {
    const currentPath = window.location.pathname;
    if (!VALID_URLS.includes(currentPath)) {
      window.location.replace('/');
    }
 }, []);

 return null;
};

export default RedirectToHomeIfInvalid;