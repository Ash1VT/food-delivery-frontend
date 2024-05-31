import { Form, Formik, FormikHelpers } from 'formik'
import * as Yup from 'yup';
import React, { useState } from 'react'
import FormErrorNotification from 'src/components/form-error-notification/FormErrorNotification';
import { addSuccessNotification } from 'src/utils/notifications';
import UploadIcon from '@mui/icons-material/Upload';
import { UploadRestaurantImageProps } from 'src/pages/manager-panel/manager_panel.types';
import './upload_restaurant_image_form.css'

interface FormValues {
    image?: File | undefined | null
}

const UploadRestaurantImageForm = ({ onRestaurantImageUploaded }: UploadRestaurantImageProps) => {

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
        await onRestaurantImageUploaded(values.image as File)
    }

    return (
        <Formik 
            initialValues={initialValues} 
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            {({ values, setFieldValue, submitForm }) => {
                return (
                    <>
                        <FormErrorNotification/>
                        <Form>
                            <div className='upload__restaurant__image__form'>
                                <input
                                    type="file"
                                    accept='image/*'
                                    name="image" id="image"
                                    className="upload__restaurant__image__input"
                                    onChange={(event: React.SyntheticEvent<HTMLInputElement>) => {
                                        setFieldValue('image', event.currentTarget.files?.[0])
                                    }} />
                                <label htmlFor="image" className={`button__wrapper upload__restaurant__image__input__label ${values.image ? 'upload__restaurant__image__chosen' : ''}`}>
                                    <UploadIcon/>
                                    Choose Image
                                </label>
                                <button type="submit" className="button__wrapper upload__image__button">
                                    Upload
                                </button>
                            </div>
                        </Form>
                    </>
                )
            }}
        </Formik>
    )
}

export default UploadRestaurantImageForm