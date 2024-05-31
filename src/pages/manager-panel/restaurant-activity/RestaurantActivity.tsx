import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup'
import { RestaurantActivityProps } from '../manager_panel.types'
import { addSuccessNotification } from 'src/utils/notifications'
import FormErrorNotification from 'src/components/form-error-notification/FormErrorNotification'
import './restaurant_activity.css'

interface FormValues {
    isActive: boolean
}

const RestaurantActivity = ({id, isActive, onRestaurantActivityChange} : RestaurantActivityProps) => {

    const initialValues: FormValues = {
        isActive
    }

    const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
        isActive: Yup.boolean().required('Activity is required')
    })

    const handleSubmit = async (values: FormValues, { setSubmitting } : FormikHelpers<FormValues>) => {
        setSubmitting(false)
        await onRestaurantActivityChange(id, values.isActive)
    }


    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema} 
            onSubmit={handleSubmit}>
            
            {({ errors, values, setFieldValue, submitForm }) => {
                return (
                    <>
                        <FormErrorNotification/>
                        <Form>
                            <div className="restaurant__activity__form">
                                <input
                                    type="checkbox"
                                    name="isRestaurantActive"
                                    id="isRestaurantActive"
                                    className='restaurant__activity__checkbox'
                                    checked={values.isActive}
                                    onChange={(e) => {
                                        setFieldValue('isActive', e.target.checked)
                                        submitForm()
                                    }}
                                />
                                <label className="restaurant__activity__label" htmlFor="isActive">Active</label>
                            </div>
                        </Form>
                    </>
                )
            }}
        </Formik>
    )
}

export default RestaurantActivity