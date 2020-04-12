import React from 'react';
import {Field, reduxForm} from "redux-form";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import Button from "@material-ui/core/Button";
import {maxLength20, required} from "../../utils/formValidator";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    root: {
        padding: '10px 20px',
        margin: '40px auto',
        width: 'max-content'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: '280px',
        width: '300px',
    },
    field: {
        width: '100%',
        margin: '8px 0'

    }
});

const renderTextField = ({
                             label,
                             input,
                             meta: {touched, invalid, error},
                             classes,
                             ...custom
                         }) => {
    return (
        <TextField
            className={classes.field}
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    );
};

const renderNumberField = ({
                               label,
                               input,
                               meta: {touched, invalid, error},
                               classes,
                               ...custom
                           }) => (
    <TextField
        label={label}
        className={classes.field}
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

const renderFromHelper = ({touched, error}) => {
    if (!(touched && error)) {
        return
    } else {
        return <FormHelperText>{touched && error}</FormHelperText>
    }
}

const renderSelectField = ({
                               input,
                               label,
                               classes,
                               meta: {touched, error},
                               children,
                               ...custom
                           }) => (
    <FormControl error={touched && Boolean(error)}>
        <InputLabel htmlFor="age-native-simple">Рейтинг</InputLabel>
        <Select
            className={classes.field}
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
        {renderFromHelper({touched, error})}
    </FormControl>
)

function AddForm(props) {
    const classes = useStyles();
    const {handleSubmit, pristine, reset, submitting, nameLabel, yearLabel, type} = props;
    return (
        <Paper className={classes.root}>
            <form onSubmit={handleSubmit} className={classes.form}>
                <Field classes={classes} name="name" component={renderTextField} validate={[required, maxLength20]}
                       label={nameLabel}/>
                <Field classes={classes} name="year" component={renderNumberField} validate={[required]}
                       label={yearLabel}/>
                <Field classes={classes} name="rank" component={renderSelectField} validate={[required]}
                       label="Рейтинг">
                    <option value={null}>{null}</option>
                    <option value={"5"}>5</option>
                    <option value={"4"}>4</option>
                    <option value={"3"}>3</option>
                    <option value={"2"}>2</option>
                    <option value={"1"}>1</option>
                </Field>
                <Button type="submit" color='primary' variant='contained' disabled={pristine || submitting}>
                    {type === 'update' ? 'Обновить' : 'Добавить'}
                </Button>
            </form>
        </Paper>
    );
}

export default reduxForm({form: 'addForm'})(AddForm);