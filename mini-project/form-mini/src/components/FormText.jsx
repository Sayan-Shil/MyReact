function FormText({ value, onChange }) {
  return (
    <div className="form-text-container">
      <label htmlFor="form-text">Text: </label>
      <input
        type="text"
        name="text"
        id="form-text"
        placeholder="Enter Your Name"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormText;
