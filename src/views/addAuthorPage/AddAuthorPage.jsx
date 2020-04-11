import React from 'react';
import {connect} from "react-redux";
import AddForm from "../../components/addForm/AddForm";

function AddAuthorPage() {

    const handleSubmit = (value) => {
        console.log('Submitted ', value)
    }

    return (
        <div>
            Add Author
            <AddForm
                onSubmit={handleSubmit}
                nameLabel="Фамилия/псевдоним"
                yearLabel="Год"
            />
        </div>

    );
}

const mapStateToProps = state => ({
    author: state.authors.author
});

export default connect(mapStateToProps, {})(AddAuthorPage);