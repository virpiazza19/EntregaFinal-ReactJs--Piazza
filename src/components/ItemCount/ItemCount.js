import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, serQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            serQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            serQuantity(quantity - 1)
        }
    }

    return (
        <div className='Counter'>
            <div className='Controls'>
                <button className='Button' disabled={!stock} onClick={decrement}>-</button>
                <h4 className='Number'>{!stock ? '-' : quantity}</h4>
                <button className='Button' disabled={!stock} onClick={increment}>+</button>
            </div>
            <div>
                <button className='carritoButton' onClick={() => onAdd(quantity)} disabled={!stock}>Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount;

