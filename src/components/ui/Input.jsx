
const Input = ({ label,setState,state, icon='', type='text' }) => {
  return (
    <div className="mb-3 input-group">
        <input type={ type } name={label} className="form-control" id="floatingInput" placeholder={ label } value={state} onChange={(e) => setState(e.target.value)} />
      <span className="input-group-text" id="addon-wrapping">
        { icon }
      </span>
        
    </div>
  )
}

export default Input