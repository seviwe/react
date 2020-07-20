import React from "react";
import styles from './FormsControls.module.css';
//import Button from '@material-ui/core/Button';
//import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';

/*REST оператор. Пропсы будут содержать в себе всё, кроме input и meta*/
export let FormControl = ({ input, meta, controlType, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            {React.createElement(controlType, {...input, ...props})}
            {hasError && <span>{meta.error}</span>}
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