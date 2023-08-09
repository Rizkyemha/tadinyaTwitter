import PropTypes from 'prop-types'

function ProfileThread({ img, name, email="" }) {
    return (
        <div className='profile'>
            <img src={img} className="profile_img" />
            <div className="profile_body">
                <p className="profile_body_name">{name}</p>
                <p className="profile_body_email">{email === "" ? null : email}</p>
            </div>
        </div>
    )
}

ProfileThread.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string
}

export default ProfileThread