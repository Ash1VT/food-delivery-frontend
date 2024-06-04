import { Form, Formik, FormikHelpers } from 'formik';
import React from 'react'
import FormErrorNotification from 'src/components/form-error-notification/FormErrorNotification';
import { UploadUserImageFormProps } from 'src/pages/profile/profile.types';
import UploadIcon from '@mui/icons-material/Upload';
import * as Yup from 'yup';
import './upload_user_image_form.css'

interface FormValues {
    image?: File | undefined | null
}
const UploadUserImageForm = ({onUserImageUpload} : UploadUserImageFormProps) => {
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
        await onUserImageUpload(values.image as File)
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
                            <div className='upload__user__image__form'>
                                <input
                                    type="file"
                                    accept='image/*'
                                    name="userImage" id="userImage"
                                    className="upload__user__image__input"
                                    onChange={async (event: React.SyntheticEvent<HTMLInputElement>) => {
                                        await setFieldValue('image', event.currentTarget.files?.[0])
                                        await submitForm()
                                    }} />
                                <label htmlFor="userImage" className={`button__wrapper upload__user__image__input__label ${values.image ? 'upload__user__image__chosen' : ''}`}>
                                    <UploadIcon/>
                                    Upload
                                </label>
                            </div>
                        </Form>
                    </>
                )
            }}
        </Formik>
    )
}

export default UploadUserImageForm