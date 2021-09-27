import React from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'



 
    const initialValues={
            firstName:'',
            lastName:'',
            UserName:'',
            email:"",
            mobileNumberOne:'',
            mobileNumberTwo:'',
            Hobbies:["",""],
            Hobbies:['']
        }
        
        // const initialValues={

        // }
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
            // Hobbies:Yup.array.of(
            //     Yup.object().shape({
            //         hobbiesname:Yup.string().required("required"),

            //    })

            //),
            // Hobbies:Yup.string()
            // .required("required"),
            mobileNumberOne:Yup.string()
            .matches(/^[1-9]{1}[0-9]{9}?$/,'error')
            .required("required"),
            mobileNumberTwo:Yup.string().matches(/^[1-9]{1}[0-9]{9}?$/,'error').when(['mobileNumberOne'],{
                is:mobileNumberOne=>mobileNumberOne,
                then:Yup.string()
                .required("required"),
            
            }),

        })
        // console.log("errors",errors)
       

    function NewForm(){
        
    
    
    // console.log("form values",formik.values)
    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <Form>
                <div className="form-control">
                <label htmlFor="firstName">FirstName</label>
                <Field type="text" id="firstName" 
                name="firstName" Csomponent={TextError}/>

{/* {formik.touched.firstName&& formik.errors.firstName?(
<div>{formik.errors.firstName}</div>):null} */}
<ErrorMessage name="firstName"/>
</div>
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
                                    <Field name={`hobbies${index},hobbiesname`} placeholder="hobbiesname" />
                          <Field name={`hobbies${index},hobbiestype`} placeholder="hobbiestype"/>
                          {
                              index >0 &&(
                              <button type="button" onClick={()=>remove(index)}>{''}-{''}</button>
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
                <label htmlFor="mobileNumberOne">mobilenumberone</label>
                <Field type="text" id="email" name="mobileNumberOne" />
                <ErrorMessage name="mobileNumberOne"/>
                


                <label htmlFor="mobilenumberTwo">mobilenumbertwo</label>
                <Field type="text" id="mobileNumberTwo" name="mobileNumberTwo" />
                <ErrorMessage name="mobileNumberTwo"/>
                
                <button type="submit">submit</button>
                <button type="reset">Reset</button>
                   </Form>
        </Formik>
        
    )
    }

export default NewForm;