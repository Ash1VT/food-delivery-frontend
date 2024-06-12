import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react'
import FormErrorNotification from 'src/components/form-error-notification/FormErrorNotification';
import { UploadUserImageFormProps } from 'src/pages/profile/profile.types';
import UploadIcon from '@mui/icons-material/Upload';
import * as Yup from 'yup';
import { UploadImageFormProps } from './upload_image_form.types';
import './upload_image_form.css'

interface FormValues {
    image?: File | undefined | null
}
const UploadImageForm = ({imageUrl, imageContainerClassName, imageClassName, imageWrapperClassName, onImageUploaded} : UploadImageFormProps) => {
    const initialValues: FormValues = {
    }

    const validationSchema: Yup.Schema<FormValues> = Yup.object().shape({
        image: Yup.mixed<File>()
            .required('Image is required')
            .test('fileType', 'Unsupported File Format', value => {
                return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value.type);
            })
            .test('fileSize', 'File too large', value => {
                return value && value.size <= 5 * 1024 * 1024; // 5MB limit
            }),
    });

    const handleSubmit = async (values: FormValues, { setSubmitting, setValues } : FormikHelpers<FormValues>) => {
        setSubmitting(false)
        setValues(initialValues)
        // console.log(values.image)
        await onImageUploaded(values.image as File)
    }

    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ values, setFieldValue, submitForm }) => {
                return (
                    <div className={`upload__image__container ${imageContainerClassName ? imageContainerClassName : ''}`}>
                        <div className={`upload__image__wrapper ${imageWrapperClassName ? imageWrapperClassName : ''}`}>
                            <img className={`upload__image ${imageClassName ? imageClassName : ''}`} src={imageUrl} alt="image"></img>
                        </div>
                        <Form>
                            <FormErrorNotification/>
                            <div className='upload__image__form'>
                                <input
                                    type="file"
                                    accept='image/*'
                                    name="image" id="image"
                                    className="upload__image__input"
                                    onChange={async (event: React.SyntheticEvent<HTMLInputElement>) => {
                                        await setFieldValue('image', event.currentTarget.files?.[0])
                                        await submitForm()
                                    }} />
                                <label htmlFor="image" className={`button__wrapper upload__image__input__label ${values.image ? 'upload__image__chosen' : ''}`}>
                                    <UploadIcon/>
                                    Upload
                                </label>
                            </div>
                        </Form>
                    </div>
                )
            }}
        </Formik>
    )
}

export default UploadImageForm