import List from "./List";

function App() {

  const fruits = [
    { id: 1, name: "apple", calories: "banana" },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
  ];
  const vegetables = [
    { id: 6, name: "potatoes", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "corn", calories: 63 },
    { id: 9, name: "broccoli", calories: 60 },
  ];

  return (
    <>
    {fruits.length > 0 && <List items = {fruits} category="Fruits"/>}
    {vegetables.length > 0 && <List items = {vegetables} category="Vegetables"/>}
    </>
  );
}

export default App
