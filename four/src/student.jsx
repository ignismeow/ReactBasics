import PropTypes from 'prop-types';

function Student(props){
    return(
        <div className='student'>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes": "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string.isRequired, // 'name' is now required and must be a string
    age: PropTypes.number,             // 'age' is optional but should be a number if provided
    isStudent: PropTypes.bool          // 'isStudent' is optional but should be a boolean if provided
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Student