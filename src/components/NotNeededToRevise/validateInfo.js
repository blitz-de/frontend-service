// export default function validateInfo(userData) { // values
//     let errors = {}
//
//     // if (!values.username.trim()) {
//     //     errors.username = "Username required"
//     // }
//
//     //Email
//     if(!userData.email){ //values.email
//         errors.email = "Email required";
//         console.log("hola");
//     } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
//         errors.email = 'Email address is invalid';
//     }
//
//     if(!userData.password){
//         errors.password = "Password is required";
//     } else if(userData.password.length < 6){
//         errors.password = "Password needs to be 6 characters or more";
//     }
//
//     if(!userData.confirm_password) {
//         errors.confirm_password = "Password is required";
//     } else if (userData.confirm_password !== userData.password){
//             errors.confirm_password = "Passwords don't match";
//     }
//         return errors;
// }