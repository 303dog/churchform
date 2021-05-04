import React from 'react'

class Upload extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }
  render() {
    return (
      <div className='upload__container'>
        <span className='icon'>
        <i class="fas fa-upload"></i>
        </span>
        <h4>Upload File</h4>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file}/>
      </div>
    );
  }
}

export default Upload;

//hmtl
//<input id="fileItem" type="file"></input>
//js
//var file = document.getElementById('fileItem').files[0];