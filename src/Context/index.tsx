import React,{createContext,  useEffect, useState} from 'react';
import api from '../Utils/axios'
export const Context = createContext({});

function ContextProvider({children}){
    const [pokemonValue, setPokemonValue] = useState([])
    useEffect(() => {

        async function getResponse() {

            try {
                const response = await api.get(`/api/v2/pokemon`)
                setPokemonValue(response.data) 
                console.log('test ',response.data)
               // https://pokeapi.co/api/v2/pokemon
               // ?offset=20&limit=20
               

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
