import React from 'react'
import ClockForm from '../components/clockForm'

export default function clock() {
    const [formValues, setFormValues] = useState([]);
    const handleFormSubmit = (values)=>{
        setFormValues(values);

    }
    
  return (
    
    <div>
        <h1>clock Form</h1>
        <ClockForm onSubmit = {handleFormSubmit}></ClockForm>

    </div>
  )
}
