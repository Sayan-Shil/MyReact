function FormRadio({value, onChange }) {
  return (
    <div className="form-radio-container">
      <p>Select your gender:</p>

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={value === "male"}   
          onChange={onChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={value === "female"} 
          onChange={onChange}
        />
        Female
      </label>
    </div>
  );
}

export default FormRadio;
