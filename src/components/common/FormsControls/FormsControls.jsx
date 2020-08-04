import React from "react";
import styles from './FormsControls.module.css';
import { reduxForm, Field } from 'redux-form';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

export const renderTextField = ({ input, label, meta: { touched, invalid, error }, ...props }) => (
    <div className={styles.textField}>
        <TextField
            label={label}
            multiline
            size="small"
            variant="outlined"
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...props}
        />
    </div>
);


/*REST оператор. Пропсы будут содержать в себе всё, кроме input и meta*/
export let FormControl = ({ input, meta: { touched, error }, controlType, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            {React.createElement(controlType, { ...input, ...props })}
            {hasError && <span>{error}</span>}
        </div>
    )
}

// export const Textarea = ({ input, meta, ...props }) => {

//     const hasError = meta.touched && meta.error;

//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <textarea {...input} {...props} />
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

// export const Input = ({ input, meta, ...props }) => {

//     const hasError = meta.touched && meta.error;

//     return (
//         <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <input {...input} {...props} />
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

export const createField = (placeholder, name, validators, component, controlType, type = {}, props = {}, text = {}) => {
    return (
        <div>
            <Field placeholder={placeholder} name={name} component={component} controlType={controlType} validate={validators} type={type} {...props} />{text}
        </div>
    )
}