import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({ greeting }) => {

    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(() => {
        getProductById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [itemId])

    return (
    <div className='ItemDetailContainer'>
        <h1 className="h1Titulo">{greeting} </h1>
        <div className='ItemDetailDiv'><ItemDetail {...product} /></div>
    </div>)
}

export default ItemDetailContainer