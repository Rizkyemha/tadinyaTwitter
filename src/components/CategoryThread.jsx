import PropTypes from 'prop-types'

function CategoryThread({ categorys }) {
    return (
        <div className='categorys'>
            {
                !categorys.length === 0 ? <p>Tidak ada category</p> : categorys.map((category) => <p key={category}>{category} </p>)
            }
        </div>
    )
}

CategoryThread.propTypes = {
    categorys: PropTypes.array.isRequired
}


export default CategoryThread