import React from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray} from 'formik'
import * as Yup from 'yup'


const initialValues={
    firstName:"",
    lastName:"",
    email:"",
    social:{
        instagram:'',
        whtasup:"",
    },
    hobbies:[''],
    toggle:false,
    checked:[]

}
const onSubmit=values=>{
    console.log("values",values)
    alert(JSON.stringify(values,null,2))

}
const validationSchema=Yup.object({
    firstName:Yup.string()
    .required("Required")
})

const Practice=()=>{
    return(
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onsubmit}>
        <Form>
            
            <label htmlFor="firstName">firstName</label>
            <Field type="text"
            id="firstName"
            name="firstName"/>
            <ErrorMessage name="firstName"/>


            <label htmlFor="instagram">instagram</label>
            <Field type="text"
            id="instagram"
            name="social.instagram"/>
              <label htmlFor="whatsup">whatsup</label>
            <Field type="text"
            id="instagram"
            name="social.whatsup"/>

            <label htmlFor="hobbies">hobbies</label>
            <FieldArray type="text"
            id="hobbies"
            name="hobbies">
                {
                    (fieldArrayProps)=>{
                        const{push,remove,form}=fieldArrayProps
                        const{values}=form
                        const{hobbies}=values
                        return(
                            <div>
                                {
                                    hobbies.map((hobbie,index)=>(
                                        <div key={index}>
                                        <Field name={`hobbies[${index}]`}/>
                                        <button type="button" onClick={()=>push(index)}>{''}+{''}</button>
                                        {
                                            index > 0 &&(
                                                <button type="button" onClick={()=>remove(index)}>{''}-{''}</button>
                                            )
                                        }
                                          {/* <button type="button" onClick={()=>push(index)}>{''}+{''}</button> */}
                                        </div>
                                    ))
                                }
                                </div>
                                
                        )

                    }
                }
                
                

      
     
        
                </FieldArray>

                            <button type="submit">submit</button>
        </Form>
        </Formik>
    )
}

export default Practice;




        
    
