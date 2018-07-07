import React from 'react';
import Helmet from 'react-helmet';
import { toast } from 'react-toastify';
import { postRequest } from '../../utils/api';

// Import components
import SubHeader from '../../components/SubHeader';
import H1 from '../../components/H1';
import H2 from '../../components/H2';
import P from '../../components/P';
import Upload from '../../components/Upload';
import Button from '../../components/Button';
import Container from './Container';

class AddPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.addAddresses = this.addAddresses.bind(this);
  }

  handleSubmit(e) {
    // Stop form submission
    e.preventDefault();

    let data = new FormData();
    data.append('file', this.file.files[0]);

    // Call api
    this.addAddresses(data);
  }

  addAddresses(file) {
    postRequest(`/api/v1/addresses`, file).then(data => {
      console.log(data);
      if (typeof data === 'undefined' || data.status === 500 || data.error) {
        toast.error("An error has occured, please try again.");
        return
      }
      
    });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Add Address - Full-stack Coding Challenge - Ambyint</title>
        </Helmet>
        <SubHeader>
          <H1>Add Address</H1>
          <P>Use the form below to add additional addresses from a csv file</P>
        </SubHeader>
        <Container>
          <H2>Upload Address CSV File</H2>
          <form onSubmit={this.handleSubmit} encType="multipart/form-data">
            <Upload name="file" type="file" innerRef={input => this.file = input}/>
            <Button type="submit">Upload Addresses</Button>
          </form>
        </Container>
      </div>
    );
  }
}

export default AddPage;