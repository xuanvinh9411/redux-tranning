import React from 'react';
import * as action from './../actions/index'
import { connect } from 'react-redux';

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        if (this.props.task) {
            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status
            })
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEditing) {
            this.setState({
                id: nextProps.itemEditing.id,
                name: nextProps.itemEditing.name,
                status: nextProps.itemEditing.status
            })
        } else if (nextProps && nextProps.itemEditing === null) {
            this.setState({
                id: '',
                name: '',
                status: false
            })
        }

    }
    closeForm = () => {
        this.props.onCloseForm()
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value
        if (name === 'status') {
            value = target.value === 'true' ? true : false
        }
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.onClear();
        this.closeForm();
    }
    onClear = () => {
        this.setState({
            name: '',
            status: true
        })
    }
    render() {
        var { id } = this.props.itemEditing ;
        if (!this.props.isDisplayForm) return null;
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <div className="panel-title cus-head-left">
                        {id === null || id === '' ? 'Thêm Công Việc' : 'Cập nhật công việc '}
                    </div>
                    <div
                        className="fa fa-times-circle text-right cus-icon-left"
                        onClick={this.closeForm}
                    >
                    </div>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            /> 
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            required="required"
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Kích Hoạt</option>
                            <option value={false}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
                    <button
                                type="button"
                                onClick={this.onClear}
                                className="btn btn-danger">
                                Hủy Bỏ
                    </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks,
        isDisplayForm: state.isDisplayForm,
        itemEditing : state.itemEditing
    }
};
const mapDispatchToprops = (dispatch, props) => {
    return {
        onSaveTask: (task) => {
            dispatch(action.saveTask(task));
        },
        onCloseForm: () => {
            dispatch(action.closeform())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(TaskForm);

