import React from 'react';
import HeaderList from './HeaderList'
import InputList from './InputList'
import DetailForm from './DetailForm'
import { connect } from 'react-redux';

class ListForm extends React.Component {
  render() {
    var { tasks, filtertable, searchTask , sort } = this.props;
    if (filtertable.name) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filtertable.name.toLowerCase()) !== -1
      })
    }

    tasks = tasks.filter((task) => {
      if (filtertable.status === -1) {
        return task;
      } else {
        return task.status === (filtertable.status === 1 ? true : false);
      }
    })
    if (searchTask) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(searchTask.keyword.toLowerCase()) !== -1
      })
    }
     if (sort.by === 'name'){
            tasks = tasks.sort((a,b) =>{
                if(a.name > b.name) return sort.value ;
                else if(a.name < b.name) return -sort.value ;
                else return 0 ;
            })
        }else{
            tasks = tasks.sort((a,b) =>{
                if(a.status > b.status) return -sort.value ;
                else if(a.status < b.status) return sort.value ;
                else return 0 ;
            })
        }

    var elmTasks = tasks.map((task, index) => {
      return <DetailForm
        keys={tasks.id}
        key={index}
        index={index}
        task={task} z
        onUpdate={this.props.onUpdate}
      />
    });
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <table className="table table-bordered table-hover">
          <HeaderList />
          <tbody>
            <InputList
            />
            {elmTasks}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filtertable: state.filtertable,
    searchTask: state.searchTask,
    sort : state.sorttask
  }
};

export default connect(mapStateToProps)(ListForm);

