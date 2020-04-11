import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import AddForm from "../../components/addForm/AddForm";
import {updateAuthor} from "../../state/authors";
import TransitionAlert from "../../components/transitionAlert";

function UpdateAuthorPage({author, updateAuthor, updatedAuthor}) {

    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = ({name, year, rank}) => {
        updateAuthor({name, year, rank, id: author.id});
        setShowAlert(true);
    };

    let initialValue = {name: '', year: '', rank: ''};

    if(author) initialValue = {...initialValue, name: author.name, year: author.birth, rank: author.rank};

    return (
        <div>
            {updatedAuthor &&
            <TransitionAlert
                type="автор обновлен"
                author={updatedAuthor}
                show={showAlert}/>
            }
            Update Author
            <AddForm
                initialValues={initialValue}
                onSubmit={handleSubmit}
                nameLabel="Фамилия/псевдоним"
                yearLabel="Год"
            />
        </div>
    );
}

const mapStateToProps = state => ({
    author: state.authors.author,
    updatedAuthor: state.authors.updatedAuthor
});

function mapDispatchToProps(dispatch) {
    return {
        updateAuthor: ({name, year, rank, id}) => dispatch(updateAuthor({name, year, rank, id})),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UpdateAuthorPage);