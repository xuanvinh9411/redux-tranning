import React from 'react';

class SortFrom extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         sortBy : 'name',
    //         sortValue : 1
    //     }
    // }
    // componentWillReceiveProps(nextProps){
    //     console.log(nextProps)
    // }
    onClick = (sortBy, sortValue) => {
        // this.setState({
        //     sortBy : sortBy,
        //     sortValue : sortValue
        // })
       this.props.onSort(sortBy,sortValue)
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

export default SortFrom;



