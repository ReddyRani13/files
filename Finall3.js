import { Formik, Form, ErrorMessage, Field, FieldArray } from 'formik'
import * as Yup from 'yup'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'



const dataCountry = [
    { value: "India", label:"India" ,link:'India' },
    { value: "USA", label:"USA" , link: 'India' },
  ];
  const dataStates = [
    { value: "Uttar Pradesh", label:"Uttar Pradesh" ,link: 'India'},
    { value: "Telangana", label:"Telangana", link:'India' },
    { value: "California", label:"California", link: 'USA' },
    { value: "Laswagus",label:"Laswagus", link:'USA' },
  ];
  const dataDistrict = [
    { value: "Agra", label:"Agra" , link:'Uttar Pradesh'},
    { value: "Guntur",label:"Guntur" ,link: 'Telangana' },
    { value: "California",label:"California", link:'California' },
    { value: "Wagus",label:"Wagus", link:'Laswagus' },
  ];




const newCountry = [
  { countryName: "India", cId:'India'},
  { countryName: "Unitedstates", cId: "Unitedstates" },
];
const newStates = [
  { stateName: "Andhrapradesh", sId:'Andhrapradesh', cId:"India" },
  { stateName: "Telangana", sId: "Telangana", cId:"India"},
  { stateName: "California", sId:"California", cId: "Unitedstates" },
  { stateName: "Laswagus", sId:"Laswagus", cId:"Unitedstates" },
];
const newCity= [
  { districtName: "Tirupathi", dId:"Tirupathi", sId: "Andhrapradesh" },
  { districtName: "Hyderabad", dId: "Hyderabad", sId:"Telangana" },
  { districtName: "Washingtondc", dId:"Washington", sId: "California" },
  { districtName: "texas", dId:"texas", sId:"Laswagus"},
]
  function Finall3() {
    const initialValues = {
      firstName: "",
      lastName: '',
      UserName: '',
      email: '',
      Hobbies: [{ Hobbiesname: "", Hobbiestype: "" }],
      mobilenumberOne: '',
      mobilenumberTwo: "",
      picked: '',
      checked: [],
      Textarea: "",
      startDate: new Date(),
      country: '',
      states: '',
      City: '',
      selectedCity: [],
      selectedState: [],
      country:'',
      states:'',
      district:'',
      countryOption:[],
      stateOption:[],
      districtOption:[]
    }
    const onSubmit = (values, onSubmitProps) => {
      console.log('Form data', values)

      alert(JSON.stringify(values, null, 2))
      // onSubmitProps.setSubmitting(false)
      // onSubmitProps.resetForm()

    }
    const validationSchema = Yup.object({
      firstName: Yup.string()
        .min(3)
        .max(5, "min 3 max 5 characters are allowed")
        .required("required")
        .matches(/^[A-Za-z]*$/, "Only alphabets are allowed for this field "),
      lastName: Yup.lazy((value) => {
        if (value !== undefined) {
          return Yup.string().min(3, 'min 3 letters').max(5, 'max 5 letters')
            .required("required")
            .matches(/^[A-Za-z]*$/, "Only alphabets are allowed for this field ")

        }
        return Yup.mixed().notRequired()
      }),
      UserName: Yup.string()
        .min(5)
        .max(50, "min 3 max 5 characters are allowed")
        .required("required"),
      email: Yup.string()
        .min(3)
        .max(50, "min 3 and max 20 characters are allowed")
        .email('INvalid email address')
        .required("Required"),
      mobilenumberOne: Yup.number()
        .min(100000000, "minimum 10 values")
        .max(9999999999, "exceeded limit")

        .required("required"),
      // .max(10,"exceeded 10 numbers"),
      mobilenumberTwo: Yup.number().when('mobilenumberOne', {
        is: mobilenumberOne => mobilenumberOne,
        then: Yup.number()
          .min(100000000, "minimum 10 values")
          .max(9999999999, "exceeded limit")
          .required("required")
      }),

      Hobbies: Yup.array().of(Yup.object().shape({
        Hobbiesname: Yup.string().required('required'),
        Hobbiestype: Yup.string().required("Required")
      })),
        //  Country: Yup.string().required('country is required!'),
        // State: Yup.string().required('state is required!'),
        //  City: Yup.string().required('District is required!'),
      picked: Yup.string().required("Required"),

      checked: Yup.array().min(1, 'required'),
      Textarea: Yup.mixed().required("Required")

    })


    return (

      <div>
        <center>
          <h1>Form Creation </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <label htmlFor="firstName">firstName</label>
                <Field as="input"
                  id="firstName"
                  name="firstName" />
                 <ErrorMessage name="firstName"/>


                <div className="form-control">
                  <label htmlFor="lastName">lastName</label>
                  <Field as="input" id="lastName" name="lastName" />
                  <ErrorMessage name="lastName" />
                </div>
                <div className="form-control">
                  <label htmlFor="UserName">UserName</label>
                  <Field as="input" id="UserName" name="UserName"
                  />

                  <ErrorMessage name="UserName" />
                </div>
                <div className="form-control">
                  <label htmlFor="email">email</label>
                  <Field as="input" id="email" name="email" />
                  <ErrorMessage name="email" />
                </div>

                <div className="form-control">
                  <label>hobbies</label>

                  <FieldArray name="Hobbies">
                    {
                      (fieldArrayProps) => {
                        console.log("fieldArrayProps", fieldArrayProps)
                        // console.log("values",values)
                        // alert("fieldArrayprops",fieldArrayProps)
                        const { push, remove, form } = fieldArrayProps
                        const { values } = form
                        const { Hobbies } = values
                        return ( 
                          <div>
                            {
                              Hobbies.map((Hobbie, index)=> (

                                <div key={index}>

                                  <Field name={`Hobbies.${index}.Hobbiesname`} placeholder="Hobbiesname" />
                                  <ErrorMessage name={`Hobbies.${index}.Hobbiesname`} />
                                  <Field name={`Hobbies.${index}.Hobbiestype`} placeholder="Hobbiestype" />
                                  <ErrorMessage name={`Hobbies.${index}.Hobbiestype`} />
                                  {
                                    index > 0 && (
                                      <button type="button" onClick={() => remove(index, Hobbie)}>{''}-{''}</button>
                                    )}
                                    <button type="button" onClick={()=>remove(index,Hobbie)}>{''}-{''}</button>


                                  <button type="button" onClick={() => push('')}>+</button>
      
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
                  <ErrorMessage name="mobilenumberOne" />
                  <br></br>
                  <label htmlFor="mobilenumberTwo">mobilenumbertwo</label>
                  <Field type="number" id="mobilenumberTwo" name="mobilenumberTwo" />
                  <ErrorMessage name="mobilenumberTwo" />
                  <br></br>
                </div>
                <div className="form-control">
                  <label>Textarea</label>
                  <br></br>
                  {/* <Field  name="Textarea" as='Textarea' id="Textarea" rows='6' col="6"/> */}
                  <Field as="textarea" id="Textarea" name="Textarea" rows='6' col="6" />
                  <ErrorMessage name="Textarea" />
                </div>


                <div id="my-radio-group">Radio button</div>
                <div role="group" aria-labelledby="my-radio-group">
                  <label>one</label>
                  <Field type="radio" name="picked" value="One" id="picked" />
                  <label>Two</label>
                  <Field type="radio" name="picked" value="Two" id="picked" />
                  <ErrorMessage name="picked" />
                  <div>Picked: {values.picked}</div>
                </div>
                <ErrorMessage name="picked" />

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
                  <ErrorMessage name="checked" />
                </div>




                <div>
                  <label> Country:</label>
                  <Field as="select"
                    value={values.country}
                    onChange={event => {
                      const country = event.target.value;
                      const states = newStates.filter(states => states.cId === country);
                      console.log('Country', { country, states })
                      setFieldValue('country', country,)
                      setFieldValue('selectedState', states)
                    }}
                  >
                    <option>--select Country--</option>
                    {newCountry.map((x, y) => {
                      return <option key={y} value={x.cId}>{x.countryName}</option>
                    })}
                  </Field><br />

                  <label>State:</label>
                  <Field as="select"
                    value={values.states}
                    onChange={event => {
                      const states = event.target.value;
                      const City = newCity.filter(district => district.sId === states);
                      console.log('state', { states })
                      setFieldValue('states', states)
                      setFieldValue('selectedCity', City)

                    }}>
                    <option>--select State--</option>
                    {values.selectedState.map((x, y) => {
                      return <option key={y} value={x.sId}>{x.stateName}</option>
                    })}
                  </Field><br />

                  <label>City</label>
                  <Field as="select"
                    onChange={event => {
                      console.log('city ', values.City)
                      setFieldValue('City', event.target.value)
                    }}
                  >
                    <option>--selectCity--</option>
                    {values.selectedCity.map((x,y) => {
                      return <option key={y} value={x.dId}>{x.districtName}</option>
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
                  <label>Country:</label>
        <Select value={values.country}
        isMulti={true}
        options={dataCountry}
        onChange={(e)=>{
          const country = dataCountry.filter(x=>x.link === e.target)
          setFieldValue('country',e.value)
          setFieldValue('countryOption',e)
          console.log('Country==>',e)
  }}
   />

   <label>State:</label>
   <Select value={values.states}
   isMulti={true}
   options={dataStates}
   onChange={(e)=>{
     setFieldValue('states',e.value)
     setFieldValue('stateOption', e)
     console.log('state==>',e)
     
   }}
   />

   <label>District:</label>
   <Select value={values.district}
   isMulti={true}
   options={dataDistrict}
   onChange={(e)=>{
     setFieldValue('district', e.value)
     setFieldValue('districtOption', e)
     console.log('district==>',e)

   }}/>
                <button type="submit">submit</button>
                <button type="reset">cancel</button>
              </Form>
            )}
          </Formik>
        </center>
      </div>

    )
  }

export default Finall3;