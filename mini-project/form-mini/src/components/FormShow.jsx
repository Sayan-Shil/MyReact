function FormShow({isSubmit,formData}){
    return(
        isSubmit 
        ? 
      <div className="form-show-container">
            <p><strong>Text: {formData.text}</strong></p>
            <p><strong>CheckBox: {formData.checkbox===true ? "True" : "False"}</strong></p>
            <p><strong>Radio: {formData.radio}</strong></p>
            <p><strong>Select: {formData.select}</strong></p>
  
        </div>
        :
         null
    )
}

export default FormShow;