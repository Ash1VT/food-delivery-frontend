import { useState } from 'react'
import { ReviewCreateFormProps } from '../../reviews.types';
import * as Yup from 'yup';
import { Form, Formik, FormikHelpers } from 'formik';
import CustomRating from 'src/components/custom-rating/CustomRating';
import './review_create_form.css'


interface FormValues {
    customerFullName: string
    customerImageUrl?: string
    customerId: string
    rating: number
    comment?: string
}

const ReviewForm = ({ title, currentUser, onReviewAdded } : ReviewCreateFormProps) => {

    const initialValues: FormValues = {
        customerFullName: currentUser.fullName,
        customerImageUrl: currentUser.imageUrl,
        customerId: currentUser.id,
        rating: 5,
        comment: ''
    }

    const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
        customerFullName: Yup.string().required(),
        customerImageUrl: Yup.string().required(),
        customerId: Yup.string().required(),
        rating: Yup.number().min(1).max(5).required('Provide a rating'),
        comment: Yup.string().optional(),
    })

    const handleSubmit = async (values: FormValues, { setSubmitting } : FormikHelpers<FormValues>)  => {
        alert(JSON.stringify(values, null, 2))
        await onReviewAdded(values)
        // setSubmitting(false)
    };

    const handleNotFoundImage = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.onerror = null
        event.currentTarget.src = 'images/default_user_logo.svg'
    }
    
    return (
        <Formik initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={handleSubmit}>
            {({ values, setFieldValue, handleChange }) => {
                return (
                    <div className="review__create__form__wrapper">
                        <h3 className="review__create__form__title">{title}</h3>
                        <div className="review__create__form__content">
                            <div className="review__create__form__header">
                                <div className="review__user__details__wrapper">
                                    <div className="review__user__image__wrapper">
                                        <img src={currentUser.imageUrl} alt="user" onError={handleNotFoundImage}/>
                                    </div>
                                    <div className="review__user__name">
                                        {currentUser.fullName}
                                    </div>
                                </div>
                                <CustomRating className="review__create__form__rating" style={{ maxWidth: 200 }} value={values.rating} onChange={(ratingValue: number) => { setFieldValue('ratingValue', ratingValue) }} />
                            </div>
                            <Form className="review__create__form">
                                <input type="hidden" name="customerId" value={values.customerId} />
                                <input type="hidden" name="customerFullName" value={values.customerFullName} />
                                <input type="hidden" name="customerImageUrl" value={values.customerImageUrl} />
                                <input type="hidden" name="ratingValue" value={values.rating} />
                                <textarea name="text" className="review__create__form__input review__create__form__text" placeholder="Write your review..." value={values.comment} onChange={handleChange} />
                                <button type="submit" className="button__wrapper button__text review__create__form__button">Submit Your Review</button>
                            </Form>
                        </div>
                    </div>
                )
            }}
        </Formik>

    )
}

export default ReviewForm