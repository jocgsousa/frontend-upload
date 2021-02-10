import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #38d2d2;
`;

const dragReject = css`
    border-color: #e57575;
`;

export const DropContainer = styled.div`
    border: 1px dashed #ddd;
    align-items: center;
    justify-content: center;
    display: flex;
    padding: 15px 0;
    cursor: pointer;
    ${(props) => props.isDragActive && dragActive}
    ${(props) => props.isDragReject && dragReject}
`;

const dragmessege = {
    default: '#999',
    success: '#38d2d2',
    reject: '#e57575',
};

export const UploadMessege = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => dragmessege[props.type || 'default']};
`;
