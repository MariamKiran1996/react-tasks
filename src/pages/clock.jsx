import React from 'react'
import ClockForm from '../components/clockForm'
import DisplayClock from '../components/displayClock';

export default function Clock() {
    const [formValues, setFormValues] = useState([]);
    const handleFormSubmit = (values)=>{
        setFormValues(values);

    }
    
  return (
    
    <div>
        <h1>clock Form</h1>
        <ClockForm onSubmit = {handleFormSubmit}></ClockForm>
        <DisplayClock values={formValues} />

    </div>
  )
}
