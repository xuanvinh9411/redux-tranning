import React from 'react';
import { connect } from 'react-redux';
import * as action from './../actions/index';


class InputList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        var filter = {
            name : name === 'filterName' ? value : this.state.filterName,
            status : name === 'filterStatus' ? parseInt(value) : this.state.filterStatus,
        }
        this.props.onFilterTable(filter)
        this.setState({
            [name] : value
        })

    }

    render() {
        var { filterName, filterStatus } = this.state
        return (
            <tr>
                <td></td>
                <td>
                    <input
                        type="text"
                        className="form-control"
                        name="filterName"
                        onChange={this.onChange}
                        value={filterName}
                    >
                    </input>
                </td>
                <td>
                    <select
                        className="form-control"
                        name="filterStatus"
                        onChange={this.onChange}
                        value={filterStatus}
                    >
                        <option value="-1">Tất Cả</option>
                        <option value="0">Ẩn</option>
                        <option value="1">Kích Hoạt</option>
                    </select>
                </td>
                <td></td>
            </tr>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        filter : state.task
    }
};

const mapDispatchToprops = (dispatch , props) =>{
    return {
        onFilterTable : (filter) =>{
            dispatch(action.filterTask(filter)) ;
        }

    }
}

export default connect(mapStateToProps,mapDispatchToprops)(InputList);
