import React from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import SearchForm from './components/SearchForm';
import ListForm from './components/ListForm';
import _ from 'lodash';
import { connect } from 'react-redux'
import * as Action from './actions/index'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                tasks: tasks
            });
        }
    }
    addForm = () => {
        if (this.state.isDisplayForm && this.state.tasksEditing !== null) {
            this.setState({
                isDisplayForm: true,
                tasksEditing: null
            })
        }
        else {
            this.setState({
                isDisplayForm: !this.state.isDisplayForm,
                tasksEditing: null
            })
        }

    }

    closeForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        })
    }

    showForm = () => {
        this.setState({
            isDisplayForm: true
        })
    }


    onToggleForm = () =>{
        this.props.onToggleForm()
    }

    onDelete = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks.splice(index, 1);
            this.setState({
                tasks: tasks
            })
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.closeForm()
    }

    onUpdate = (id) => {
        var { tasks } = this.state
        var index = this.findIndex(id);
        var tasksEditing = tasks[index]
        this.setState({
            tasksEditing: tasksEditing
        })
        this.showForm();
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
        var {
            // tasks,
            tasksEditing,
            filter,
            keyword,
            sortBy,
            sortValue
        }
            = this.state;
        var { isDisplayForm } = this.props;
        // if (filter) {
        //     if (filter.name) {
        //         tasks = tasks.filter(task => {
        //             return task.name.toLowerCase().indexOf(filter.name) !== -1;
        //         });

        //     }
        //     tasks = tasks.filter(task => {
        //         if (filter.status == -1) {
        //             return task
        //         } else {
        //             return task.status === (filter.status === 1 ? true : false)
        //         }
        //     })
        // }
        // if (keyword && keyword !== "") {
        //     // tasks = tasks.filter(task => {
        //     //     return task.name.indexOf(keyword.keyword) !== -1;
        //     // });
        //     tasks = _.filter(tasks,(task) =>{
        //         return task.name.toLowerCase().indexOf(keyword.keyword.toLowerCase()) !== -1
        //         })
        // }

        // if (sortBy === 'name'){
        //     tasks = tasks.sort((a,b) =>{
        //         if(a.name > b.name) return sortValue ;
        //         else if(a.name < b.name) return -sortValue ;
        //         else return 0 ;
        //     })
        // }else{
        //     tasks = tasks.sort((a,b) =>{
        //         if(a.status > b.status) return -sortValue ;
        //         else if(a.status < b.status) return sortValue ;
        //         else return 0 ;
        //     })
        // }
        var elmTaskForm = isDisplayForm
            ? <TaskForm
                onSubmit={this.onSubmit}
                task={tasksEditing}
            />
            : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Quản Lý Công Việc</h1>
                    <hr />
                </div>
                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {elmTaskForm}
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
                            <SearchForm
                                onSearch={this.onSearch}
                                onSort={this.onSort}
                                sortBy={sortBy}
                                sortValue={sortValue}
                            />
                        </div>
                        <div className="row mt-15">
                            <ListForm
                                // tasks={tasks}
                                onDelete={this.onDelete}
                                onUpdate={this.onUpdate}
                                onFilter={this.onFilter}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(Action.toggleform())
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
