import React from "react";
import { useSearchResults } from "../../hooks";

export function Header() {
    const results = useSearchResults()
    return <div className="header" >
        HEADER Results: {results.length}
    </div>;
}


