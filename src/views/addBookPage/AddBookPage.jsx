import React from 'react';
import {connect} from "react-redux";
import AddForm from "../../components/addForm/AddForm";

function AddBookPage() {

    const handleSubmit = (value) => {
        console.log('Submitted ', value)
    }

    return (
        <div>
            Add Book
            <AddForm
                onSubmit={handleSubmit}
                nameLabel="Наименование"
                yearLabel="Год"
            />
        </div>

    );
}

const mapStateToProps = state => ({
    author: state.authors.author
});

export default connect(mapStateToProps, {})(AddBookPage);