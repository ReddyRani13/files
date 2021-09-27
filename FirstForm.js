import React from 'react'
import { Field,useFormik,FieldArray } from 'formik'
import * as Yup from 'yup';


const SignupForm=()=>{
    const formik=useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            UserName:'',
            email:'',
            hobbies:[{hobbiesname:"",hobbiestype:""}],
             mobilenumberOne:'',
             mobilenumberTwo:''

        },
        validationSchema:Yup.object({
            firstName:Yup.string()
            .min(3)
            .max(5,"min 3 max 5 characters are allowed")
            .required("required")
            .matches(/^[A-Za-z]*$/, "Only alphabets are allowed for this field "),
            lastName:Yup.string()
            .min(3)
            .max(5,"min 3 max 5 characters are allowed")
            .required("required")
            .matches(/^[A-Za-z]*$/, "Only alphabets are allowed for this field "),
      
            UserName:Yup.string()
            .min(3)
            .max(20,"min 3 max 5 characters are allowed")
            .required("required"),
            email:Yup.string()
            .min(3)
            .max(50,"min 3 and max 20 characters are allowed")
            .email('INvalid email address')
            .required("Required"),
    // hobbies:Yup.string()
    // .required("required")

    }),

        onSubmit:values=>{
            // alert(JSON.stringify(values,null,2));
            console.log(values)

        },
    });
    ;

    return(
        // <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input 
                id="firstName"
                name="firstName"
                type="text"
                placeholder="firstName"
               {...formik.getFieldProps('firstName')}
/>
                {
                    formik.touched.firstName && formik.errors.firstName?(
                        <div>{formik.errors.firstName}</div>
                    ):null}
                <br></br>
                <label htmlFor="lastName">last Name</label>
                <input 
                id="lastName"
                name="lastName"
                type="text"
                placeholder="lastName"
                {...formik.getFieldProps('lastName')}
                />
                {
                    formik.touched.lastName && formik.errors.lastName?(
                        <div>{formik.errors.lastName}</div>
                    ):null}
                <br></br>
                <label htmlFor="UserName">User Name</label>
                <input 
                id="UserName"
                name="UserName"
                type="text"
                placeholder="UserName"
                {...formik.getFieldProps('UserName')}
               />
                {
                    formik.touched.UserName && formik.errors.UserName?(
                        <div>{formik.errors.UserName}</div>
                    ):null}
                    <br></br>
                      <label htmlFor="email">email</label>
                <input 
                id="email"
                name="email"
                type="text"
                {...formik.getFieldProps('email')}
             />
                {
                    formik.touched.email&& formik.errors.email?(
                        <div>{formik.errors.email}</div>
                    ):null}

                    <br></br>
                     <div className='form-control'>
            <label>hobbies</label>
              <FieldArray name='hobbies'>
                {(fieldArrayProps) => {
                  const {remove, form,insert } = fieldArrayProps
                  const { values } = form
                  const { hobbies } = values
                  // console.log('fieldArrayProps', fieldArrayProps)
                  // console.log('Form errors', form.errors)
                  return (
                    <div>
                        {/* <form onSubmit={formik.handleSubmit}/> */}
                      {hobbies.map((hobbie, index) => (
                        <div key={index}>
                          <Field name={`hobbies${index},hobbiesname`} />
                          <Field name={`hobbies${index},hobbiestype`} />
                          {index > 0 && (
                              
                              
                            <button type='button' onClick={() => remove(index)}>
                              -
                            </button>
                          )}
                        </div>
                      ))}
                      <button type='button' onClick={() => insert(hobbies)}>
                        +
                      </button>
                    </div>
                  )
                }}
              </FieldArray>
              </div>
                    <br></br>
                    <label htmlFor="mobilenumberOne">mobilenumberone</label>
    <input 
                id="mobilenumberOne"
                name="mobilenumberOne"
                type="text"
                {...formik.getFieldProps('mobilenumberOne')}
              />
                {
                    formik.touched.mobilenumberOne&& formik.errors.mobilenumberOne?(
                        <div>{formik.errors.mobilenumberOne}</div>
                    ):null} 
                    <br></br>
                   <label htmlFor="mobilenumberTwo">mobilenumberTwo</label>
                    <input 
                id="mobilenumberTwo"
                name="mobilenumberTwo"
                type="text"
                {...formik.getFieldProps('mobilenumberTwo')}
               />
                {
                    formik.touched.mobilenumberTwo&& formik.errors.mobilenumberTwo?(
                        <div>{formik.errors.mobilenumberTwo}</div>
                    ):null}
                    <br></br>
                    <button type="submit">Submit</button>
                    
                    <button type="button" onClick={()=>formik.resetForm()}>reset</button>
            
                    
            </form>
            //  </FormikProvider>
        
        
    );
};

export default SignupForm;