import style from './Filter.module.css';

function Filter(props) {
    return (
        <main className={style.wrap}>
            <form action="/" className="search" method="GET">
            <input type="number" name="from" className={style.searchPrice} placeholder="Price from..."/>
        <input type="number" name="to" className={style.searchPrice} placeholder="Price to..."/>
        <span className="input">
            <select type="text" className={style.searchBar} name="category">
                <option value="1">One Room</option>
                <option value="2">Two Rooms</option>
                <option value="3">Three Rooms</option>
            </select>
        </span>
        <input type="text" className={style.searchTerm} name="search" placeholder="Search..."/>
        <input type="submit" className={style.searchButton} value="O"/>
      </form>
        </main>
    )
};

export default Filter;