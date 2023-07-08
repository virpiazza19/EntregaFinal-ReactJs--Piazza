import './ItemListContainer.css';

const ItemListContainer = (props) => {
  return (
    <main>
      <div class="divIndex">
        <h1>{props.greeting} </h1>
      </div>
    </main>
  );
};

export default ItemListContainer;