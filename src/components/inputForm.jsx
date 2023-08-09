import Proptypes from 'prop-types'

function InputTypeText({ value ="", setValue="", placeHolder }) {
    return <input type="text" value={value} onChange={ (event) => setValue(event.target.value) } placeholder={placeHolder} />;
}

function InputTypePassword({ value = "", setValue, placeHolder }) {
    return <input type="password" value={value} onChange={ (event) => setValue(event.target.value) } placeholder={placeHolder} />;
}

function InputTypeTextarea({ value = "", setValue, placeHolder }) {
    return <textarea type="text" value={value} onChange={ (event) => setValue(event.target.value) } placeholder={placeHolder} />;
}

InputTypePassword.propTypes = {
    value: Proptypes.string.isRequired,
    setValue: Proptypes.func,
    placeHolder: Proptypes.string.isRequired
}

InputTypeText.propTypes = {
    value: Proptypes.string.isRequired,
    setValue: Proptypes.func,
    placeHolder: Proptypes.string.isRequired
}

InputTypeTextarea.propTypes = {
    value: Proptypes.string.isRequired,
    setValue: Proptypes.func,
    placeHolder: Proptypes.string.isRequired
}

export { InputTypeText, InputTypePassword, InputTypeTextarea };
