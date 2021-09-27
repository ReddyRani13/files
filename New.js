// import React,{useFormik} from "react";
// import { formik, Form, Field, FieldArray, validateYupSchema } from "formik";



// const formInitialValues={"name","age"}

// const SignupForm=()=>{
//     const formik=useFormik({
//         initialValues:{
//             firstName:'',
//             lastName:'',
//             UserName:'',
//             email:'',
//             hobbies:["hobbiesname","hobbiestype"],
//             mobilenumberOne:"",
//             mobilenumberTwo:'',


//         },
//         validationSchema:Yup.object({
//             firstName:Yup.string()
//             .min(3)
//             .max(5,"min 3 max 5 characters are allowed")
//             .required("required")
//             .matches(/^[A-Za-z]*$/, "Only alphabets are allowed for this field "),
//             lastName:Yup.string()
//             .min(3)
//             .max(5,"min 3 max 5 characters are allowed")
//             .required("required")
//             .matches(/^[A-Za-z]*$/, "Only alphabets are allowed for this field "),
//             // optionalobject:Yup.lazy(lastName=>{
//             //     if(lastName!==undefined){
//             //         return Yup.object({
//             //             otherData:Yup.string().required(),
//             //         });
//             //     }
//             //     return Yup.string().not.Required();
//             // }),
//             UserName:Yup.string()
//             .min(3)
//             .max(20,"min 3 max 5 characters are allowed")
//             .required("required"),
//             email:Yup.string()
//             .min(3)
//             .max(50,"min 3 and max 20 characters are allowed")
//             .email('INvalid email address')
//             .required("Required"),
        
//         //  mobileNumber1:Yup.number()
//         // // .typeError('you must specify a number')
//         // // .matches(/(01)(\d){8}\b/,'Enter a valid phone number'),
//         // .matches('^[0-9]{10}$'),

//         // mobileNumber2:yup.number()
//         // .typeError('you must specify a number')
//         // .matches(/(01)(\d){8}\b/,'Enter a valid phone no'),

//        mobilenumberOne:Yup.string()
//        .max(10,"exceeded max limit")
//        .required("required"),
//        mobilenumberTwo:Yup.string()
//        .max(10,"exceeded max limit")
//        .required("required"),

//     }),

//         onSubmit:values=>{
//             alert(JSON.stringify(values,null,2));

//         },
//     });
//     ;


//     // render={({ values }) => (
//     return(
//            <form onSubmit={formik.handleSubmit}>
//                 <label htmlFor="firstName">First Name</label>
//                 <input 
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 placeholder="firstName"
//                {...formik.getFieldProps('firstName')}
// />
//                 {
//                     formik.touched.firstName && formik.errors.firstName?(
//                         <div>{formik.errors.firstName}</div>
//                     ):null}
//         <FieldArray name="forms" render={arrayHelpers => (
//             <div>
//               {values.forms.map((formItem, index) => (<div key={index}>
//                   <Field name={`forms.${index}.name`} />
//                   <Field name={`forms.${index}.lastName`} />
//                   <button type="button" onClick={() =>  arrayHelpers.insert(index, formInitialValues) }> +</button>
//                 </div>
//               ))}
//             </div>
//           )}
//         />
//       </form>
//     )
  


// export default New;
