import React from 'react'
import { useForm, Controller } from "react-hook-form"
import Select from 'react-select';
import './TaskJ.css'

export default function Form() {

    const countryOptions = [
        { value: 'usa', label: 'USA' },
        { value: 'canada', label: 'Canada' },
        { value: 'uk', label: 'UK' },
    ];

    const stateOptions = {
        usa: [
            { value: 'ca', label: 'California' },
            { value: 'ny', label: 'New York' },
        ],
        canada: [
            { value: 'on', label: 'Ontario' },
            { value: 'qc', label: 'Quebec' },
        ],
        uk: [
            { value: 'eng', label: 'England' },
            { value: 'sco', label: 'Scotland' },
        ],
    };

    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm()
    console.log(errors);

    const hobbies = watch('hobbies');
    const gender = watch('gender');
    return (
        <>

            <div className="container border  p-2">
                <h1 className='text-success text-center '>React Hook Form</h1>
                <form className='p-3' onSubmit={handleSubmit((data) => console.log(data)
                )}>
                    <div className="container">
                        <label >First Name :</label>
                        <input type="text"
                            placeholder='FirstName'
                            {...register('firstName',
                                {
                                    required: true,
                                    minLength: { value: 3, message: "Min length atleast 3" }
                                }
                            )} />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
<br />
                        <label >Last Name :</label>
                        <input
                            type="text"

                            placeholder='LastName'
                            {...register('lastName',
                                {
                                    required: true,
                                    minLength: { value: 3, message: "Min length atleast 3" }
                                }
                            )} />
                        {errors.lastName && <p>{errors.lastName.message}</p>}

                        <br />
                        <label >Email :</label>
                        <input
                            type="email"
                            placeholder='Email'
                            {...register('email',
                                {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Invalid email address',
                                    }
                                })} />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="container">
                        <textarea placeholder='Description'
                            {...register("description", {
                                required: "Description is required",
                                minLength: { value: 5, message: "Description atleast 5 leater is required" },
                                maxLength: { value: 50, message: "Description atmost 50 leater is required" }
                            })}
                        ></textarea>
                        {errors.description && <p>{errors.description.message}</p>}
                    </div>

                    {/* gender */}
                    <div className="container">
                        <label>Gender:</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    value="male"
                                    {...register('gender', { required: 'Please select a gender' })}
                                />
                                Male
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="female"
                                    {...register('gender', { required: 'Please select a gender' })}
                                />
                                Female
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    value="other"
                                    {...register('gender', { required: 'Please select a gender' })}
                                />
                                Other
                            </label>
                        </div>
                        {errors.gender && <p>{errors.gender.message}</p>}
                    </div>

                    {/* DOB */}
                    <div className="container">
                        <label >Date of Birth</label>
                        <input type="date"
                            {...register('dob',
                                {
                                    required: true,
                                    message: "DOB is required"
                                })} />
                        {errors.dob && <p>{errors.dob.message}</p>}
                    </div>

                    {/* country and state */}
                    <div className="container">
                        <label htmlFor="country">Country</label>
                        <Controller
                        className="container"
                            name="country"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={countryOptions}
                                    onChange={(selectedOption) => {
                                        field.onChange(selectedOption);
                                        setValue('state', null); // Reset state when country changes
                                    }}
                                    getOptionLabel={(option) => option.label}
                                    getOptionValue={(option) => option.value}
                                />
                            )}
                        />
                    </div>

                    <div className="container">
                        <label htmlFor="state">State</label>
                        <Controller
                        className="container"
                            name="state"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={stateOptions[watch('country')?.value] || []}
                                    getOptionLabel={(option) => option.label}
                                    getOptionValue={(option) => option.value}
                                    isDisabled={!watch('country')}
                                    onChange={(selectedOption) => {
                                        field.onChange(selectedOption);
                                    }}
                                />
                            )}
                        />
                    </div>
                    {/* website link */}
                    <div className="container">
                        <label htmlFor="website">Website Link</label>
                        <input
                            {...register('website', {
                                required: 'Website link is required',
                                pattern: {
                                    value: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
                                    message: 'Invalid website link',
                                },
                            })}
                        />
                        {errors.website && <p>{errors.website.message}</p>}
                    </div>
                    {/* Hobbies */}
                    <div className="container">
                        <label>Hobbies</label>
                        <label>
                            <input
                                type="checkbox"
                                value="music"
                                {...register('hobbies')}
                            />
                            Music
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="dance"
                                {...register('hobbies')}
                            />
                            Dance
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                value="other"
                                {...register('hobbies')}
                            />
                            Other
                        </label>
                    </div>

                    <div className="container">
                        <p>Selected Hobbies: {hobbies ? hobbies.join(', ') : 'None'}</p>
                    </div>
                    {/* submit */}
                    <div className="container">
                        <input type="submit" />
                    </div>
                </form>
            </div>
        </>
    )

}