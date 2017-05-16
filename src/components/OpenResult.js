import React from 'react';
import {Modal, OverlayTrigger, Button} from 'react-bootstrap';
import DisplayVideo from './DisplayVideo';

class OpenResult extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {songName, artist} = this.props.result;
    return (
      <Modal bsSize="large" className='modal-lg' show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title className="videoDetails">{artist} || {songName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DisplayVideo result={this.props.result}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default OpenResult;
