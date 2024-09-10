import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    number: Yup.number().required('Required'),
    password: Yup.string().required('Required'),
    textareaInput: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    checkboxInput: Yup.array().min(1, 'At least one checkbox is required'),
    radioInput: Yup.string().required('Required'),
    dateInput: Yup.date().required('Required'),
    fileInput: Yup.mixed().required('Required'),
    urlInput: Yup.string().url('Invalid URL').required('Required'),
});

const initialValues = {
    name: '',
    email: '',
    number: '',
    password: '',
    textareaInput: '',
    gender: '',
    checkboxInput: [],
    radioInput: '',
    dateInput: '',
    fileInput: null,
    urlInput: '',
};

const ClockForm = ({ handleFormSubmit }) => {


    const handleSubmit = (values) => {
        
       
        handleFormSubmit(values)
    }

    return (

        
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                
                handleSubmit(values)
            }}
        >
            {({ setFieldValue }) => (
                <Form className='clockForm'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <div className='error'>
                            <ErrorMessage name="name" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="number">Number</label>
                        <Field name="number" type="number" />
                        <div className='error'>
                            <ErrorMessage name="number" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" />
                        <div className='error'>
                            <ErrorMessage name="email" />
                        </div>
                    </div>



                    <div>
                        <label htmlFor="password">Password</label>
                        <Field name="password" type="password" />
                        <div className='error'>
                            <ErrorMessage name="password" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="textareaInput">Comments</label>
                        <Field name="textareaInput" as="textarea" />
                        <div className='error'>
                            <ErrorMessage name="textareaInput" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="gender">Gender</label>
                        <Field name="gender" as="select">
                            <option value="" label="Select option" />
                            <option value="male" label="Male" />
                            <option value="female" label="Female" />
                            <option value="none" label="none of above" />
                        </Field>
                        <div className='error'>
                            <ErrorMessage name="gender" />
                        </div>
                    </div>

                    <div>
                        <label>Checkbox Group</label>
                        <div className='radioGroup'>
                            <label>
                                <Field type="checkbox" name="checkboxInput" value="checkbox1" />
                                Checkbox 1
                            </label>
                            <label>
                                <Field type="checkbox" name="checkboxInput" value="checkbox2" />
                                Checkbox 2
                            </label>
                            <label>
                                <Field type="checkbox" name="checkboxInput" value="checkbox3" />
                                Checkbox 3
                            </label>
                        </div>
                        <div className='error'>
                            <ErrorMessage name="checkboxInput" />
                        </div>
                    </div>

                    <div>
                        <label>Radio Group</label>
                        <div className='radioGroup'>
                            <label>
                                <Field type="radio" name="radioInput" value="radio1" />
                                Radio 1
                            </label>
                            <label>
                                <Field type="radio" name="radioInput" value="radio2" />
                                Radio 2
                            </label>
                            <label>
                                <Field type="radio" name="radioInput" value="radio3" />
                                Radio 3
                            </label>
                        </div>
                        <div className='error'>
                            <ErrorMessage name="radioInput" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="dateInput">Date of Birth</label>
                        <Field name="dateInput" type="date" />
                        <div className='error'>
                            <ErrorMessage name="dateInput" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="fileInput">File Input</label>
                        <input
                            name="fileInput"
                            type="file"
                            onChange={(event) => {
                                setFieldValue('fileInput', event.currentTarget.files[0]);
                            }}
                        />
                        <div className='error'>
                            <ErrorMessage name="fileInput" />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="urlInput">URL Input</label>
                        <Field name="urlInput" type="url" />
                        <div className='error'>
                            <ErrorMessage name="urlInput" />
                        </div>
                    </div>

                    <button type="submit" className='submitBtn'>Submit</button>
                </Form>
            )}
        </Formik>
    )
};

export default ClockForm;
