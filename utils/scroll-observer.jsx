import React, { useCallback, useState, useEffect } from "react"


  interface ScrollValue {
      scrollY
  }

export const ScrollContext = createContext({
    ScrollValue(scrollY=0)});

export function ScrollObserver ({
    children,
  }) {
const [scrollY, setScrollY]= useState(0)
const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
}, [])

useEffect(() => {

}, [handleScroll])
return( <ScrollContext.Provider valu)
  }