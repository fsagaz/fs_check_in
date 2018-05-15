import React, { Component } from 'react';
import BpkFieldset from 'bpk-component-fieldset';
import BpkInput, { INPUT_TYPES, CLEAR_BUTTON_MODES } from 'bpk-component-input';
import BpkPanel from 'bpk-component-panel';
import { withButtonAlignment, withRtlSupport } from 'bpk-component-icon';
import ArrowIcon from 'bpk-component-icon/sm/long-arrow-right';
import BpkButton from 'bpk-component-button';
import axios from 'axios';
class Controls extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //this.clearChange = this.clearChange.bind(this);
    this.state = {
      originplace: '',
      destinationplace: '',
    };

  }

handleChange(event) {
  this.setState({ [event.target.name]: event.target.value });
}

clearChange(event) {
  alert(event.target.name);
  this.setState({ [event.target.name]: '' });
}

handleSubmit(event) {
  event.preventDefault();
  console.log('fetching results from server...');
  axios.get('http://localhost:3000/api/search', {
  params: {
    OriginPlace: 11235
  }
  })
  .then((response) => {
    return response.json();
  })
  .then((results) => {
    console.log('TODO: something with these results:');
    console.log(results);
  })
  .catch(console.error);



  }

 render() {
    return (
      <form onSubmit={this.handleSubmit} ref="form">
      <BpkPanel>
      <BpkFieldset
        label="From">
        <BpkInput
        id="origin"
        type={INPUT_TYPES.text}
        name="originplace"
        value={this.state.originplace}
        onChange={this.handleChange}
        placeholder="Country, city or airport"
        clearButtonMode={CLEAR_BUTTON_MODES.whileEditing}
        clearButtonLabel="Clear"
        onClear={() => this.setState({ originplace: '' })}
        />
      </BpkFieldset>
      <BpkFieldset
        label="To:">
        <BpkInput
        id="destination"
        type={INPUT_TYPES.text}
        name="destinationplace"
        value={this.state.destinationplace}
        onChange={this.handleChange}
        placeholder="Country, city or airport"
        clearButtonMode={CLEAR_BUTTON_MODES.whileEditing}
        clearButtonLabel="Clear"
        onClear={() => this.setState({ destinationplace: '' })}
        />
      </BpkFieldset>
      <BpkButton type="submit">Send!</BpkButton>
      </BpkPanel>
      </form>
      );
    }
}
export default Controls;
