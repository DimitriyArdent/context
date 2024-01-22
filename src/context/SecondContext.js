import { createContext,   useState  } from 'react';

export const secondContext = createContext(undefined)

export function SecondContextProvider({children}){
    const[user, setUser] = useState({
        name:'John',
        secondName: 'Doe'
    })

    return <secondContext.Provider value={{user, setUser}}>
            {children}
         </secondContext.Provider>
}