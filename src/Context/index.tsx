import React,{createContext,  useEffect, useState} from 'react';
import { PropsContext } from './Models';
import api from '../Utils/axios'
export const Context = createContext({});


const ContextProvider:React.FC<PropsContext>=({
    children,
    results
})=>{
    const [pokemonValue, setPokemonValue] = useState([])
    useEffect(() => {

        async function getResponse() {

            try {
                const response = await api.get(`/api/v2/pokemon`)
                setPokemonValue(response.data) 
                console.log('test ',response.data)
               
            } catch (error) {
              alert('error from api')

            }
        }
        getResponse();

    }, [])


 return(
     <Context.Provider value={pokemonValue}>
         {children}
     </Context.Provider>
 )
}
export default ContextProvider;
