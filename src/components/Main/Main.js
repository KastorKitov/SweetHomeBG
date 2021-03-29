import style from './Main.module.css';
import Filter from '../Filter/Filter';
import ApartamentPiece from '../ApartamentPiece/ApartamentPiece';

function Main(props) {
    return (
        <main>
            <Filter/>
            <ApartamentPiece/>
            <ApartamentPiece/>
            <ApartamentPiece/>
            <ApartamentPiece/>
            <ApartamentPiece/>
        </main>
    )
}
export default Main;