import './ItemListContainer.css';
import CartWidget from '../CartWidget/CartWidget'


const ItemListContainer = (props) => {
    return (
      <main>
        <div class="divIndex"> 
        <CartWidget totalNumber={0} />
        <h1>{props.greeting} </h1>
      </div>
      </main>
    );
  };
  
  export default ItemListContainer;