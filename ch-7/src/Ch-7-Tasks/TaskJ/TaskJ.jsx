import React, { useState } from 'react'
import "./TaskJ.css"
import * as yup from 'yup';

export default function TaskJ() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        description: "",
        gender: "",
        dob: "",
        country: "",
        website: "",
        hobbie: [],
    })
    //error
    const [errors, setErrors] = useState();

    const validationSchema = yup.object({
        firstName: yup.string().required("First Name is required").min(3, "Firstname length is min 3 letter"),
        lastName: yup.string().required("last Name is required").min(3, "Lastname length is min 3 letter"),
        email: yup.string().email("Invalid Email Formate").required("Email is required"),
        description: yup.string().required("Description is required"),
        country: yup.string().required("Please Select Country"),
        website: yup.string().url().required("Website linke is required"),
        hobbie: yup.array().min(1, "at least 1 hobbie is required").required("please select Hobbie"),
        dob: yup.date().required("DOB is required"),
        gender: yup.string().required('Gender is required'),
    })

    const handelInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })

    }
    const handelCheckboxChange = (e) => {
        const { name, checked } = e.target;
        let updatedHobbies = [...formData.hobbie];
        if (checked) {
            updatedHobbies.push(name);
        } else {
            updatedHobbies = updatedHobbies.filter((hobbies) => hobbies !== name);
        }
        setFormData({
            ...formData,
            hobbie: updatedHobbies,
        })
    }
    const handleRadioChange = (e) => {
        const { value } = e.target;
        console.log('Radio button selected:', value);
        setFormData({
            ...formData,
            gender: value,
        });
    };
    const handleFormSubmit = async (e) => {

        e.preventDefault();
        // console.log(formData);
        try {
            await validationSchema.validate(formData, { abortEarly: false });
            console.log("Form Submited", formData);

        } catch (error) {
            const newError = {}

            error.inner.forEach((err) => {
                newError[err.path] = err.message;
            })
            setErrors(newError)
            console.log(error.inner);

        }

    }
    // console.log(formData.firstName);
    return (
        <>
            <div className="container advance-form">
                <form onSubmit={handleFormSubmit}>
                    <h1 className='text-center'>Login</h1>
                    <div className="container d-flex flex-column ">

                        <label >FirstName : </label>
                        <input type='text' name='firstName' value={formData.firstName} placeholder='Enter Firstname'
                            onChange={handelInputChange} />
                        {errors?.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}

                        <label >LastName : </label>
                        <input type='text' name='lastName' value={formData.lastName} placeholder='Enter Lastname' onChange={handelInputChange} />
                        {errors?.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}

                        <label >Email : </label>
                        <input type='email' placeholder='Enter Email' name='email' value={formData.email} onChange={handelInputChange} />
                        {errors?.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                    </div>
                    <div className="container">
                        <label >Description:</label>
                        <textarea cols={100} name='description' value={formData.description} placeholder='Enter Description' onChange={handelInputChange}></textarea>
                        {errors?.description && <p style={{ color: 'red' }}>{errors.description}</p>}
                    </div>
                    <div className="container">
                        <label >Gender : </label>
                        <input type="radio" name='gender' value="male" checked={formData.gender === 'male'} onChange={handleRadioChange} />
                        Male
                        <input type="radio" name='gender' value="female" checked={formData.gender === 'female'} onChange={handleRadioChange} />
                        Female
                        {errors?.gender && <p style={{ color: 'red' }}>{errors.gender}</p>}
                    </div>

                    <div className="container">
                        <label > DOB :</label><br />
                        <input type="date" name='dob' value={formData.dob} onChange={handelInputChange} />
                        {errors?.dob && <p style={{ color: 'red' }}>{errors.dob}</p>}
                    </div>

                    <div className="container">
                        <label >Select Country!</label><br />
                        <select name='country' value={formData.country} onChange={handelInputChange}>
                            <option value="USA">USA</option>
                            <option value="India">India</option>
                            <option value="US">US</option>
                        </select>
                        {errors?.country && <p style={{ color: 'red' }}>{errors.country}</p>}
                    </div>

                    <div className="container">
                        <label >Website Link : </label><br />
                        <input type="url" placeholder='https:'
                            name='website'
                            value={formData.website} onChange={handelInputChange} />
                        {errors?.website && <p style={{ color: 'red' }}>{errors.website}</p>}
                    </div>

                    <div className="container">
                        <label >Hobbies : </label>
                        <label >
                            <input type="checkbox"
                                name='music'
                                checked={formData.hobbie.includes("music")}
                                onChange={handelCheckboxChange} /> Music
                        </label>
                        <label >
                            <input type="checkbox"
                                name='coding'
                                checked={formData.hobbie.includes("coding")}
                                onChange={handelCheckboxChange}
                            /> Coding
                        </label>
                        <label >
                            <input type="checkbox"
                                name='reading'
                                checked={formData.hobbie.includes("reading")}
                                onChange={handelCheckboxChange} /> Reading
                        </label>
                        {errors?.hobbie && <p style={{ color: 'red' }}>{errors.hobbie}</p>}
                    </div>
                    <div className='container'>
                        <input type="submit" />
                    </div>
                </form>
            </div>

        </>
    )
}
