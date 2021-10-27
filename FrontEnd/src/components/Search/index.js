import "./index.css";
export default function Search(){

    return(
        <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Songs/Artists</span>
        </label>
        <input
            className="input"
            type="text"
            id="header-search"
            placeholder="Search Songs/Artists"
            name="s" 
        />
        <button className="button"type="submit"><img className="img" src="/download.png"/></button>
    </form>
    );

}