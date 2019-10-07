import React from 'react';
import HeaderList from './HeaderList'
import InputList from './InputList'
import DetailForm from './DetailForm'
import { connect } from 'react-redux';

class ListForm extends React.Component {
  render(){
    var { tasks  } = this.props;
    var elmTasks = tasks.map((task, index) => {
      return <DetailForm
       keys={ tasks.id }
       key={ index }
       index={ index }
        task={ task }
        onUpdateStatus={ this.props.onUpdateStatus }
        onDelete = { this.props.onDelete }
        onUpdate = { this.props.onUpdate }
        />
    });
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <table className="table table-bordered table-hover">
        <HeaderList/>
        <tbody>
            <InputList
              onFilter = { this.props.onFilter }
              />
            { elmTasks }
        </tbody>
    </table>
</div>
  );
}
}
const mapStateToProps = (state) =>{
    return {
      tasks : state.tasks
    }
};

export default connect(mapStateToProps)(ListForm);

