import React, { useState } from 'react'
import './TextField.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TextField(props) {

    const [text, setText] = useState('');

    const copyToClipBord = () => {
        navigator.clipboard.writeText(text);
        toast.success('Copied to Clipbord', {
            // position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const ClearTheText = () => {
        setText("");
        toast.warn('Text Cleared', {
            // position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const textAreaChanged = (event) => {
        setText(event.target.value);
    }

    const convertToUppercase = () => {
        setText(text.toUpperCase());
        toast.success('🔥 Converted to UpperCase', {
            // position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    const convertToLowercase = () => {
        setText(text.toLowerCase());
        toast.success('🔥 Converted to LowerCase', {
            // position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    const removeExtraSpace = () => {
        let tempText = text.split(/[ ]+/).join(' ');
        setText(tempText)
        toast.success('🔥 Extra Space removed', {
            // position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <div className='textFiled-cantainer'>
            <h1>{props.heading}</h1>
            <div>
                <textarea value={text} onChange={textAreaChanged} ></textarea>
            </div>
            <div className='btn-container'>
                <button  onClick={convertToUppercase}>Upper Case</button>
                <button onClick={convertToLowercase}>Lower Case</button>
                <button onClick={removeExtraSpace}>Remove Extra space</button>
                <button onClick={copyToClipBord}>Copy Text</button>
                <button onClick={ClearTheText}>Clear</button>
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    theme="dark"
                />
            </div>
            <div>
                <h3>Text Summary</h3>
                <p>{text.split(' ').length} words and {text.length} Characters  </p>
                <p>{0.08 * text.split(" ").length} time take's to read</p>
            </div>
        </div>
    )
}
