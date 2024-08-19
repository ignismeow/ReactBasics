import PropTypes from "prop-types"

function List(props) {
//   fruits.sort((a, b) =>a.name.localeCompare(b.name)); //Alphabatical
//   fruits.sort((a, b) =>b.name.localeCompare(a.name)); //Reverse Alphabatical
//   fruits.sort((a, b) => a.calories - b.calories) //Numeric Order
//   fruits.sort((a, b) => b.calories - a.calories) //Reverse Numeric Order

//   const lowCalFruits = fruits.filter(fruit => fruit.calories < 100) //lowCalFruits
//   const highCalFruits = fruits.filter(fruit => fruit.calories > 100) //lowCalFruits
    const category = props.category;
    const itemList = props.items;


  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return(
    <>
    <h3 className="list-category">{category}</h3>
    <ol className="list-items">{listItems}</ol>
    </>
  );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List;
