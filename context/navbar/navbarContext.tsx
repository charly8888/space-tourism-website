import { createContext, FC, useState } from "react";

interface Context {
  navbar : boolean;
  setNavbar: (value: boolean) => void;
}

export const navbarContext = createContext({} as Context )

export const NavbarProvider:FC = ({children})=>{
  const [navbar, setNavbar] = useState(false)
  
  return(
    <navbarContext.Provider value={{navbar, setNavbar}}>
      {children}
    </navbarContext.Provider>
  )
}