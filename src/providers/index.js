import React from 'react';

export const NavContext = React.createContext(null);

export const useNav = () => React.useContext(NavContext);
