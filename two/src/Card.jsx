import profilePic from './assets/image.png'

function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="This is ignismeow dp image."></img>
            <h2 className='card-title'>Ignismeow</h2>
            <p className='card-text'>I work and learn, I&apos;m still learning and exploring new things. Also I&apos;m excited about new things as well.</p>
        </div>
    );
}

export default Card