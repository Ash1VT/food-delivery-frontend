import { useState, useRef } from "react"
import * as Yup from 'yup';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { ReviewUpdateFormProps } from "../../reviews.types"
import { Form, Formik, FormikHelpers } from "formik";
import CustomRating from "src/components/custom-rating/CustomRating";
import './review_edit_form.css'

interface FormValues {
    id: string
    ratingValue: number
    text?: string
}

const ReviewEditForm = ({title, currentUserReview, onReviewUpdated, onReviewDeleted} : ReviewUpdateFormProps) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [cachedReviewText, setCachedReviewText] = useState<string | undefined>(currentUserReview.text)
    const [cachedRatingValue, setCachedRatingValue] = useState<number>(currentUserReview.ratingValue)

    const inputRef = useRef<HTMLTextAreaElement>(null)
    
    const initialValues: FormValues = {
        id: currentUserReview.id,
        ratingValue: currentUserReview.ratingValue,
        text: currentUserReview.text
    }

    const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
        id: Yup.string().required(),
        ratingValue: Yup.number().min(1).max(5).required('Provide a rating'),
        text: Yup.string().optional(),
    })

    const closeEditMode = () => {
        setEditMode(false)
        inputRef?.current?.blur()
    }

    const openEditMode = () => {
        setEditMode(true)
        inputRef?.current?.focus()
    }

    const handleCancelClick  = (resetForm: () => void) => {
        resetForm()
        closeEditMode()
    }
    
    const handleEditClick  = (event: React.MouseEvent<HTMLButtonElement>) => {
        openEditMode()
    }

    const handleDeleteClick  = (event: React.MouseEvent<HTMLButtonElement>) => {
        onReviewDeleted(currentUserReview)
    }
    
    const handleSave = async (values: FormValues, { setSubmitting } : FormikHelpers<FormValues>) => {
        await onReviewUpdated(values)

        setCachedReviewText(cachedReviewText)
        setCachedRatingValue(cachedRatingValue)
        setEditMode(false)
    }

    const handleNotFoundImage = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.onerror = null
        event.currentTarget.src = 'images/default_user_logo.svg'
    }

    return (
        <Formik initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={handleSave}>
            {({ values, setFieldValue, resetForm, handleChange, submitForm }) => {
                return (
                    <div className="review__edit__form__wrapper">
                        <h3 className="review__edit__form__title">{title}</h3>
                        <div className="review__edit__form__content">
                            <div className="review__edit__form__header">
                                <div className="review__user__details__wrapper">
                                    <div className="review__user__image__wrapper">
                                        <img src={currentUserReview.userImageUrl} alt="user" onError={handleNotFoundImage}/>
                                    </div>
                                    <div className="review__user__name">
                                        {currentUserReview.userFullName}
                                    </div>
                                </div>
                                <CustomRating className="review__edit__form__rating" readOnly={!editMode} style={{ maxWidth: 200 }} isRequired value={values.ratingValue} onChange={(ratingValue: number) => { setFieldValue('ratingValue', ratingValue) }} />
                                { editMode ? (
                                    <div className="review__edit__form__header__actions">
                                        <button className="button__wrapper review__edit__form__header__action" onClick={() => handleCancelClick(resetForm)}>
                                            <CloseIcon onMouseDown = {(e) => e.preventDefault()}/>
                                        </button>
                                        <button className="button__wrapper review__edit__form__header__action" onClick={submitForm}>
                                            <CheckIcon onMouseDown = {(e) => e.preventDefault()}/>
                                        </button>
                                    </div>) 
                                    : 
                                    (
                                    <div className="review__edit__form__header__actions">
                                        <button className="button__wrapper review__edit__form__header__action" onClick={handleEditClick}>
                                            <EditIcon fontSize='medium' onMouseDown = {(e) => e.preventDefault()}/>
                                        </button>
                                        <button className="button__wrapper review__edit__form__header__action" onClick={handleDeleteClick}>
                                            <DeleteIcon fontSize='medium' onMouseDown = {(e) => e.preventDefault()}/>
                                        </button>
                                    </div>
                                    )
                                }
                            </div>
                            <Form className="review__edit__form">
                                <input type="hidden" name="id" value={values.id} />
                                <input type="hidden" name="ratingValue" value={values.ratingValue} />
                                <textarea name="text" readOnly={!editMode} ref={inputRef} className="review__edit__form__input review__edit__form__text" placeholder="Write your review..." value={values.text} onChange={handleChange} />
                            </Form>
                        </div>
                    </div>
                )
            }}
        </Formik>

    )
}

export default ReviewEditForm