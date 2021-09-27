import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form,ErrorMessage,FieldArray } from 'formik';
import * as Yup from 'yup'



const initialValues={
  firstName:"",
  lastName:'',
  UserName:'',
  email:'',
  Hobbies:["",""],
  Hobbies:[''],
  mobilenumberOne:'',
  mobilenumberTwo:"",
  picked: '',
  toggle: false,
        checked: [],
        color:'',
  


}


 const onSubmit= (values,onSubmitProps)=>{
  console.log('Form data', values)
 
  alert(JSON.stringify(values,null,2))
  onSubmitProps.setSubmitting(false)
  onSubmitProps.resetForm()

}

const validationSchema=Yup.object({
  firstName:Yup.string()
            .min(3)
            .max(5,"min 3 max 5 characters are allowed")
            .required("required")
            .matches(/^[A-Za-z]*$/, "Only alphabets are allowed for this field "),
            lastName:Yup.string()
            .min(3)
            .max(5,"min 3 max 5 characters are allowed")
            .matches(/^[A-Za-z]*$/, "Only alphabets are allowed for this field "),
            UserName:Yup.string()
            .min(5)
            .max(50,"min 3 max 5 characters are allowed")
            .required("required"),
            email:Yup.string()
            .min(3)
            .max(50,"min 3 and max 20 characters are allowed")
            .email('INvalid email address')
            .required("Required"),
            mobilenumberOne:Yup.string()
            .matches(/^[1-9]{1}[0-9]{9}?$/,'error')
            .required("required"),
            mobilenumberTwo:Yup.string().matches(/^[1-9]{1}[0-9]{9}?$/,'error').when(['mobilenumberOne'],{
                is:mobilenumberOne=>mobilenumberOne,
                then:Yup.string()
                .required("required"),
            
            }),
            // color: Yup.string().required('Color is required!'),

      

})

const Radio = () => (
  <div>
    <h1>Form Creation </h1>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    
      >
      {({ values }) => (
        <Form>
          <label htmlFor="firstName">firstName</label>
            <Field type="text"
            id="firstName"
            name="firstName"/>
            <ErrorMessage name="firstName"/>
            <div className="form-control">
                <label htmlFor="lastName">lastName</label>
                <Field type="text" id="lastName" name="lastName"/>
                <ErrorMessage name="lastName"/>
</div>
<div className="form-control">
                <label htmlFor="UserName">UserName</label>
                <Field type="text" id="UserName" name="UserName"
            />

<ErrorMessage name="UserName"/>
 </div>
 <div className="form-control">
                <label htmlFor="email">email</label>
                <Field type="text" id="email" name="email" />
                

                <ErrorMessage name="email"/>
 </div>
 
 <div className="form-control">
     <label>hobbies</label>

     <FieldArray name="Hobbies">
         {
             (fieldArrayProps)=>{
                console.log("fieldArrayProps",fieldArrayProps)
                // console.log("values",values)
                // alert("fieldArrayprops",fieldArrayProps)
                 const{push,remove,form}=fieldArrayProps
                 const{values}=form
                 const{Hobbies}=values
                 return(
                    <div>
                        {
                            Hobbies.map((Hobbie,index)=>(
                              
                                <div key={index}>
                                    {/* <Field name={`Hobbies[${index}]`}/> */}
                                    <Field name={`Hobbies${index},Hobbiesname`} placeholder="Hobbiesname" />
                          <Field name={`Hobbies${index},Hobbiestype`} placeholder="Hobbiestype"/>
                          {
                              index >0 &&(
                              <button type="button" onClick={()=>remove(index,Hobbie)}>{''}-{''}</button>
                              )}
                                   
                                    <button type="button" onClick={()=>push('')}>+</button>
                                    
                                </div>
                                

                            ))}
                            </div>
            
                 )
                
             }
            
         }
     </FieldArray>
     </div>
                <label htmlFor="mobilenumberOne">mobilenumberone</label>
                <Field type="text" id="email" name="mobilenumberOne" />
                <ErrorMessage name="mobilenumberOne"/>
                


                <label htmlFor="mobilenumberTwo">mobilenumbertwo</label>
                <Field type="text" id="mobilenumberTwo" name="mobilenumberTwo" />
                <ErrorMessage name="mobilenumberTwo"/>
                <label htmlFor="email" style={{ display: 'block' }}>
        Color
      </label>
      <select
        name="color"
        style={{ display: 'block' , width:'100%',display:'flex',marginbottom:'5px'}}
      >
        <option value="" label="Select a color" />
        <option value="red" label="red" />
        <option value="blue" label="blue" />
        <option value="green" label="green" />
      

      </select>
      <ErrorMessage name="color"/>
      <button
        type="Reset"
        
        
      >
        Reset
      </button>
          <div id="my-radio-group">Picked</div>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="picked" value="One" />
              One
            </label>
            <label>
              <Field type="radio" name="picked" value="Two" />
              Two
            </label>
            <div>Picked: {values.picked}</div>
          </div>
          <label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>

          {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
          <div id="checkbox-group">Checked</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
          </div>
        
      

          <button type="submit">submit</button>
                <button type="reset">Reset</button>

         
        </Form>
      )}
    </Formik>
  </div>
)
export default Radio