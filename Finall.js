import React from 'react';
import { Formik, Field, Form,ErrorMessage,FieldArray } from 'formik';
import * as Yup from 'yup'
//import NewSelect from './NewSelect';

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
                  return Yup.string().min(3,'min 3 letters').max(5,'max 5 letters').required("required")
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
            // .matches(/^[1-9]{1}[0-9]{9}?$/,'error')
            // .matches(phoneRegExp, 'Phone number is not valid')
            
            .required("required"),
            // .max(10,"exceeded 10 numbers"),
            mobilenumberTwo:Yup.string().when('mobilenumberOne',{
                is:mobilenumberOne=>mobilenumberOne,
                then:Yup.string()
                .required("required")
             }),
            
            Hobbies:Yup.array().of(Yup.object().shape({
              Hobbiesname:Yup.string().required('required'),
              Hobbiestype:Yup.string().required("Required")
            })),
             countries: Yup.string().required('country is required!'),
             states: Yup.string().required('state is required!'),
             cities: Yup.string().required('District is required!'),
             picked:Yup.string().required("Required"),
            
checked: Yup.array().min(1, 'required'),
Textarea:Yup.mixed().required("Required")
            
})
 
class Final extends React.Component{
  constructor(){
    super()
    this.state={firstName:"",
    lastName:'',
    UserName:'',
    email:'',
     Hobbies:[{Hobbiesname:"",Hobbiestype:""}],
    mobilenumberOne:'',
    mobilenumberTwo:"",
    picked: '',
          checked: [],
          Textarea:"",countries:[],states:[],cities:[],selectedCountry:'',selectedState:'',selectedCities:''
        }
        this.changeCountry = this.changeCountry.bind(this);
		this.changeState = this.changeState.bind(this);
  }
  

  componentDidMount() {
		this.setState({
			countries : [
                { name: 'India', states: [ {name: 'andhrapradesh' ,cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore']} ] },
				{ name: 'Germany', states: [ {name: 'A', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']} ] },
				{ name: 'Spain', states: [ {name: 'B', cities: ['Barcelona']} ] },
				{ name: 'USA', states: [ {name: 'C', cities: ['Downers Grove']} ] },
				{ name: 'Mexico', states: [ {name: 'D', cities: ['Puebla']} ] },
				
			]
		});
  }
  changeCountry(event) {
		this.setState({selectedCountry: event.target.value});
		this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
	}

	changeState(event) {
		this.setState({selectedState: event.target.value});
		const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry)
		this.setState({cities : stats.find(stat => stat.name1 === event.target.value).cities});
	}
   

  render(){
    return(
      
  <div>
  <center>
  <h1>Form Creation </h1>
  <Formik
  initialValues={this.state}
  validationSchema={validationSchema}
  onSubmit={onSubmit}
    >
    {({ values,errors,touched}) => (
      <Form>
        <label htmlFor="firstName">firstName</label>
          <Field type="text"
          id="firstName"
          name="firstName"/>
          {/* <ErrorMessage name="firstName"/> */}
          {errors.firstName&&touched.firstName?(
            <div>{errors.firstName}</div>
            ):null}
            
          
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
              <Field type="text" id="mobilenumberOne" name="mobilenumberOne" />
              <ErrorMessage name="mobilenumberOne"/>
              <br></br>
              <label htmlFor="mobilenumberTwo">mobilenumbertwo</label>
              <Field type="text" id="mobilenumberTwo" name="mobilenumberTwo" />
              <ErrorMessage name="mobilenumberTwo"/>
              <br></br>
              </div>
              <div className="form-control">
              <label>Textarea</label>
              <br></br>
              <Field as='Textarea' name="Textarea"  id="Textarea" rows='6' col="6"/>
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
        <div>
					<label>Country</label>
					<select placeholder="Country" name="countries" value={this.state.selectedCountry} onChange={this.changeCountry}>
                    <option>--Choose Country--</option>
						{this.state.countries.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>

				<div>
					<label>State</label>
					<select placeholder="State" name="states" value={this.state.selectedState} onChange={this.changeState}>
                    <option>--Choose State--</option>
						{this.state.states.map((e, key) => {
							return <option key={key}>{e.name}</option>;
						})}
					</select>
				</div>
				
			 {/* <div>
					<label>City</label>
					<select placeholder="City" id="cities" name="cities">
						 <option>--Choose City--</option> 
						{this.state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
				</div>  */}
                <div>
					<label>City</label>
					<select placeholder="City" >
						<option>--Choose City--</option>
						{this.state.cities.map((e, key) => {
							return <option key={key}>{e}</option>;
						})}
					</select>
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
}
       
export default Final;

