import React, { useRef, useContext } from 'react';

interface WrapperProps {
  numOfPages: number;
}

interface TileContextValue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext =
  createContext(TileContextValue)
  {
    numOfPages: 0,
  };
