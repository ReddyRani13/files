import {useState,useEffect} from 'react'
import {Formik,Form,ErrorMessage,Field,FieldArray} from 'formik'
import * as Yup from 'yup'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function Functionalc(){
    const[state,setState]=useState({
		firstName:"",
    lastName:'',
    UserName:'',
    email:'',
     Hobbies:[{Hobbiesname:"",Hobbiestype:""}],
    mobilenumberOne:'',
    mobilenumberTwo:"",
    picked: '',
          checked: [],
          Textarea:"",
          startDate:new Date(),
        countries : [],
			states : [],
			cities : [],
			selectedCountry : '--Choose Country--',
			selectedState : '--Choose State--',
            selectedCity:'--choose City',
             
		

    })
    

    useEffect(() => {
        setState({...state,countries:[
          { name: 'India', states: [ {name: 'andhrapradesh' ,cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
  { name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
  { name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
  { name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
  { name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
  
]})

    },[])

 const changeCountry=function(e) {
		setState({selectedCountry: e.target.value});
		setState({states :state.countries.find(cntry => cntry.name === e.target.value).states});
	}

const changeState=function(e) {
		setState({selectedState: e.target.value});
		// const stats = state.countries.find(cntry => cntry.name === state.selectedCountry).states;
		setState({cities :state.states.find(stat => stat.name === e.target.value).cities});
	}
    const changeCity=function(e){
        setState({selectedCity:e.target.value});
		
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
				  lastName:Yup.lazy((value)=>{
					if(value!==undefined){
						return Yup.string().min(3,'min 3 letters').max(5,'max 5 letters')
            .required("required")
            .matches(/^[A-Za-z]*$/, "Only alphabets are allowed for this field ")
            
					}
					return Yup.mixed().notRequired()   
				}),
				 UserName:Yup.string()
				  .min(5)
				  .max(50,"min 3 max 5 characters are allowed")
				  .required("required"),
				  email:Yup.string()
				  .min(3)
				  .max(50,"min 3 and max 20 characters are allowed")
				  .email('INvalid email address')
				  .required("Required"),
				  mobilenumberOne:Yup.number()
				  .min(100000000,"minimum 10 values")
          .max(9999999999,"exceeded limit")
				  
				  .required("required"),
				  // .max(10,"exceeded 10 numbers"),
				  mobilenumberTwo:Yup.number().when('mobilenumberOne',{
					  is:mobilenumberOne=>mobilenumberOne,
					  then:Yup.number()
					  .min(100000000,"minimum 10 values")
          .max(9999999999,"exceeded limit")
          .required("required")
				   }),
				  
				  Hobbies:Yup.array().of(Yup.object().shape({
					Hobbiesname:Yup.string().required('required'),
					Hobbiestype:Yup.string().required("Required")
				  })),
				//    countries: Yup.string().required('country is required!'),
				//    states: Yup.string().required('state is required!'),
				//    cities: Yup.string().required('District is required!'),
				   picked:Yup.string().required("Required"),
				  
	  checked: Yup.array().min(1, 'required'),
	  Textarea:Yup.mixed().required("Required")
				  
	  })


return(

    <div>
  <center>
  <h1>Form Creation </h1>
  <Formik
  initialValues={state}
  validationSchema={validationSchema}
  onSubmit={onSubmit}
    >
    {({values,errors,touched,setFieldValue}) => (
      <Form>
        <label htmlFor="firstName">firstName</label>
          <Field as="input"
          id="firstName"
          name="firstName"/>
          {/* <ErrorMessage name="firstName"/> */}
          {errors.firstName&&touched.firstName?(
            <div>{errors.firstName}</div>
            ):null}
            
          
          <div className="form-control">
              <label htmlFor="lastName">lastName</label>
              <Field as="input" id="lastName" name="lastName"/>
              <ErrorMessage name="lastName"/>
          </div>
         <div className="form-control">
              <label htmlFor="UserName">UserName</label>
              <Field as="input" id="UserName" name="UserName"
          />

      <ErrorMessage name="UserName"/>
    </div>
     <div className="form-control">
              <label htmlFor="email">email</label>
              <Field as="input" id="email" name="email" />
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
                                  
                                  <Field name={`Hobbies.${index}.Hobbiesname`} placeholder="Hobbiesname" />
                                  <ErrorMessage name={`Hobbies.${index}.Hobbiesname`}/>
                        <Field name={`Hobbies.${index}.Hobbiestype`} placeholder="Hobbiestype"/>
                        <ErrorMessage name={`Hobbies.${index}.Hobbiestype`}/>
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

   <div className="form-control">
              <label htmlFor="mobilenumberOne">mobilenumberone</label>
              <Field type="number" id="mobilenumberOne" name="mobilenumberOne" />
              <ErrorMessage name="mobilenumberOne"/>
              <br></br>
              <label htmlFor="mobilenumberTwo">mobilenumbertwo</label>
              <Field type="number" id="mobilenumberTwo" name="mobilenumberTwo" />
              <ErrorMessage name="mobilenumberTwo"/>
              <br></br>
              </div>
              <div className="form-control">
              <label>Textarea</label>
              <br></br>
              {/* <Field  name="Textarea" as='Textarea' id="Textarea" rows='6' col="6"/> */}
              <Field as="textarea" id="Textarea" name="Textarea" rows='6' col="6"/>
              <ErrorMessage name="Textarea"/>
              </div>


             <div id="my-radio-group">Radio button</div>
        <div role="group" aria-labelledby="my-radio-group">
          <label>one</label>
            <Field type="radio" name="picked" value="One"  id="picked"/>
          <label>Two</label>
            <Field type="radio" name="picked" value="Two" id="picked"/>
            <ErrorMessage name="picked"/> 
           <div>Picked: {values.picked}</div>
        </div>
        <ErrorMessage name="picked"/> 
      
          {/* <Field type="checkbox" name="toggle" id="toggle"/>
      {`${values.toggle}`}*/}
        
        
        <div id="checkbox-group">Check box</div>
        <div role="group" aria-labelledby="checkbox-group">
          <label>
            <Field type="checkbox" name="checked" value="html" />
            html
          </label>
          <label>
            <Field type="checkbox" name="checked" value="javascript" />
            javascript
          </label>
          <label>
            <Field type="checkbox" name="checked" value="react" />
            react
          </label>
          <br></br>
          <ErrorMessage name="checked"/>
        </div>
       

{/*       
        <button type="submit">submit</button>
              <button type="reset">cancel</button>
      </Form>
    )}
  </Formik>
  </center>
</div> */}
				
	
				<div>
					<label>Country</label>
					<select placeholder="Country" name="countries" value={state.selectedCountry} onChange={changeCountry}>
                    {/* <option>--Choose Country--</option> */}
						{state.countries&&state.countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				<div className="form-control">
					<label>state</label>
					<Field  name="states" as="select" value={state.selectedState} onChange={changeState}>
					<option>--Choose State--</option>
						{state.states&&state.states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</Field>
				</div>

{/* 
                    <div>
					<label>City</label>
					<select placeholder="City">
						 <option>--Choose City--</option> 
						{state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>  */}

<div className="form-control">
					<label>city</label>
					<Field name="Cites" as="select"value={state.selectedCity} onChange={changeCity}>
						<option>--Choose City--</option>
						{state.cities&&state.cities.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</Field>
				</div>
        <div className="row ml-4 mr-4">
                  <div className="form-group col-3 mb-2">
                    <DatePicker 
                      selected={values.startDate}
                      dateFormat="MMMM d, yyyy"
                      className="form-control"
                      name="startDate"
                      onChange={date => setFieldValue('startDate', date)}
                    />
                  </div>

                </div>
                <div className="row mb-3">
                  <div className="col-5 mb-4"></div>
                 
                </div>
			
    
				<button type="submit">submit</button>
              <button type="reset">cancel</button>
      </Form>
    )}
  </Formik>
  </center>
</div>

)


}


export default Functionalc;
