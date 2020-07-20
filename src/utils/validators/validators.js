export const required = value => {
    if (value) return undefined;
    return 'Поле обязательно для заполнения';
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return 'Макс. длина ' + maxLength + ' символов';
    return undefined;
}

//more examples: https://redux-form.com/8.3.0/examples/fieldlevelvalidation/