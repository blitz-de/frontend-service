// import {Link} from 'react-router-dom';
// import useForm from './useForm';
import { Country, State, City }  from 'country-state-city';

import validate from './validateInfo';
// import Form from './styles/Form.css'
import React from 'react';
// import CountrySelect from 'react-bootstrap-country-select';
import {useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';
// import countryList from 'react-select-country-list';
const baseUrl = 'http://localhost:8000/api/tennisplayer/';

// function Register ({submitForm}) {
const Register = () => { //{ submitFo handleSubmit, userData, setUserData, errors }; //..values
    // / handleSubmit, userData, errors } = useForm(
    //     submitForm,
    //     validate
    // );

    //####################
    // const initialValue = [
    //     { id: 0, value: " --- Select a a Country ---" }];
    //
    // const allowedCountry = [
    //     { id: 1, value: "Albania" },
    //     { id: 2, value: "Germany" },
    //     { id: 3, value: "Austria" }
    // ];

    // const [countryOptions, setCountryValues] = useState(initialValue);
    // initialValue.push(...allowedState);

    // console.log(initialValue.length);
    // // ****** BEGINNING OF CHANGE ******
    // useEffect(() => {
    //     // Should not ever set state during rendering, so do this in useEffect instead.
    //     setCountryValues(allowedCountry);
    // }, []);
    // ****** END OF CHANGE ******
    //####################
    // const current = new Date().toISOString().split("T")[0]
    // countries
    // const [value, setValue] = useState('');
    // const options = useMemo(() => countryList().getData(), []);
    //End
    const {
        register,
        // setValue,
        handleSubmit,
        formState: { errors },
        reset,

    } = useForm();

    const country = Country.getAllCountries()
        .map((index) => console.log(index.name))
        .flat();
    // const [userData, setUserData] = useState({
    //     //[allowedCountry],
    //     'first_name':'', 'last_name':'', 'email':'', 'country':'', 'address':'',
    //     'address_2':'', 'mobile_no':'', 'zip_code':'', 'city':'', 'region':'', 'age':'',
    //     'skill_level':'', 'game_type':'', 'password':'', 'confirm_password':'', 'gender':'',
    //     'status':'',
    // });
    // handler for countries
    // const changeHandler = value => {
    //     setValue(value)
    // }
    // end of handler for countries
    // Change Element value(event)=>{
    //     setUserData({
    //         ...userData,
    //         [event.target.name]:event.target.value
    //     });
    //     console.log(event.target.name, event.target.value)
    // }
    //End
    // Submit Form

    // const submitForm= userData => {
    const onSubmit = userData => {
        // console.log("another info")
        console.log(userData);
        console.log(Country.getAllCountries())

        // axios.get(baseUrl+'/tennisplayer/', ).then((response)=>{
        //     console.log(response.data);
        // });
        console.log("another info")
        const userFormData = new FormData();
        console.log("1")
        userFormData.append("first_name", userData.first_name)
        console.log("2")
        userFormData.append("last_name", userData.last_name)
        console.log("3")
        userFormData.append("email", userData.email)
        console.log("4")
        userFormData.append("country", userData.country)
        console.log("5")
        userFormData.append("address", userData.address)
        console.log("6")
        userFormData.append("address_2", userData.address_2)
        console.log("7")
        userFormData.append("mobile_no", userData.mobile_no)
        console.log("8")
        userFormData.append("zip_code", userData.zip_code)
        console.log("9")
        userFormData.append("city", userData.city)
        console.log("10")
        userFormData.append("region", userData.region)
        console.log("11")
        userFormData.append("age", userData.age)
        console.log("12")
        userFormData.append("skill_level", userData.skill_level)
        console.log("13")
        userFormData.append("game_type", userData.game_type)
        console.log("14")
        userFormData.append("password", userData.password)
        console.log("15")
        userFormData.append("confirm_password", userData.confirm_password)
        console.log("16")
        userFormData.append("gender", userData.gender)
        console.log("17")
        console.log(userData)
        console.log(userFormData.getAll("skill_level"))
        try {
            axios.post(baseUrl, userFormData).then((response) => {
                console.log(response.data)
                // // setUserData({ // setUserData is not a function
                // setValue({
                //     'first_name': '', 'last_name': '', 'email': '', 'country': '',
                //     'address': '', 'address_2': '', 'mobile_no': '', 'zip_code': '',
                //     'city': '', 'region': '', 'age': '', 'skill_level': '', 'game_type': '',
                //     'password': '', 'confirm_password': '', 'gender': '',
                //     'status': 'success',
                //
                // })
                });
                //     // console.log(response.data)
            // });
        } catch (error) {
            console.log(userFormData + "hola");
            // console.log(response.data)
            console.log("here is an error: " + error);
            // setUserData({'status': 'error'})
        }
    }

    // };
    // useEffect(()=>{
    //     document.title='User Regiseter'
    // });
    return (

        <div className="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {/*{status=='success' && <p className="text-success">Thanks for your registration</p>}*/}
                    {/*{status=='error' && <p className="text-danger">Something wrong happened</p>}*/}
                    <h4 className="text-center mb-4">Tennis Companion Registeration Form</h4>
                    {/*added a form -- neeeds to be rechecked*/}
                    {/*<form onSubmit={handleSubmit} className="form">*/}
                        <div className="card">
                            <h3 className="card-header">User Register</h3>
                            <div className="card-body">
                                {/*<form className="row g-3">*/}
                                <form  onSubmit={handleSubmit(onSubmit)} className="form">
                                    <div className="col-md-6">
                                        <label htmlFor="inputFirstName" className="form-label">First Name</label>
                                        <input
                                            // // value={userData.first_name} //value doesn't allow me to input infor
                                            //                                                   name='first_name' type="text" className="form-control"
                                               {...register("first_name", {required: "First Name is Required"})}
                                               id="inputFirstName"
                                        />
                                        {errors.first_name && (<small className="text-danger">{errors.first_name.message}</small>)}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputLastName" className="form-label">Last Name</label>
                                        <input
                                            // value={userData.last_name}
                                               name='last_name' type="text" className="form-control"
                                               {...register("last_name", {required: "Last Name is Required"})}
                                               id="inputLastName"/>
                                        {errors.last_name && (<small className="text-danger">{errors.last_name.message}</small>)}

                                        {/*<small className="text-danger">Last Name is Required</small>*/}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                                        <input
                                            // value={userData.email}
                                               name='email' type="email"
                                               className="form-control" id="inputEmail4"
                                               {...register("email", {
                                                   required: "Email is Required",
                                                   pattern: {
                                                       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                       message: "Invalid email address",
                                                   }
                                               }
                                               )}/>
                                        {/*<small className="text-danger">Email is Required</small>*/}
                                        {errors.email && <small className="text-danger">{errors.email.message}</small>}
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="inputCountry" className="form-label">Country</label>
                                        <select
                                               name='country' type="text"
                                               className="form-input form-control" id="inputCountry"
                                               {...register("country", {required: "Country is Required"})}>
                                            {Country.getAllCountries()
                                                .map((index) =>
                                                    <option>{index.name}
                                                    </option>
                                                )}
                                        </select>
                                        {/*<small className="text-danger">Country is Required</small>*/}
                                        {errors.country && (<small className="text-danger">{errors.country.message}</small>)}

                                            {/*<label htmlFor="inputCountry" className="form-label">Country</label>*/}
                                        {/*/!*<Select id="inputCountry" className="form-select"*!/*/}
                                        {/*/!*        options={options} value={userData} !/*/}
                                        {/*/!*        name='country' />*!/*/}
                                        {/*<select id="inputCountry" className="form-select">*/}
                                        {/*    {countryOptions.map((localCountry, index) => (*/}
                                        {/*        <option name="country"*/}
                                        {/*                key={localCountry.id }>{localCountry.value}</option>*/}
                                        {/*    ))}*/}
                                        {/*</select>*/}
                                        {/*/!*<select name='country'*!/*/}
                                        {/*/!*        id="inputCountry" className="form-select" >*!/*/}
                                        {/*/!*    <option selected>Choose...</option>*!/*/}
                                        {/*/!*    /!*<option>...</option>*!/*!/*/}
                                        {/*/!*</select>*!/*/}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress" className="form-label">Address</label>
                                        <input
                                            // value={userData.address}
                                               name='address' type="text" className="form-input form-control"
                                               id="inputAddress" placeholder="1234 Main St"
                                               {...register("address", {required: "Address is Required"})}/>
                                        {errors.address && (<small className="text-danger">{errors.address.message}</small>)}
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                        <input
                                            // value={userData.address_2}
                                               name='address_2' type="text" className="form-input form-control"
                                               id="inputAddress2"
                                               placeholder="Apartment, studio, or floor"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputMobileNumber" className="form-label">Mobile number</label>
                                        <input
                                            // value={userData.mobile_no}
                                            name='mobile_no'  type="text" className="form-input form-control"
                                               id="inputMobileNumber"
                                               {...register("mobile_no", {
                                                   required: "Mobile Number is Required",
                                                   pattern: {
                                                       value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                                       message: "Invalid mobile no",
                                                   }
                                               }
                                               )}/>
                                        {errors.mobile_no && (<small className="text-danger">{errors.mobile_no.message}</small>)}

                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputZip" className="form-label">Zip</label>
                                        <input
                                            // value={userData.zip_code}
                                            name='zip_code' type="text" className="form-input form-control"
                                               id="inputZip"
                                               {...register("zip_code", {required: "ZIP Code is Required"})}/>
                                        {errors.zip_code && (<small className="text-danger">{errors.zip_code.message}</small>)}

                                        {/*<small className="text-danger">ZIP Code is Required</small>*/}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputCity" className="form-label">City</label>
                                        <input
                                            // value={userData.city}
                                            name='city' type="text" className="form-input form-control"
                                                id="inputCity"
                                                {...register("city", {required: "City is Required"})}/>
                                        {errors.city && (<small className="text-danger">{errors.city.message}</small>)}

                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputRegion" className="form-label">Region</label>
                                        <input
                                            // value={userData.region}
                                            name='region' type="text" className="form-input form-control"
                                            id="inputRegion"
                                            {...register("region", {required: "Region is Required"})}/>
                                        {/*{errors.region && (<small className="text-danger">{errors.region.message}</small>)}*/}

                                        {/*    <label htmlFor="inputRegion" className="form-label">Region</label>*/}
                                        {/*<select name='region' id="inputRegion" className="form-select">*/}
                                        {/*    <option selected>Choose...</option>*/}
                                        {/*    <option>Berlin</option>*/}
                                        {/*    <option>Brandenburg</option>*/}
                                        {/*    <option>Hamburg</option>*/}
                                        {/*    <option>Hafen</option>*/}
                                        {/*    <option>Hannover</option>*/}
                                        {/*    <option>Greifswald</option>*/}
                                        {/*</select>*/}
                                    </div>

                                    {/*<div className="col-md-6">*/}
                                    {/*    <label htmlFor="inputGender" className="form-label">Gender</label>*/}
                                    {/*    <input type="text" className="form-input form-control" id="inputGender"/>*/}
                                    {/*</div>*/}
                                    <div className="col-md-6 ">
                                        <label htmlFor="inputAge" className="form-label">Age</label>
                                        <input
                                            /*value={userData.age}*/
                                             name='age' type="text" className="form-input form-control"
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
                                            })}/>
                                        {errors.age && (<small className="text-danger">{errors.age.message}</small>)}


                                        {/*    <label htmlFor="inputMonth" className="form-label ">Month</label>*/}
                                    {/*    /!*<CountrySelect value={userData} onChange={setUserData} name='country'/>*!/*/}
                                    {/*    <select  name='age' id="inputMonth" className="form-select">*/}
                                    {/*        <option>Month...</option>*/}
                                    {/*        <option>January</option>*/}
                                    {/*        <option>February</option>*/}
                                    {/*    </select>*/}
                                    {/*</div>*/}
                                    {/*<div className="col-md-4">*/}
                                    {/*    <label htmlFor="inputDay" className="form-label">Day</label>*/}
                                    {/*    <select id="inputDay" className="form-select"*/}
                                    {/*             name='age'>*/}
                                    {/*        <option>Day</option>*/}
                                    {/*        <option>...</option>*/}
                                    {/*    </select>                                </div>*/}
                                    {/*<div className="col-md-4">*/}
                                    {/*    <label htmlFor="inputYear" className="form-label">Year</label>*/}
                                    {/*    <select id="inputYear" className="form-select"*/}
                                    {/*             name='age'>*/}
                                    {/*        <option hidden>Year...</option>*/}
                                    {/*        <option>...</option>*/}
                                    {/*    </select>                                */}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputSkillLevel" className="form-label">Skill Level</label>
                                        <select
                                            /*value={userData.skill_level}*/
                                             name='skill_level' type="text" className="form-control"
                                            id="skill_level"
                                            {...register('skill_level', {required: "Skill Level is Required"})}
                                            >
                                            <option hidden>Choose your Strength level</option>
                                            <option value="1">Novice</option>
                                            <option value="2">Advanced Beginner</option>
                                            <option value="3">Competent</option>
                                            <option value="4">Proficient</option>
                                            <option value="5">Expert</option>
                                        </select>
                                        {/*<small className="text-danger">Skill level is Required</small>*/}
                                        {/*{errors.skill_level && (<small className="text-danger">{errors.skill_level.message}</small>)}*/}

                                            {/*<label htmlFor="inputSkillLevel" className="form-label">Skill Level</label>*/}
                                        {/*<select id="inputSkillLevel" className="form-select"*/}
                                        {/*         name='skill_level'>*/}
                                        {/*    <option>Choose...</option>*/}
                                        {/*    <option>...</option>*/}
                                        {/*</select>*/}
                                    </div>
                                    <div className="col-md-12">
                                            <label htmlFor="inputGameType" className="form-label">Game Type</label>
                                            <select
                                                 name='game_type' type="text" className="form-input form-control"
                                                id="inputGameType"
                                                {...register("game_type", {required: "Game Type is Required"})}
                                            >
                                                <option hidden>Choose your Game</option>
                                                <option value="PT">Badminton</option>
                                                <option value="F">Paddle tennis</option>
                                                <option value="S">Squash</option>
                                                <option value="TT">Table Tennis</option>
                                                <option value="T">Tennis</option>
                                            </select>
                                        {/*<small className="text-danger">Game Type is Required</small>*/}
                                        {errors.game_type && (<small className="text-danger">{errors.game_type.message}</small>)}

                                        {/*<label htmlFor="inputGameType" className="form-label">Game Type</label>*/}
                                        {/*<select id="inputGameType" className="form-select"*/}
                                        {/*         name='game_type'>*/}
                                        {/*    <option>Choose...</option>*/}
                                        {/*    <option>...</option>*/}
                                        {/*</select>*/}
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                                        <input
                                               placeholder="Enter your password" type="password" className="form-input form-control"
                                               id="inputPassword4"
                                               /*value={userData.password}*/

                                               name='password'
                                               {...register("password", {required: "Password is Required"})}/>
                                        {/*<small className="text-danger">Password is Required</small>*/}
                                        {/*{errors.password && (<small className="text-danger">{errors.password.message}</small>)}*/}

                                        {/*{errors.password && <p className="text-danger">{errors.password}</p>}*/}

                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="inputConfirmPassword4" className="form-label">Confirm Password</label>
                                        <input placeholder="Re-enter your password"
                                               type="password" className="form-input form-control"
                                               id="inputConfirmPassword4"
                                               /*value={userData.confirm_password}*/

                                               name='confirm_password'
                                               {...register("confirm_password", {required: "Please confirm your Password"})}/>
                                        {/*<small className="text-danger">Please confirm your Password</small>*/}
                                        {/*{errors.confirm_password && <small className="text-danger">{errors.confirm_password}</small>}*/}
                                    </div>
                                <div className="col-md-12 mb-4">
                                    <label htmlFor="inputGender" className="form-label">Gender</label>
                                    {/*<input*/}

                                    <select {...register("gender", {required: "Gender is Required"})}
                                        name='gender' type="text"
                                        className="form-input form-control" id="inputGender">
                                        <option hidden>Choose your Gender</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                    {errors.gender && (<small className="text-danger">{errors.gender.message}</small>)}

                                    {/*/>*/}
                                    {/*<small className="text-danger">Gender is Required</small>*/}

                                    {/*<label htmlFor="inputGameType" className="form-label">Game Type</label>*/}
                                    {/*<select id="inputGameType" className="form-select"*/}
                                    {/*         name='game_type'>*/}
                                    {/*    <option>Choose...</option>*/}
                                    {/*    <option>...</option>*/}
                                    {/*</select>*/}
                                </div>
                                    {/*<div className="col-12">*/}
                                    {/*    <div className="form-check">*/}
                                    {/*        <input className="form-check-input" type="checkbox" id="gridCheck"*/}
                                    {/*/!*               value={userData.gender}*!/*/}
                                    {/*                name='gender'/>*/}
                                    {/*            <label className="form-check-label" htmlFor="gridCheck">*/}
                                    {/*                Male*/}
                                    {/*            </label>*/}
                                    {/*        <br/>*/}
                                    {/*        <input className="form-check-input" type="checkbox" id="gridCheck2"*/}
                                    {/*/!*               value={userData.gender}*!/*/}
                                    {/*                name='gender'/>*/}
                                    {/*            <label className="form-check-label" htmlFor="gridCheck">*/}
                                    {/*                Female*/}
                                    {/*            </label>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
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
// const CountrySelector = ({ countryName, countries, onCountryPickHandler }) => {
//     const options = countries.map((country) => (
//         <option key={country.name} value={country.name}>
//             {country.name}
//         </option>
//     ));
//     return (
//         <div>
//             <select value={countryName || "none"} onChange={onCountryPickHandler}>
//                 {options}
//                 <option value="none">None</option>
//             </select>
//         </div>
//     );
// };
export default Register;