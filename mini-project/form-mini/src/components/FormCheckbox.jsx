function FormCheckbox({checked, onChange}){
  return(
      <div className="form-checkbox-container">
        <label>
      <input 
      type="checkbox" 
      id="form-check" 
      checked={checked}
      onChange={onChange}/> I am Ready To Fill Up Form
    </label>
    </div>
  )
}

export default FormCheckbox