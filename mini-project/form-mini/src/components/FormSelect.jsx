function FormSelect({value,onChange}){
    return(
        <div className="form-select-container">
            <select 
            name="formSelect" 
            id="form-select"
            value={value}
            onChange={onChange}>
                <option value="">--Choose Option--</option>
                <option value="Option 1">Option1</option>
                <option value="Option 2">Option2</option>
                <option value="Option 3">Option3</option>
            </select>
        </div>
    )
}

export default FormSelect;