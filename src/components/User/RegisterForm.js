// import React, { useState, useCallback } from 'react';
// // import FormSignup from './FormSignup';
// import Register from './Register';
// import FormSuccess from './FormSuccess';
// import useForm from './useForm';
// import validate from './validateInfo';
// import axios from 'axios';
// // import React, {useCallback} from 'react';
// // import countryList from 'react-select-country-list';
//
// const baseUrl = 'http://localhost:8000/api/tennisplayer/';
//
// const RegisterForm = () => {
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     // const { handleChange, userData} = useForm(
//     //     submitForm,
//     //     validate
//     // );
//     const { handleChange, handleSubmit, userData, setUserData, errors } = useForm(
//         submitForm,
//         validate
//     )
// //register -> useForm -> RegisterForm
//     const submitForm = useCallback(() => {
//         // //
//             // console.log("another info")
//
//             // axios.get(baseUrl+'/tennisplayer/', ).then((response)=>{
//             //     console.log(response.data);
//             // });
//
//             console.log("another info")
//             const userFormData = new FormData();
//             console.log("1")
//             userFormData.append("first_name", userData.first_name)
//             console.log("2")
//             userFormData.append("last_name", userData.last_name)
//             console.log("3")
//             userFormData.append("email", userData.email)
//             console.log("4")
//             userFormData.append("country", userData.country)
//             console.log("5")
//             userFormData.append("address", userData.address)
//             console.log("6")
//             userFormData.append("address_2", userData.address_2)
//             console.log("7")
//             userFormData.append("mobile_no", userData.mobile_no)
//             console.log("8")
//             userFormData.append("zip_code", userData.zip_code)
//             console.log("9")
//             userFormData.append("city", userData.city)
//             console.log("10")
//             userFormData.append("region",  userData.region)
//             console.log("11")
//             userFormData.append("age", userData.age)
//             console.log("12")
//             userFormData.append("skill_level", userData.skill_level)
//             console.log("13")
//             userFormData.append("game_type", userData.game_type)
//             console.log("14")
//             userFormData.append("password", userData.password)
//             console.log("15")
//             userFormData.append("confirm_password", userData.confirm_password)
//             console.log("16")
//             userFormData.append("gender", userData.gender)
//             console.log("17")
//             // console.log(userData)
//             console.log(userFormData.getAll("gender"))
//             try{
//                 axios.post(baseUrl, userFormData).then((response)=>{
//                     console.log(response.data)
//                     setUserData({ // setUserData is not a function
//                         'first_name':'', 'last_name':'', 'email':'', 'country':'',
//                         'address':'', 'address_2':'', 'mobile_no':'', 'zip_code':'',
//                         'city':'', 'region':'', 'age':'', 'skill_level':'', 'game_type':'',
//                         'password':'', 'confirm_password':'', 'gender':'',
//                         'status':'success',
//                     });
//                     //     // console.log(response.data)
//                 });
//                 setIsSubmitted(true);
//             } catch (error){
//                 console.log(userFormData+"hola");
//                 // console.log(response.data)
//                 console.log("here is an error: " +error);
//                 setUserData({'status': 'error'})
//             }
//         setIsSubmitted(true)
//     }, [setIsSubmitted]);
//
//     // function submitForm() {
//     // //     setIsSubmitted(true);
//     // // }
//
//     //
//     // }
//     return (
//         <>
//             {/*<div className='form-container'>*/}
//             {/*    <span className='close-btn'>×</span>*/}
//             {/*    <div className='form-content-left'>*/}
//             {/*        <img className='form-img' src='img/img-2.svg' alt='spaceship' />*/}
//             {/*    </div>*/}
//             <div>
//                 {!isSubmitted ? (<Register submitForm={submitForm} />)
//                     : (
//                     <FormSuccess />
//                 )}
//             </div>
//         </>
//     );
// };
//
// export default RegisterForm;