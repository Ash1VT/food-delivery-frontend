
export const parseUserErrors = (errors: any) => {
    let errorMessages: string[] = [];

    if (errors.email) {
        errorMessages.push(`Email: ${errors.email.join(', ')}`);
    }

    if (errors.password) {
        errorMessages.push(`Password: ${errors.password.join(', ')}`);
    }

    if (errors.user_profile) {
        const userProfileErrors = errors.user_profile;

        if (userProfileErrors.first_name) {
            errorMessages.push(`First Name: ${userProfileErrors.first_name.join(', ')}`);
        }

        if (userProfileErrors.last_name) {
            errorMessages.push(`Last Name: ${userProfileErrors.last_name.join(', ')}`);
        }

        if (userProfileErrors.phone) {
            errorMessages.push(`Phone: ${userProfileErrors.phone.join(', ')}`);
        }

        if (userProfileErrors.birth_date) {
            errorMessages.push(`Birth Date: ${userProfileErrors.birth_date.join(', ')}`);
        }
    }

    return errorMessages.join('; ');

}


export const parseFastApiErrors = (errors: any) => {
    let errorString = '';

    if (errors) {
        errors.forEach((error: any) => {
            errorString += `${error.msg}\n`;
        });
    }

    return errorString
}