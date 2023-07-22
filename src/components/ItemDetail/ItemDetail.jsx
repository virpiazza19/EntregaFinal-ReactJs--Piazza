import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({ id, name, price, image, category, stock }) => {

    return (
        <div className='CardItemDetails'>
                <h4 className='CardHeaderDetails'>{name}</h4>
            <img src={image} alt={name} className='fotosProductosDetails' />
            <div className='SectionDetails'>
                <p className='InfoDetails'>
                    Precio: ${price}
                </p>
                <p className='InfoDetails'>
                    Categoria: {category}
                </p>
                <p className='InfoDetails'>
                {!stock ? 'Sin Stock Disponible' : `Stock Disponible: ${stock}`}
                </p>
            </div>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
        </div>
    )
}

export default ItemDetail