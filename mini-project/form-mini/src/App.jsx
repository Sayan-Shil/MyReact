import { useState } from "react";
import "./App.css";
import FormText from "./components/FormText";
import FormCheckbox from "./components/FormCheckbox";
import FormRadio from "./components/FormRadio";
import FormSelect from "./components/FormSelect";
import FormShow from "./components/FormShow";

function App() {
  const [formData,setForm] = useState({
    text: '',
    checkbox: false,
    radio: 'male',
    select: ''
  })

  const [submit, setSubmit] = useState(false)
  const [errorMessage , setErrorMessage] = useState("")
  

  const submitHandler = (e)=> {
      e.preventDefault();
  if(validate(formData.text, formData.checkbox, formData.radio, formData.select)){
    setSubmit(true);
  }
  }

 function validate(text, check, radio, select) {
   if (text === "" || check === false || radio === "" || select === "") {
    setErrorMessage("Please Fill Up Form Properly");
    return false; // ❌ invalid form
  }
  setErrorMessage(""); // clear error if valid
  return true; 
}

  return (
  
    <div>
      <h1 className="form-container">Form Example</h1>
      <form>
        {/* Text Section */}
       <FormText 
       value={formData.text} 
       onChange={(e) => setForm({ ...formData, text: e.target.value })}/>


        {/* CheckBox Section */}
        <FormCheckbox
        checked= {formData.checkbox}
        onChange={(e)=> setForm({...formData, checkbox: e.target.checked})}
        />

        {/* Radio Section */}
        <FormRadio 
        value={formData.radio}
         onChange={(e) => setForm({ ...formData, radio: e.target.value })}/>

        {/* Dropdown Select Section */}
        <FormSelect 
        value={formData.select}
        onChange={(e)=> setForm({...formData, select: e.target.value})}/>

        <button id="form-submit" onClick={submitHandler}>Submit</button>
        <p id="form-error-msg">{errorMessage}</p>
      </form>

      <h1>Form Data</h1>
      <FormShow 
       isSubmit={submit}
       formData={formData}/>
      
    </div>
  );
}

export default App;