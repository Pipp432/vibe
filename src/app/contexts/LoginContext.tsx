'use client'
import { useEffect, Dispatch, ReactNode, Reducer, createContext, useReducer } from 'react';
import { LoginDispatchType, ProfessorType } from '../../../types';

export const LoginContext = createContext(null as unknown as ProfessorType);
export const LoginDispatchContext = createContext<Dispatch<LoginDispatchType>>(null as unknown as Dispatch<LoginDispatchType>);
export function LoginProvider({ children }: { children: ReactNode }) {
  const currentUser = { "emailChula": "", "firstName": "John", "lastName": "Doe", "role": "N/A" }

  const intialLogin: ProfessorType = {
    emailChula: "",
    firstName: "Joe",
    lastName: 'Joe',
    role: 'Joe'
  }
  const loginReducer = (state: ProfessorType, action: LoginDispatchType) => {
    switch (action.type) {
      case 'login':
        return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName, role: action.payload.role, emailChula: action.payload.emailChula }
      default:
        break;
    }
  }
  const [loginState, dispatch] = useReducer<Reducer<any, any>>(loginReducer, intialLogin)

  return (
    <LoginContext.Provider value={loginState}>
      <LoginDispatchContext.Provider value={dispatch}>
        {children}
      </LoginDispatchContext.Provider>
    </LoginContext.Provider>
  )
}
