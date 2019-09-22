import React from 'react';
import SortForm from './SortForm';

class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      keyword : ''
    }
  }

  onChange =(event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name] : value
    })
  }

  onSearch =() =>{
    this.props.onSearch(this.state)
  }

  render() {
    return (
      <div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Nhập từ khóa..."
              name="keyword"
              onChange={this.onChange}
            />
            <span className="input-group-btn">
              <button 
                className="btn btn-primary" 
                type="button"
                onClick={this.onSearch}
                >
                <span className="fa fa-search mr-5"></span>Tìm
                 </button>
            </span>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
           <SortForm 
            onSort ={this.props.onSort}
            sortBy = {this.props.sortBy}
            sortValue = {this.props.sortValue}
           />
        </div>
      </div>
    );
  }
}

export default SearchForm;
