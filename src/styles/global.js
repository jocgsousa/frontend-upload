import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css';

export default createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body{
        background: #7159c1;
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
        font: 14px sans-serif;
    }
    #root{
        max-width: 100%;
        
    
    }
    button {
         cursor: pointer;
    }
`;
