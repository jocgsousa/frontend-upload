/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import { uniqueId } from 'lodash';

import filesize from 'filesize';

import api from './services/api';

import { Container, Content } from './styles';

import GlobalStyle from './styles/global';

import Upload from './components/Upload';

import FileList from './components/FileList';

export default class App extends Component {
    state = {
        uploadedFiles: [],
    };

    handleUpload = (uploaded) => {
        const uploadedFiles = uploaded.map((file) => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null,
        }));

        this.setState({
            // eslint-disable-next-line react/no-access-state-in-setstate
            uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles),
        });

        uploadedFiles.forEach(this.processUpload);
    };

    updateFile = (id, data) => {
        const { uploadedFiles } = this.state;
        this.setState({
            uploadedFiles: uploadedFiles.map((uploadedFile) =>
                id === uploadedFile.id
                    ? { ...uploadedFile, ...data }
                    : uploadedFile
            ),
        });
    };

    processUpload = (uploadedFile) => {
        const data = new FormData();

        data.append('file', uploadedFile.file, uploadedFile.name);

        api.post('/upload', data, {
            onUploadProgress: (e) => {
                // eslint-disable-next-line radix
                const progress = parseInt(
                    Math.round((e.loaded * 100) / e.total)
                );

                this.updateFile(uploadedFile.id, {
                    progress,
                });
            },
        })
            .then((response) => {
                this.updateFile(uploadedFile.id, {
                    uploaded: true,
                    id: response.data.id,
                    url: response.data.url,
                });
            })
            .catch(() => {
                this.updateFile(uploadedFile.id, {
                    error: true,
                });
            });
    };

    render() {
        const { uploadedFiles } = this.state;
        return (
            <Container>
                <Content>
                    <GlobalStyle />
                    <Upload onUpload={this.handleUpload} />
                    <FileList files={uploadedFiles} />
                </Content>
            </Container>
        );
    }
}
