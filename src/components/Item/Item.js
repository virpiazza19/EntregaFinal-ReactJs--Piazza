import './Item.css'

const Item = ({ id, name, price, image, stock }) => {

    return (
        <article className='CardItem'>
            <header className='CardHeader'>
                <h4>{name}</h4>
            </header>
            <img src={image} alt={name} className='fotosProductos' />
            <section>
                <p className='Info'>
                    Price: ${price}
                </p>
                <p className='Info'>
                    Available Stock: {stock}
                </p>
            </section>
            <button className='Option'>See Details</button>
        </article>
    )
}

export default Item