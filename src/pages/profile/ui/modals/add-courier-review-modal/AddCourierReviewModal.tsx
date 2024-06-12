import React from 'react'
import * as Yup from 'yup'
import { AddCourierReviewModalProps } from 'src/pages/profile/profile.types'
import CustomRating from 'src/components/custom-rating/CustomRating'
import { Form, Formik, FormikHelpers } from 'formik'
import FormErrorNotification from 'src/components/form-error-notification/FormErrorNotification'
import './add_courier_review_modal.css'
import CustomButton from 'src/components/ui/buttons/custom-button/CustomButton'

interface FormValues {
    ratingValue: number
}

const AddCourierReviewModal = ({courier, orderId, onCourierReviewCreated} : AddCourierReviewModalProps) => {

    const initialValues: FormValues = {
        ratingValue: 0,
    }

    const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
        ratingValue: Yup.number().min(1, 'Provide a rating').max(5, 'Provide a rating').required('Provide a rating'),
    })

    const handleNotFoundImage = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.onerror = null
        event.currentTarget.src = 'images/default_user_logo.svg'
    }

    const handleCourierReviewCreated = async (values: FormValues)  => {
        await onCourierReviewCreated({
            rating: values.ratingValue,
            orderId: orderId
        })
    };

    return (
        <Formik initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={handleCourierReviewCreated}>
            {({ values, setFieldValue, submitForm }) => {
                return (
                    <div className="add__courier__review__modal__container">
                        <div className='add__courier__review__modal__wrapper'>
                            <div className="add__courier__review__modal__user__details">
                                <div className="add__courier__review__modal__image__wrapper">
                                    <img className="add__courier__review__modal__image" src={courier.imageUrl} alt="user" onError={handleNotFoundImage}/>
                                </div>
                                <div className="add__courier__review__modal__user__name">
                                    {courier.fullName}
                                </div>
                            </div>
                            <CustomRating className="add__courier__review__modal__rating" style={{ maxWidth: 200 }} value={values.ratingValue} onChange={(ratingValue: number) => { setFieldValue('ratingValue', ratingValue) }} />
                        </div>
                        <Form className="add__courier__review__modal__form">
                            <FormErrorNotification/>
                            <input type="hidden" name="ratingValue" value={values.ratingValue} />
                            <CustomButton className="add__courier__review__modal__submit__button" label='Submit Your Review' onClick={submitForm}/>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default AddCourierReviewModal