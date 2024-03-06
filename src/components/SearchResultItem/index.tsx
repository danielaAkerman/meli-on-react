import * as React from "react";
import css from "./index.css"

type SearchResultItemProps = {
    pic, title: string,
    price: number
}
export function SearchResultItem(props: SearchResultItemProps) {
    const { pic, title, price } = props
    return <div className={css["search-result-item"]}>
        <div className="search-result-item__picture-container">
            <img src={pic} className="search-result-item__picture"></img>
        </div>

        <div className="search-result-item__data">
            <h2>{title}</h2>
            <h4>$ {price}</h4>
        </div>
    </div>;
}


