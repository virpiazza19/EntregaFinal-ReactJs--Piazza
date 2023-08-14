import { useState, useEffect } from "react"
import { getProductById } from "../../services/firebase"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import './ItemDetailContainer.css'

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
    <div className="ItemDetailContainer">
      <h1 className="h1DetailsTitulo">{greeting} </h1>
      <div className="ItemDetailDiv">
        <ItemDetail {...product} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;