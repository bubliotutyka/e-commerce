import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

export default class Info_user extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  async handleInputChange(event) {
        await this.setState({[event.target.name]: event.target.value});
        localStorage.setItem('eUser_info', JSON.stringify(this.state));
}

async componentDidMount(){
  await this.setState(JSON.parse(this.props.local));
}

  render(){
    return(
      <Container>
          <TextField style={padding_field} error={false} helperText='Required' label="Nom" name='name' value={this.state.name} onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Prenom" name='lastname' value={this.state.lastname} onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Email" fullWidth name='mail' value={this.state.mail} onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
          <TextField style={padding_field} error={false} helperText='Required' label="Phone" fullWidth name='phone' value={this.state.phone} onChange={this.handleInputChange.bind(this)} margin="normal" variant="outlined"/>
      </Container>
    );
  }
}

const padding_field = {
  margin: 5,
  marginTop: 20
}
