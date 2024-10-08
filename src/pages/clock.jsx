import React, {useState} from 'react'
import ClockForm from '../components/clockForm'
import DisplayClock from '../components/displayClock';

const Clock=()=> {
    const [formValues, setFormValues] = useState([]);
    // console.log("values in parent", values, formValues);
    const handleFormSubmit = (values) => {
        console.log("values", values)
        setFormValues(values);
    }
    
  return (
    
    <div>
        <h1>clock Form</h1>
       
        <ClockForm handleFormSubmit={handleFormSubmit} />
        <DisplayClock values={formValues} />

    </div>
  )
}
export default Clock;