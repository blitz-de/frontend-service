import "./styles/RegisterStyles.css";
import { Country, State, City }  from 'country-state-city';
// import validate from './validateInfo';
import React from 'react';
// import {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
// import ReactDOM from 'react-dom';

const baseUrl = 'http://localhost:8000/api/tennisplayer/';



const Register = () => {
    // const myelement = React.createElement('h1', {}, 'I do not use JSX!');

    const {
        register,
        // setValue,
        handleSubmit,
        formState: { errors },
        // reset,
        trigger

    } = useForm();

    // const country = Country.getAllCountries()
    //     .map((index) => console.log(index.name))
    //     .flat();

    // const [successState, setSuccessInfo] = useState({
    //     'status':''
    // });
    const onSubmit = userData => {
        console.log(userData);
        console.log(Country.getAllCountries())

        console.log("another info")
        const userFormData = new FormData();
        userFormData.append("first_name", userData.first_name)
        userFormData.append("last_name", userData.last_name)
        userFormData.append("email", userData.email)
        userFormData.append("country", userData.country)
        userFormData.append("address", userData.address)
        userFormData.append("address_2", userData.address_2)
        userFormData.append("mobile_no", userData.mobile_no)
        userFormData.append("zip_code", userData.zip_code)
        userFormData.append("city", userData.city)
        userFormData.append("region", userData.region)
        userFormData.append("age", userData.age)
        userFormData.append("skill_level", userData.skill_level)
        userFormData.append("game_type", userData.game_type)
        userFormData.append("password", userData.password)
        userFormData.append("confirm_password", userData.confirm_password)
        userFormData.append("gender", userData.gender)
        console.log(userData)
        console.log(userFormData.getAll("skill_level"))
        try {
            axios.post(baseUrl, userFormData).then((response) => {
                console.log(response.data)

                // setSuccessInfo({
                //     'status': 'success'
                // });
                });

        } catch (error) {
            console.log(userFormData + "hola");
            // ReactDOM.render(myelement, document.getElementById('root'));

            // setSuccessInfo('status': 'error')
            console.log("here is an error: " + error);
        }
    }

    return (

        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {/*{status=='success' && <p className="text-success">Thanks for your registration</p>}*/}
                    {/*{status=='error' && <p className="text-danger">Something wrong happened</p>}*/}
                    <h4 className="text-center mb-4">Tennis Companion Registeration Form</h4>
                    {/*added a form -- neeeds to be rechecked*/}
                    {/*<form onSubmit={handleSubmit} className="form">*/}
                    {/*{success.status && <p class="text-success">Thanks for your registeration</p>}*/}
                    {/*{!success.status && <p class="text-danger">Something wrong happened!!</p>}*/}
                        <div className="card">
                            <h3 className="card-header">User Register</h3>
                            <div className="card-body">
                                {/*<form className="row g-3">*/}
                                <form  onSubmit={handleSubmit(onSubmit)} className="form">
                                    <div className="col-md-6">
                                        <label htmlFor="inputFirstName" className="form-label">First Name</label>
                                        <input
                                                name='first_name' type="text" id="inputFirstName"
                                                {...register("first_name", {required: "First Name is Required"})}
                                                className={`form-control ${errors.first_name && "invalid"}`}
                                               onKeyUp={() => {
                                                   trigger("first_name");
                                               }}
                                        />
                                        {errors.first_name && (<small className="text-danger">{errors.first_name.message}</small>)}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputLastName" className="form-label">Last Name</label>
                                        <input
                                               name='last_name' type="text"
                                               {...register("last_name", {required: "Last Name is Required"})}
                                               className={`form-control ${errors.last_name && "invalid"}`}
                                               onKeyUp={() => {
                                                   trigger("last_name");
                                               }}
                                               id="inputLastName"/>
                                        {errors.last_name && (<small className="text-danger">{errors.last_name.message}</small>)}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                        <input
                                               name='email' type="email"
                                               id="inputEmail4"
                                               {...register("email", {
                                                   required: "Email is Required",
                                                   pattern: {
                                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                       message: "Invalid email address",
                                                   }
                                               })}
                                               className={`form-control ${errors.email && "invalid"}`}
                                               onKeyUp={() => {
                                                   trigger("email");
                                               }}
                                        />
                                        {errors.email && <small className="text-danger">{errors.email.message}</small>}
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="inputCountry" className="form-label">Country</label>
                                        <select
                                            name='country' type="text"
                                            className="form-input form-control" id="inputCountry"
                                            {...register("country", {required: "Country is Required"})}>
                                            {Country.getAllCountries()
                                                .map((country, index) =>
                                                    <option key={index}>{country.name}
                                                    </option>
                                                )}
                                        </select>
                                        {errors.country && (<small className="text-danger">{errors.country.message}</small>)}

                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">Address</label>
                                        <input
                                               name='address' type="text"
                                               id="inputAddress" placeholder="1234 Main St"
                                               {...register("address", {required: "Address is Required"})}
                                               className={`form-control ${errors.address && "invalid"}`}
                                               onKeyUp={() => {
                                                   trigger("address");
                                               }}
                                        />
                                        {errors.address && (<small className="text-danger">{errors.address.message}</small>)}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                        <input
                                               name='address_2' type="text" className="form-input form-control"
                                               id="inputAddress2"
                                               placeholder="Apartment, studio, or floor"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputMobileNumber" className="form-label">Mobile number</label>
                                        <input
                                            name='mobile_no'  type="text"
                                               id="inputMobileNumber"
                                               {...register("mobile_no", {
                                                   required: "Mobile Number is Required",
                                                   pattern: {
                                                       value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                                       message: "Invalid mobile no",
                                                   }
                                               })}
                                            className={`form-control ${errors.mobile_no && "invalid"}`}
                                            onKeyUp={() => {
                                                trigger("mobile_no");
                                            }}
                                        />
                                        {errors.mobile_no && (<small className="text-danger">{errors.mobile_no.message}</small>)}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputZip" className="form-label">Zip</label>
                                        <input
                                            name='zip_code' type="text"
                                               id="inputZip"
                                               {...register("zip_code", {required: "ZIP Code is Required"})}
                                            className={`form-control ${errors.zip_code && "invalid"}`}
                                            onKeyUp={() => {
                                                trigger("zip_code");
                                            }}/>
                                        {errors.zip_code && (<small className="text-danger">{errors.zip_code.message}</small>)}

                                        {/*<small className="text-danger">ZIP Code is Required</small>*/}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputCity" className="form-label">City</label>
                                        <input
                                            name='city' type="text"
                                                id="inputCity"
                                                {...register("city", {required: "City is Required"})}
                                            className={`form-control ${errors.city && "invalid"}`}
                                            onKeyUp={() => {
                                                trigger("city");
                                            }}
                                        />
                                        {errors.city && (<small className="text-danger">{errors.city.message}</small>)}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputRegion" className="form-label">Region</label>
                                        <input
                                            // value={userData.region}
                                            name='region' type="text"
                                            id="inputRegion"
                                            {...register("region", {required: "Region is Required"})}
                                            className={`form-control ${errors.region && "invalid"}`}
                                            onKeyUp={() => {
                                                trigger("region");
                                            }}/>
                                    </div>

                                    <div className="col-md-6 ">
                                        <label htmlFor="inputAge" className="form-label">Age</label>
                                        <input
                                             name='age' type="text"
                                            id="inputAge"
                                            {...register("age", {
                                                required: "Age is Required",
                                                min: {
                                                    value: 15,
                                                    message: "Minimum Required age is 15",
                                                 },
                                                max: {
                                                    value: 65,
                                                    message: "Maximum allowed age is 65",
                                                },
                                                pattern: {
                                                    value: /^[0-9]*$/,
                                                    message: "Only numbers are allowed"
                                                }
                                            })}
                                             className={`form-control ${errors.age && "invalid"}`}
                                             onKeyUp={() => {
                                                 trigger("age");
                                             }}
                                        />
                                        {errors.age && (<small className="text-danger">{errors.age.message}</small>)}

                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputSkillLevel" className="form-label">Skill Level</label>
                                        <select
                                             name='skill_level' type="text"
                                            id="skill_level"
                                            {...register('skill_level', {required: "Skill Level is Required"})}
                                             className={`form-control ${errors.skill_level && "invalid"}`}
                                             onKeyUp={() => {
                                                 trigger("skill_level");
                                             }}
                                            >
                                            <option hidden>Choose your Strength level</option>
                                            <option value="1">Novice</option>
                                            <option value="2">Advanced Beginner</option>
                                            <option value="3">Competent</option>
                                            <option value="4">Proficient</option>
                                            <option value="5">Expert</option>
                                        </select>
                                    </div>
                                    <div className="col-md-12">
                                            <label htmlFor="inputGameType" className="form-label">Game Type</label>
                                            <select
                                                 name='game_type' type="text"
                                                id="inputGameType"
                                                {...register("game_type", {required: "Game Type is Required"})}
                                                 className={`form-control ${errors.game_type && "invalid"}`}
                                                 onKeyUp={() => {
                                                     trigger("game_type");
                                                 }}
                                            >
                                                <option hidden>Choose your Game</option>
                                                <option value="PT">Badminton</option>
                                                <option value="F">Paddle tennis</option>
                                                <option value="S">Squash</option>
                                                <option value="TT">Table Tennis</option>
                                                <option value="T">Tennis</option>
                                            </select>
                                        {errors.game_type && (<small className="text-danger">{errors.game_type.message}</small>)}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                        <input
                                               placeholder="Enter your password" type="password"
                                               id="inputPassword4"
                                               name='password'
                                               {...register("password", {required: "Password is Required"})}
                                               className={`form-control ${errors.password && "invalid"}`}
                                               onKeyUp={() => {
                                                   trigger("password");
                                               }}/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputConfirmPassword4" className="form-label">Confirm Password</label>
                                        <input placeholder="Re-enter your password"
                                               type="password"
                                               id="inputConfirmPassword4"
                                               name='confirm_password'

                                               className={`form-control ${errors.confirm_password && "invalid"}`}
                                               onKeyUp={() => {
                                                   trigger("confirm_password");
                                               }}/>
                                        {errors.confirm_password && <small className="text-danger">{errors.confirm_password}</small>}
                                    </div>
                                <div className="col-md-12 mb-4">
                                    <label htmlFor="inputGender" className="form-label">Gender</label>
                                    <select {...register("gender", {required: "Gender is Required"})}
                                            className={`form-control ${errors.gender && "invalid"}`}
                                            onKeyUp={() => {
                                                trigger("gender");
                                            }}
                                        name='gender' type="text"
                                         id="inputGender">
                                        <option hidden>Choose your Gender</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                    {errors.gender && (<small className="text-danger">{errors.gender.message}</small>)}

                                </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                        {/*onClick={submitForm}*/}
                                    </div>
                                </form>
                            </div>
                        </div>
                    {/*</form>*/}
                </div>
            </div>

        </div>
    );

}

export default Register;