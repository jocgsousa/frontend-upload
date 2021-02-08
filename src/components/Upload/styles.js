import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #78e5d5;
`;

const dragReject = css`
    border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
    className: 'dropzone',
})`
    border: 1px dashed #ddd;
    border-radius: 4px;
    cursor: pointer;
    transition: height 0.2s ease;
    ${(props) => props.isDragActive && dragActive};
    ${(props) => props.isDragReject && dragReject};
`;

const messegeColor = {
    default: '#999',
    success: '#78e5d5',
    error: '#e57878',
};

export const UploadMessege = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => messegeColor[props.type || 'default']};
`;
