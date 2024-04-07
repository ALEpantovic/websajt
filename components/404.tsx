'use client'
import React, { useEffect } from 'react';
const VALID_URLS = ['/websajt/', '/websajt/Jobs', '/websajt/Contact', '/websajt/Game', '/websajt/Press'];
const RedirectToHomeIfInvalid = () => {
 useEffect(() => {
    const currentPath = window.location.pathname;
    if (!VALID_URLS.includes(currentPath)) {
      window.location.replace('/websajt/');
    }
 }, []);

 return null;
};

export default RedirectToHomeIfInvalid;
