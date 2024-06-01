import React from 'react'
import * as Yup from 'yup'
import { UserProps, UsersProps } from '../moderator_panel.types'
import moment from 'moment'
import { Form, Formik, FormikHelpers } from 'formik'
import EditIconButton from 'src/components/ui/buttons/edit-icon-button/EditIconButton'
import OpenAddingModeratorButton from '../ui/buttons/open-adding-moderator-button/OpenAddingModeratorButton'
import SearchComponent from 'src/components/ui/search-component/SearchComponent'
import SelectComponent from 'src/components/ui/select-component/SelectComponent'
import './users.css'

interface IsEmailVerifiedFormValues {
    isEmailVerified: boolean
}

interface IsACtiveFormValues {
    isActive: boolean
}

const User = ({user, onEmailVerifiedChanged, onActivityChanged, onOpenEditingUser} : UserProps) => {

    const isActiveInitialValues = {
        isActive: user.isActive
    }

    const isEmailVerifiedInitialValues = {
        isEmailVerified: user.isEmailVerified
    }

    const isActiveValidationSchema = Yup.object().shape({
        isActive: Yup.boolean().required('Is active is required')
    })

    const isEmailVerifiedValidationSchema = Yup.object().shape({
        isEmailVerified: Yup.boolean().required('Is email verified is required')
    })


    const handleEmailVerifiedChanged = async (values: IsEmailVerifiedFormValues, { setSubmitting } : FormikHelpers<IsEmailVerifiedFormValues>) => {
        await onEmailVerifiedChanged(user.id, values.isEmailVerified)
        setSubmitting(false)
    }

    const handleActiveChanged = async (values: IsACtiveFormValues, { setSubmitting } : FormikHelpers<IsACtiveFormValues>) => {
        await onActivityChanged(user.id, values.isActive)
        setSubmitting(false)
    }

    const handleOpenEditingUser = async () => {
        onOpenEditingUser(user)
    }

    return (
        <tr>
            <td>
                <div className="user__text">
                    {user.id}
                </div>
            </td>
            <td>
                <div className="user__text user__margin__left">
                    {user.email}
                </div>
            </td>
            <td>
                <div className="user__text user__margin__left">
                    {user.role}
                </div>
            </td>
            <td>
                <div className="user__text user__margin__left">
                    {user.firstName}
                </div>
            </td>
            <td>
                <div className="user__text user__margin__left">
                    {user.lastName}
                </div>
            </td>
            <td>
                <div className="user__text user__margin__left">
                    {user.phone}
                </div>
            </td>
            <td>
                <div className="user__text user__margin__left">
                    {moment(user.birthDate).format('DD.MM.YYYY')}
                </div>
            </td>
            <td>
                <Formik
                    initialValues={isEmailVerifiedInitialValues}
                    validationSchema={isEmailVerifiedValidationSchema}
                    onSubmit={handleEmailVerifiedChanged}>
                    {({ errors, values, setFieldValue, submitForm }) => (
                        <Form>
                            <div className="user__checkbox__wrapper">
                                <input
                                    type="checkbox"
                                    name="isUserEmailVerified"
                                    id='isUserEmailVerified'
                                    className='user__checkbox user__margin__left'
                                    checked={values.isEmailVerified}
                                    onChange={(e) => {
                                        setFieldValue('isEmailVerified', e.target.checked)
                                        submitForm()
                                    }}
                                />
                                <label className="user__checkbox__label" htmlFor="isUserEmailVerified"/>
                            </div>
                        </Form>
                    )}
                </Formik>
            </td>
            <td>
                <Formik
                    initialValues={isActiveInitialValues}
                    validationSchema={isActiveValidationSchema}
                    onSubmit={handleActiveChanged}>
                    {({ errors, values, setFieldValue, submitForm }) => (
                        <Form>
                            <div className="user__checkbox__wrapper">
                                <input
                                    type="checkbox"
                                    name="isUserActive"
                                    id='isUserActive'
                                    className='user__checkbox user__margin__left'
                                    checked={values.isActive}
                                    onChange={(e) => {
                                        setFieldValue('isActive', e.target.checked)
                                        submitForm()
                                    }}
                                />
                                <label className="user__checkbox__label" htmlFor="isUserActive"/>
                            </div>
                        </Form>
                    )}
                </Formik>
            </td>
            <th>
                <div className='user__margin__left'>
                    <EditIconButton onEdit={handleOpenEditingUser}/>
                </div>
            </th>
        </tr>
    )
}

const Users = ({users, filterRoles, filterIsActive, filterIsEmailVerified, onSearchUsers, onFilteredRoles, onFilteredIsActive, onFilteredEmailVerified, onEmailVerifiedChanged, onActivityChanged, onOpenAddingModerator, onOpenEditingUser} : UsersProps) => {
    return (
        <div className="users__container">
            <div className='users__filters__wrapper'>
                <div className='users__search'>
                    <SearchComponent searchPlaceholder='Search by email' onSearch={onSearchUsers}/>
                </div>
                <div className='users__filters'>
                    <SelectComponent options={filterRoles} 
                                     openSelectButtonLabel='Filter by role' 
                                     selectLabel='Filter by role' 
                                     selectButtonLabel='Apply filter' 
                                     onSelect={onFilteredRoles}/>

                    <SelectComponent options={filterIsActive} 
                                     openSelectButtonLabel='Filter by status' 
                                     selectLabel='Filter by status' 
                                     selectButtonLabel='Apply filter' 
                                     onSelect={onFilteredIsActive}/>
                                     
                    <SelectComponent options={filterIsEmailVerified} 
                                     openSelectButtonLabel='Filter by email verified' 
                                     selectLabel='Filter by email verified' 
                                     selectButtonLabel='Apply filter' 
                                     onSelect={onFilteredEmailVerified}/>
                </div>
            </div>
            <table className="users__table">
                <tr>
                    <th>
                        <div className="user__label">
                            ID
                        </div>
                    </th>
                    <th>
                        <div className="user__label user__margin__left">
                            Email
                        </div>
                    </th>
                    <th>
                        <div className="user__label user__margin__left">
                            Role
                        </div>
                    </th>
                    <th>
                        <div className="user__label user__margin__left">
                            First Name
                        </div>
                    </th>
                    <th>
                        <div className="user__label user__margin__left">
                            Last Name
                        </div>
                    </th>
                    <th>
                        <div className="user__label user__margin__left">
                            Phone
                        </div>
                    </th>
                    <th>
                        <div className="user__label user__margin__left">
                            Birth Date
                        </div>
                    </th>
                    <th>
                        <div className="user__label user__margin__left">
                            Email Verified
                        </div>
                    </th>
                    <th>
                        <div className="user__label user__margin__left">
                            Active
                        </div>
                    </th>
                    <th>
                        <div className="user__margin__left"/>
                    </th>
                </tr>
                <tr style={{height: '20px'}}/>
                {users.map((user, index) => (
                    <React.Fragment key={user.id}>
                        <User
                            user={user}
                            onEmailVerifiedChanged={onEmailVerifiedChanged}
                            onActivityChanged={onActivityChanged}
                            onOpenEditingUser={onOpenEditingUser}
                        />
                        <tr style={{height: '10px'}}/>
                    </React.Fragment>
                ))}
            </table>
            <OpenAddingModeratorButton onOpen={onOpenAddingModerator}/>
        </div>
    )
}

export default Users