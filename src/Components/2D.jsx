import profilePic from '../assets/a.jpg'
import Button from './ButtonD'

function Card1() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Ambatukam</h2>
            <p className="card-text">Tools collector</p>
            <a className='text' href='https://cdn.discordapp.com/attachments/1290660645695520808/1299488668339277884/Ambatukam.exe?ex=671f5ce1&is=671e0b61&hm=ca40b8313290b29618bbf62947039f2c3bb0663295a25f2e27a7cd7579004325&'>Download</a>
        </div>
    );
}
export default Card1;
