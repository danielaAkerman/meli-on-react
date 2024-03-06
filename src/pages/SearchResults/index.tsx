import React, { useEffect, useState } from "react";
import { SearchResultItem } from "../../components/SearchResultItem";
import { useSearchResults } from "../../hooks"
import css from "./index.css"

export function SearchResults() {

    const results = useSearchResults()

    return <div className={css.searchresults}>
        {results.map((r) =>

            <SearchResultItem
                key={r.id}
                title={r.title}
                price={Math.floor(r.price)}
                pic={r.thumbnail}
            />
        )}
    </div>

}


