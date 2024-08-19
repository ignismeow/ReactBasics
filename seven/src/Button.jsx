
function Button(){
    
    const handleClick = (e) => e.target.textContent = "OUCH!🤬";

    return(<button onDoubleClick={(e) => handleClick(e)}>Click me🤗</button>);
}

export default Button