import { FormikContextType, useFormikContext } from 'formik'
import React, { useEffect } from 'react'
import { addErrorNotification } from 'src/utils/notifications'

interface FormValues {
    [key: string]: any;
}


const FormErrorNotification = () => {
    const { isValid, isValidating, isSubmitting, errors } = useFormikContext<FormValues>()

    useEffect(() => {
        if (!isValid && !isValidating && isSubmitting) {
            Object.keys(errors).forEach((key) => {
                addErrorNotification(errors[key] as string)
            })
        }
    }, [isSubmitting, isValid, isValidating])

    return null
}

export default FormErrorNotification