import React from 'react';
import {Field, reduxForm} from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import {maxLength20, required} from "../../utils/formValidator";

const renderTextField = ({
                             label,
                             input,
                             meta: { touched, invalid, error },
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

const renderNumberField = ({
                             label,
                             input,
                             meta: { touched, invalid, error },
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        type="number"
        InputProps={{
            inputProps: {
                max: 2000, min: 0
            }
        }}
        helperText={touched && error}
        {...input}
        {...custom}
    />
);

const renderFromHelper = ({ touched, error }) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}

const renderSelectField = ({
                               input,
                               label,
                               meta: { touched, error },
                               children,
                               ...custom
                           }) => (
    <FormControl error={touched && error}>
        <InputLabel htmlFor="age-native-simple">Рейтинг</InputLabel>
        <Select
            style={{width: '150px'}}
            required
            native
            {...input}
            {...custom}
            inputProps={{
                name: 'rank',
                id: 'age-native-simple'
            }}
        >
            {children}
        </Select>
        {renderFromHelper({ touched, error })}
    </FormControl>
)

function AddForm(props) {
    const {handleSubmit, pristine, reset, submitting, nameLabel, yearLabel} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="name" component={renderTextField} validate={[required, maxLength20]} label={nameLabel}/>
            <Field name="year" component={renderNumberField} validate={[required]} label={yearLabel}/>
            <Field name="rank" component={renderSelectField} validate={[required]} label="Рейтинг" >
                <option value={null}>{null}</option>
                <option value={"5"}>5</option>
                <option value={"4"}>4</option>
                <option value={"3"}>3</option>
                <option value={"2"}>2</option>
                <option value={"1"}>1</option>
            </Field>
            <Button type="submit" color='primary' variant='contained' disabled={pristine || submitting}>
                Submit
            </Button>
        </form>
    );
}

export default reduxForm({form: 'addForm'})(AddForm);