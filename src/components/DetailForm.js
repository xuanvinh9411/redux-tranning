import React from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';

class ListForm extends React.Component {
    onUpdateStatus =() =>{
        this.props.onUpdateStatus(this.props.task.id)
     }
     onDelete =() =>{
        this.props.onDeleteTask(this.props.task.id )
        this.props.onCloseForm()
     }
     onEditItem =() =>{
        this.props.onOpenForm()
        this.props.onEditItem(this.props.task);
     }
     
  render() {
      var{ task , index} = this.props;
  return (
            <tr>
                <td className="text-center">{ index }</td>
                <td>{ task.name }</td>
                <td className="text-center">
                    <span 
                    className={ task.status === true ? 'label label-info' : 'label label-danger' }
                    onClick={ this.onUpdateStatus }
                    >
                                { task.status === true ? "Kích hoạt" : "Ẩn"}
                            </span>
                </td>
                <td className="text-center">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick = { this.onEditItem }
                        >
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button 
                        type="button" 
                        className="btn btn-danger"
                        onClick = { this.onDelete }
                        >
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
  );
}
}
const mapStateToProps = state =>{
    return {
        tasks : state.tasks
    }
};
const mapDispatchToprops = (dispatch , props) =>{
    return {
        onUpdateStatus : (id) =>{
            dispatch(action.updatestatus(id)) ;
        },
        onDeleteTask : (id) =>{
            dispatch(action.deletetask(id));
        },
        onCloseForm: () =>{
            dispatch(action.closeform());
        },
        onOpenForm : () =>{
            dispatch(action.openform());
        },
        onEditItem : (task) =>{
            dispatch(action.edititem(task))
        }

    }
}

export default connect(mapStateToProps,mapDispatchToprops)(ListForm);

