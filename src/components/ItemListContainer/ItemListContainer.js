import './ItemListContainer.css';

const ItemListContainer = (props) => {
    return (
      <nav className="items">
        <h1>{props.greeting} </h1>
      </nav>
    );
  };
  
  export default ItemListContainer;