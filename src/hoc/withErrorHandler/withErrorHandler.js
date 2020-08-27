import React, { Component } from "react";
import Modal from "../../Components/UI-Components/Backdrop/Modal/Modal";
import ReactAux from "../ReactAux/ReactAux";

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null,
        }

        componentDidMount() {
            console.log('componentDidMount from [withErrorHandler.js]');
            axios.interceptors.request.use(req => {
                console.info('for each new request set error null');
                this.setState({error: null});
                return req;
            });
            axios.interceptors.response.use(res => res,(err) => {
                console.info('for each response set error ');
                this.setState({error: err});
            });
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        }

        render() {
            return (
                <ReactAux>
                    <Modal modalClosed={this.errorConfirmedHandler}
                           show={this.state.error}>
                        <p>Some error occurred -</p>
                        { this.state.error ? <div>{this.state.error.message}</div> : null }
                    </Modal>
                    <WrappedComponent {...this.props} />
                </ReactAux>
            );
        }
    }
};

export default withErrorHandler;
