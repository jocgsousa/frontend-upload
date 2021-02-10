import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import PropTypes from 'prop-types';

import { DropContainer, UploadMessege } from './styles';

export default class Upload extends Component {
    state = {};

    renderUploadMessege = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            return (
                <UploadMessege>Clique ou solte um arquivo aqui.</UploadMessege>
            );
        }
        if (isDragReject) {
            return (
                <UploadMessege type="reject">Arquivo não aceito</UploadMessege>
            );
        }

        return <UploadMessege type="success">Solte o arquivo</UploadMessege>;
    };

    render() {
        const { onUpload } = this.props;
        return (
            <Dropzone accept="image/*" onDropAccepted={onUpload}>
                {({
                    getRootProps,
                    getInputProps,
                    isDragActive,
                    isDragReject,
                }) => (
                    <DropContainer
                        {...getRootProps()}
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />
                        {this.renderUploadMessege(isDragActive, isDragReject)}
                    </DropContainer>
                )}
            </Dropzone>
        );
    }
}

Upload.propTypes = {
    onUpload: PropTypes.func.isRequired,
};
