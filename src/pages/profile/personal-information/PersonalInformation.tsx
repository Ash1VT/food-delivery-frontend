import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import ControlledInput from 'src/components/ui/controlled-input/ControlledInput';
import formatDate from 'src/utils/formatDate';

interface FormValues {
    firstName: string;
    lastName: string;
    birthDate: Date;
    phone: string;
}

const PersonalInformation = () => {

    const initialValues: FormValues = {
        firstName: "John",
        lastName: "Doe",
        birthDate: new Date(),
        phone: "+375298830141"
    }

    const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        birthDate: Yup.date().typeError("Date is not correct").required('Birth Date is required'),
        phone: Yup.string().required('Phone is required'),
    })

    const handleSubmit = async (values: FormValues, { setSubmitting } : FormikHelpers<FormValues>) => {
        // Handle form submission here
        // console.log('Form submitted with values:', values);
        alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
    }
    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
        {({ errors, values, setFieldValue, submitForm }) => {
            return (
                <Form>
                    <ControlledInput label='First Name' 
                                    value={values.firstName}
                                    error={errors.firstName}
                                    setValue={firstName => { setFieldValue('firstName', firstName) }}
                                    parseValue={value => value}
                                    convertToString={value => value}
                                    onSave={async () => await submitForm()}>
                        <input type='text'/>   
                    </ControlledInput>
 
                    <ErrorMessage name='firstName' component='div' />

                    <ControlledInput label='Last Name' 
                                    value={values.lastName}
                                    error={errors.lastName}
                                    setValue={lastName => { setFieldValue('lastName', lastName) }}
                                    parseValue={value => value}
                                    convertToString={value => value}
                                    onSave={async () => await submitForm()}>
                        <input type='text'/>   
                    </ControlledInput>
                        
                    <ErrorMessage name='lastName' component='div' />

                    <ControlledInput label='Birth Date' 
                                    value={values.birthDate}
                                    error={errors.birthDate ? String(errors.birthDate) : undefined}
                                    setValue={birthDate => { console.log(birthDate); setFieldValue('birthDate', birthDate) }}
                                    parseValue={value => new Date(value)}
                                    convertToString={value => formatDate(value)}
                                    onSave={async () => await submitForm()}>
                        <input type='date'/>
                    </ControlledInput>

                    <ErrorMessage name='birthDate' component='div' />

                    <ControlledInput label='Phone' 
                                    value={values.phone}
                                    error={errors.phone}
                                    setValue={phone => { setFieldValue('phone', phone) }}
                                    parseValue={value => value}
                                    convertToString={value => value}
                                    onSave={async () => await submitForm()}>
                        <input type='tel'/>   
                    </ControlledInput>

                    <ErrorMessage name='phone' component='div' />
                </Form>
            )}}
        </Formik>
    )
}

export default PersonalInformation