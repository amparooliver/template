import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    @font-face {
        font-family: "Inter Sans Bold";
        src: url("/fonts/Inter-Bold.ttf") format("truetype");
        font-style: normal;
    }
    
    @font-face {
        font-family: "Bebas Neue";
        src: url("/fonts/BebasNeue-Regular.ttf") format("truetype");
        font-style: normal;
    }

    body,
    html,
    a {
        font-family: 'Inter Sans Bold', sans-serif;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: #fff;
        overflow-x: hidden;
    }

    a:hover {
        color: #15191C;
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: rgb(241, 242, 243);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: none;
            box-shadow: #88B8DEs 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'Inter Sans Bold', sans-serif;
        color: #88B8DE;
        font-size: 56px;
        line-height: 1.18;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }
    .titulo {
        font-family: 'Bebas Neue', sans-serif;
        color: #88B8DE;
        font-size: 250px;
        line-height: 1.18;
        letter-spacing: 0.2rem;

        @media only screen and (max-width: 890px) {
          font-size: 150px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 70px;
        }
    }

    p {
        color: #88B8DE;
        font-size: 21px;        
        line-height: 1.41;
    }

    h1 {
        font-weight: 600;
    }

    a {
        text-decoration: none;
        outline: none;
        color: #88B8DE;

        :hover {
            color: #88B8DE;
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }
`;
