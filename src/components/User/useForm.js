// // import React from 'react';
// import {useState,useEffect} from 'react';
// // import Form from './Form';
//
// const useForm = (callback, validate) => {
//
//     // const [userData, setUserData] = Register ({submitForm});
//     const [userData, setUserData] = useState({
//         first_name:'',
//         last_name:'',
//         email:'',
//         country:'', //[allowedCountry],
//         address:'',
//         address_2:'',
//         mobile_no:'',
//         zip_code:'',
//         city:'',
//         region:'',
//         age:'',
//         skill_level:'',
//         game_type:'',
//         password:'',
//         confirm_password:'',
//         gender:'',
//         status:'',
//     });
//     // const [values, setValues] = useState({
//     //     // username: '',
//     //     email: '',
//     //     password: '',
//     //     confirm_password: '',
//     // })
//     const [errors, setErrors] = useState({})
//     const [isSubmitting, setIsSubmitting] = useState(false);
//
//     const handleChange = e => {
//         //     setUserData({
//         //         ...userData,
//         //         [event.target.name]:event.target.value
//         const {name, value} = e.target
//         setUserData({
//             ...userData,
//             [name]: value
//         });
//     };
//
//     const handleSubmit = e => {
//         e.preventDefault();
//
//         setErrors(validate(userData)); //(values)
//         setIsSubmitting(true);
//         // setErrors(validate(userData)); //(values)
//     };
//
//     useEffect(() => {
//
//         if (Object.keys(errors).length === 0 && isSubmitting) {
//             callback();
//         }
//     }, [errors, isSubmitting, callback]);
//
//     return { handleChange, handleSubmit, userData, setUserData, errors }; //..values
// };
//
// export default useForm;
