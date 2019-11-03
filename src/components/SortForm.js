import React from 'react';
import * as action from './../actions/index'
import { connect } from 'react-redux';

class SortFrom extends React.Component {
    onClick = (sortBy, sortValue) => {
        var sort = {
            by : sortBy,
            value : sortValue
        }
       this.props.onSortTask(sort)
    }
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li onClick={() => this.onClick('name', 1)}>
                        <a role="button">
                            <i className={this.props.sortBy === 'name' && this.props.sortValue === 1 ? "fa fa-check" : ""}></i>
                            <span className="fa fa-sort-alpha-asc pr-5">
                                Tên A-Z
                        </span>
                        </a>
                    </li>
                    <li onClick={() => this.onClick('name', -1)}>
                        <a role="button">
                            <i className={this.props.sortBy=== 'name' && this.props.sortValue === -1 ? "fa fa-check" : ""}></i>
                            <span className="fa fa-sort-alpha-desc pr-5">
                                Tên Z-A
                        </span>
                        </a>
                    </li>
                    <li role="separator" className="divider"></li>
                    <li onClick={() => this.onClick('status', 1)}>
                        <a role="button">
                            <i className={this.props.sortBy === 'status' && this.props.sortValue === 1 ? "fa fa-check" : ""}>
                            </i>
                             Trạng Thái Kích Hoạt
                            </a>
                    </li>
                    <li onClick={() => this.onClick('status', -1)} >
                        <a role="button">
                            <i className={this.props.sortBy === 'status' && this.props.sortValue === -1 ? "fa fa-check" : ""}>
                            </i>
                                Trạng Thái Ẩn
                            </a>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapDispatchToprops = (dispatch, props) => {
    return {
        onSortTask: (sort) => {
            dispatch(action.sortTask(sort));
        },
    }
}

export default connect(null, mapDispatchToprops)(SortFrom);



