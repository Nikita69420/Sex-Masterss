import profilePic from '../assets/a.jpg'
import Button from './ButtonD'

function Card1() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Ambatukam</h2>
            <p className="card-text">Tools collector</p>
            <a className='text' href='http://localhost:5173/Ambatukam.exe'>Download</a>
        </div>
    );
}
export default Card1;