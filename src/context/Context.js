import { createContext, useContext, useState  } from 'react';


export const MainContext = createContext(null);

 



export default function  MainContextProvider({children}){
    const [text, setText] = useState('abc')

    return <MainContext.Provider  value = {{text, setText}}>
            
                {children}
            

           </MainContext.Provider>
}

 