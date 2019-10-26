import React from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';

class ListForm extends React.Component {
    onUpdateStatus =() =>{
        this.props.onUpdateStatus(this.props.task.id)
     }
     onDelete =() =>{
        this.props.onDelete()
     }
     onUpdate =() =>{
        this.props.onUpdate(this.props.task.id)
     }
     
  render() {
      var{ task , index} = this.props;
  return (
            <tr>
                <td>{ index }</td>
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
                        onClick = { this.onUpdate }
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
        }
    }
}

export default connect(mapStateToProps,mapDispatchToprops)(ListForm);

