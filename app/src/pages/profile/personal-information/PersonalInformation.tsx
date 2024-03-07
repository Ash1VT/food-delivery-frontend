import React from 'react'
import ControlledDateInput from 'src/components/ui/controlled-date-input/ControlledDateInput'
import ControlledPhoneInput from 'src/components/ui/controlled-phone-input/ControlledPhoneInput'
import ControlledTextInput from 'src/components/ui/controlled-text-input/ControlledTextInput'

const PersonalInformation = () => {

    const onFirstNameSave = async (firstName: string) => {
        console.log(`saved firstname ${firstName}`)
    }

    const onLastNameSave = async (lastName: string) => {
        console.log(`saved lastname ${lastName}`)
    }

    const onBirthDaySave = async (birthDate: Date) => {
        console.log(`saved birthday ${birthDate}`)
    }

    const onPhoneSave = async (phone: string) => {
        console.log(`saved birthday ${phone}`)
    }

    return (
        <>
            <ControlledTextInput label='First Name' value='John' onSave={onFirstNameSave}/>
            <ControlledTextInput label='Last Name' value='Doe' onSave={onLastNameSave}/>
            <ControlledDateInput label='Birth Date' value={new Date()} onSave={onBirthDaySave}/>
            <ControlledPhoneInput label='Phone' value='+375298830141' onSave={onPhoneSave}/>
        </>
    )
}

export default PersonalInformation