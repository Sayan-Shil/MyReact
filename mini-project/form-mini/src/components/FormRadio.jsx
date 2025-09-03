function FormRadio({value, onChange }) {
  return (
    <div className="form-radio-container">
      <p>Select your gender:</p>

      <label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={value === "Male"}   
          onChange={onChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={value === "Female"} 
          onChange={onChange}
        />
        Female
      </label>
    </div>
  );
}

export default FormRadio;
