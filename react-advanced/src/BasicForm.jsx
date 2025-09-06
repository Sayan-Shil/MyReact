import { useEffect, useState } from "react";
import "./App.css";
import { useForm } from "react-hook-form";


function BasicForm() {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //   });

  //   const [error, setError] = useState({});

  //   // Validate
  //   const validate = () => {
  //     const newErrors = {};
  //     if (!formData.name.trim()) {
  //       newErrors.name = "Name is Required";
  //     }
  //     return newErrors;
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     const validationErrors = validate();
  //     if (Object.keys(validationErrors).length > 0) {
  //       setError(validationErrors);
  //       return;
  //     }

  //     console.log(
  //       `Form Data Submitted with ${formData.name} & ${formData.email}`
  //     );
  //   };

  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   if(error[name]){
  //     const newErrors = {...error};
  //     delete newErrors[name];
  //     setError(newErrors)
  //   }

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const watchedName = watch("name");
  const watchedEmail = watch("email");

  useEffect(() => {
    console.log(`Name Value ${watchedName}`);
  }, [watchedName]);

  useEffect(() => {
    console.log(`Email Value ${watchedEmail}`);
  }, [watchedEmail]);


  const existingUsernames = ['admin','user123','Sayan Shil']

  const checkIfUsernameExist = async (username) => {
    // API call and boolean call
    await new Promise(resolve => setTimeout(resolve,1000))
    return existingUsernames.includes(username);
  }

  return (
    // // BASIC Form -----------------------------
    // <div>
    //   <h1>Forms in React</h1>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Name:
    //       <input
    //         type="text"
    //         name="name"
    //         value={formData.name}
    //         onChange={handleChange}
    //       />
    //       {error.name && <span>{error.name}</span>}
    //     </label>

    //     <label>
    //       Email:
    //       <input
    //         type="text"
    //         name="email"
    //         value={formData.email}
    //         onChange={handleChange}
    //       />
    //     </label>

    //     <button type="submit">Submit</button>
    //   </form>
    // </div>

    // React-Hook Form -------------------->

    <div>
     <h1 className="font-bold text-5xl">Forms in React</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input
            {...register("name", {
              required: " Name is required",
              minLength: { value: 5, message: "must be at least 5" },
              validate: {
                notAdmin: (value) => value!== "admin" || "Admin is not allowed",
                isNotNumber: (value) => isNaN(value) || "Name can't be number" ,
                checkUsername : async (value) => {
                    const exist = await checkIfUsernameExist(value);
                    return !exist || "Username already exists";
                }
              }
            })}
          />
        </label>
        {errors.name && <p>{errors.name.message}</p>}

        <label>
          Email:
          <input {...register("email", { required: "Email is required" })} />
        </label>
        {errors.email && <p>{errors.email.message}</p>}

        <button type="submit">Submit</button>
        <button type="button" onClick={()=> reset()}>
          Reset
        </button>
      </form>
    </div>
  );
}

export default BasicForm;
