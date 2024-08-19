import Student from "./student.jsx";


function App() {
  return(
    <>
    <Student name = 'Saad' age={30} isStudent={true}/>
    <Student name = 'Asghar' age={36} isStudent={false}/>
    <Student name = 'Asghar' age={36} isStudent={false}/>
    <Student name = 'Larry'/>
    </>
  );
}

export default App
