import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import SearchForm from './components/SearchForm';
import ListForm from './components/ListForm';
import { connect } from 'react-redux'
import * as action from './actions/index'

class App extends React.Component {

    constructor(props) {
        super(props);
    }
    onToggleForm = () => {
        var task = { 
            id: '',
            name: '',
            status: true
        }
        this.props.onClearForm(task)
        if(this.props.itemEditing && this.props.itemEditing.id !== ""){
           this.props.onOpenForm()
        }else{
            this.props.onToggleForm(task.id)
        }

    }

    onFilter = (filterName, filterStatus) => {
        filterStatus = parseInt(filterStatus)
        this.setState({
            filter: {
                name: filterName.toLowerCase(),
                status: filterStatus
            }
        })
    }

    onSearch = (keywords) => {
        this.setState({
            keyword: keywords
        })
    }
    onSort = (sortBy, sortValue) => {
        this.setState({
            sortBy: sortBy,
            sortValue: sortValue
        })
    }

    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        <TaskForm />
                    </div>
                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={this.onToggleForm}
                        >
                            <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                        </button>
                        <div className="row mt-15">
                            <SearchForm/>
                        </div>
                        <div className="row mt-15">
                            <ListForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        itemEditing : state.itemEditing
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: (id) => {
            dispatch(action.toggleform(id))
        },
        onClearForm : (task) =>{
            dispatch(action.edititem(task))
        },
        onOpenForm : () =>{
            dispatch(action.openform());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
