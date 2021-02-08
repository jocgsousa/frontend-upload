import React, { Component } from 'react';

import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessege } from './styles';

export default class Upload extends Component {
    state = {};

    renderDragMessege = (isDragActive, isDragReject) => {
        if (!isDragActive) {
            return <UploadMessege>Solte algum arquivo aqui</UploadMessege>;
        }

        if (isDragReject) {
            return (
                <UploadMessege type="error">Arquivo não aceito</UploadMessege>
            );
        }

        return (
            <UploadMessege type="success">
                Solte o arquivo para fazer o upload
            </UploadMessege>
        );
    };

    render() {
        return (
            <Dropzone accept="image/*" onDropAccepted={() => {}}>
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
                        {this.renderDragMessege(isDragActive, isDragReject)}
                    </DropContainer>
                )}
            </Dropzone>
        );
    }
}
