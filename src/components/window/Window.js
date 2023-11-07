
// import React, { Component } from "react";
// import { Button, Header, Icon, Modal, Box, Typography } from 'semantic-ui-react'


// const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     width: 400,
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4
// };

// export default class Contact extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             open: false
//         };
//         this.handleOpen = this.handleOpen.bind(this);
//         this.handleClose = this.handleClose.bind(this);
//     }
//     static displayName = Contact.name;
//     handleOpen() {
//         this.setState({ open: true });
//     }
//     handleClose() {
//         this.setState({ open: false });
//     }

//     render() {
//         return (
//             <div>
//                 <div className="center">
//                     <Button onClick={this.handleOpen}>Contact us</Button>
//                 </div>
//                 <Modal
//                     open={this.state.open}
//                     onClose={this.handleClose}
//                     aria-labelledby="modal-modal-title"
//                     aria-describedby="modal-modal-description"
//                 >
//                     <Box sx={style}>
//                         <Typography id="modal-modal-title" variant="h6" component="h2">
//                             Contact us
//                         </Typography>
//                         <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//                             Contact us at hello @ mycompany.com
//                         </Typography>
//                     </Box>
//                 </Modal>
//             </div>
//         );
//     }
// }


import React, { Component } from "react";

import Modal from './../modal/Modal';

class Contacts extends Component {
    // ...
    render() {
        return (
            <div>
                <h1>React Modal</h1>

                {/* <div className={showHideClassName}>
                    show={this.state.show} handleClose={this.hideModal}
                    <p>Modal</p>
                    <section className="modal-main">
                        {children}
                        <button type="button" onClick={handleClose}>
                            Close
                        </button>
                    </section>
                </div> */}

                <>
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        {/* <Modal > */}
                        <p>Modal</p>
                    </Modal>
                </>

                <button type="button" onClick={this.show}>
                    Open
                </button>
            </div>
        );
    }
}

export default Contacts



// export default class ModalExampleControlled extends React.Component {
//     state = { modalOpen: false }

//     handleOpen = () => this.setState({ modalOpen: true })

//     handleClose = () => this.setState({ modalOpen: false })

//     render() {
//         return (
//             <Modal
//                 trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
//                 open={this.state.modalOpen}
//                 onClose={this.handleClose}
//                 basic
//                 size='small'
//             >
//                 <Header icon='browser' content='Cookies policy' />
//                 <Modal.Content>
//                     <h3>This website uses cookies to ensure the best user experience.</h3>
//                 </Modal.Content>
//                 <Modal.Actions>
//                     <Button color='green' onClick={this.handleClose} inverted>
//                         <Icon name='checkmark' /> Got it
//                     </Button>
//                 </Modal.Actions>
//             </Modal>
//         )
//     }
// }

// export default Window;