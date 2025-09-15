import React, { createContext, useState } from 'react'
export const NavbarContext = createContext();
const Context = ({children}) => {
    
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
        <NavbarContext.Provider value={{menuOpen, setMenuOpen}}>
            {children}
        </NavbarContext.Provider>
    </div>
  )
}

export default Context