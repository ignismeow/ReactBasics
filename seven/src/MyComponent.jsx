import {useState} from "react"

function MyComponent(){

    let [name, setName] = useState("Guest");
    let [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () =>{
       setName("Ignis")
    }

    const incrementAge = () =>{
       setAge(age + 1)
    }

    const toogleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is Employed: {isEmployed ? "Yes": "No"}</p>
        <button onClick={toogleEmployedStatus}>Toggle Status</button>
    </div>)
}

export default MyComponent