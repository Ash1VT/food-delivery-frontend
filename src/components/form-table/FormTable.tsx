import React from 'react'
import { FieldConfig, FormTableProps } from './form_table.types';
import { Field, Form, Formik, FormikValues } from 'formik';
import FormErrorNotification from '../form-error-notification/FormErrorNotification';
import './form_table.css'
import CustomTextInput from '../ui/custom-inputs/custom-text-input/CustomTextInput';
import CustomPhoneInput from '../ui/custom-inputs/custom-phone-input/CustomPhoneInput';
import CustomNumberInput from '../ui/custom-inputs/custom-number-input/CustomNumberInput';
import CustomDateInput from '../ui/custom-inputs/custom-date-input/CustomDateInput';

const FormTable = <T extends FormikValues>({ fields, initialValues, validationSchema, onSubmit, buttonText } : FormTableProps<T>) => {

    const renderInput = (field: FieldConfig, value: any, setFieldValue: (field: string, value: any) => void, error?: string) => {
        if (field.type === 'text' || field.type === 'email' || field.type === 'password') {
            return <CustomTextInput placeholder={field.placeholder} type={field.type} value={value} error={error} setValue={(value) => setFieldValue(field.name, value)}/>
        }

        if (field.type === 'number') {
            return <CustomNumberInput placeholder={field.placeholder} value={value} error={error} setValue={(value) => setFieldValue(field.name, value)}/>
        }

        if (field.type === 'date') {
            return <CustomDateInput placeholder={field.placeholder} value={value} error={error} setValue={(value) => setFieldValue(field.name, value)}/>
        }

        if (field.type === 'phone') {
            return <CustomPhoneInput placeholder={field.placeholder} country='BY' countryCodeEditable={true} error={error} value={value} setValue={(value) => setFieldValue(field.name, value)}/>
        }
    };


    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, errors, handleSubmit, setFieldValue }) => (
                <Form className="form" onSubmit={handleSubmit}>
                    <FormErrorNotification/>
                    <table className="form__table">
                        {fields.map((field, index) => (
                            <tr key={index} style={{ height: '60px'}}>
                                <td>
                                    <div className="form__table__label">
                                        <div id={field.name}>{field.label}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className="form__table__input__wrapper">
                                        {renderInput(field, values[field.name], setFieldValue, errors[field.name] as string | undefined)}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </table>
                    <button type="submit" className='button__wrapper form__table__button'>
                        {buttonText}
                    </button>
                </Form>
            )}
        </Formik>
    );
};

export default FormTable;
