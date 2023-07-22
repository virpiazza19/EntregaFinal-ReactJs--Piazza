import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, name, price, image, category, stock }) => {

    return (
        <article className='CardItemDetails'>
            <header className='CardHeaderDetails'>
                <h4>{name}</h4>
            </header>
            <img src={image} alt={name} className='fotosProductosDetails' />
            <section className='SectionDetails'>
                <p className='InfoDetails'>
                    Precio: ${price}
                </p>
                <p className='InfoDetails'>
                    Categoria: {category}
                </p>
                <p className='InfoDetails'>
                    Stock Disponible: {stock}
                </p>
            </section>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
        </article>
    )
}

export default ItemDetail