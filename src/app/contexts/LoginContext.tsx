'use client'
import { Dispatch, ReactNode, createContext, useReducer } from 'react';

const LoginContext = createContext(null);
const LoginDispatchContext = createContext<any>(null);
export function LoginProvider({ children }:{children:ReactNode}) {
  const intialLogin = {name:'John',surname:'Doe'}
  const loginReducer =(state:any,action:any)=>{
    switch (action.type) {
      case 'set':
        
        break;

      default:
        break;
    }
  }
  const [loginState,dispatch] = useReducer(loginReducer,intialLogin)
  
  return (
    <LoginContext.Provider value={loginState}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  )
}
