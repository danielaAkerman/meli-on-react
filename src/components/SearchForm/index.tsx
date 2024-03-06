import React from "react";
import { useNavigate } from "react-router-dom"
import { useSearchResults } from "../../hooks";

export function SearchForm() {
    const navigate = useNavigate()
    const results = useSearchResults()

    const handleSubmit = (e) => {
        e.preventDefault()
        const query = e.target.search.value
        navigate("/search/" + query, { replace: true })

    }
    console.log(useSearchResults.length)
    return <form className="search-form" onSubmit={handleSubmit}>
        <input name="search" />
        <button>BUSCAR</button>
        <div>Resultados: {results.length}</div>
    </form>;
}

