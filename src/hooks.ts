import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { atom, selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"



const queryAtom = atom({
    key: 'query',
    default: '',
});

const resultsSelector = selector({
    key: 'queryValue',
    get: async ({ get }) => {
        const queryValue = get(queryAtom);
        if (queryValue) {
            const res = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=" + queryValue)
            const data = await res.json()

            return (data.results)
        }
        return [];
    },
});






export function useSearchResults() {
    // cuando cambie la query (url) le aviso a recoil (queryAtom) con un setter, el Selector escucha y hace la llamada
    const { query } = useParams()

    const setQueryValue = useSetRecoilState(queryAtom)
    const results = useRecoilValue(resultsSelector)

    useEffect(() => { setQueryValue(query) }, [query])

    return results
}

// 1= Escuchar params en url
// 2= Avisarle al Atom
// 3= El Selector se entera, dispara la llamada a la API y devuelve los results                                     