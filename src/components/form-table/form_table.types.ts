import { FormikValues } from 'formik';
import * as Yup from 'yup';

export type FieldConfig = {
    name: string
    label: string
    placeholder?: string
    type: string
}

export type FormTableProps<T extends FormikValues> = {
    fields: FieldConfig[]
    initialValues: T
    validationSchema: Yup.ObjectSchema<T>
    onSubmit: (values: T) => void
    buttonText: string
}