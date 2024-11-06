import piston from '@/axios/piston';
import React, { useState } from 'react';
import Divider from './Divider';

const Output = ({ code, version, language }) => {
    const [userInput, setUserInput] = useState(''); // State for user input
    const [outputResult, setOutputResult] = useState(null); // State to store output

    // Function to execute code
    const output = () => {
        piston.post('/execute', {
            language: language,
            version: version,
            files: [
                {
                    name: "my_code.py", // Filename with appropriate extension
                    content: code
                }
            ],
            stdin: userInput // Pass the user's input here
        })
            .then((res) => {
                console.log(res);
                setOutputResult(res.data.run); // Set the output result
            })
            .catch((error) => {
                console.error('Error executing code:', error.response?.data || error.message);
                setOutputResult('Error executing code: ' + (error.response?.data.message || 'Unknown error'));
            });
    };

    return (
        <>
            <div className='w-full my-6 mx-auto h-1 bg-primary '></div>
            <div className='bg-base-200 rounded-md p-3 text-base-content'>
                <h3 className='text-2xl m-1'>Input:</h3>
                <div className='flex flex-col items-center gap-3'>
                    <textarea
                        className='textarea text-primary textarea-bordered w-full'
                        placeholder="Enter code input here..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)} // Update user input
                    />
                    <button className='btn  btn-primary' onClick={output}>Run Code</button>
                </div>
            </div>
            <div className='w-full my-6 mx-auto h-1 bg-primary '></div>
            <h3 className='text-2xl m-1'>Output:</h3>
            <div className='bg-base-300 text-base-content rounded-md p-3 h-[50vh] overflow-x-auto '>
                <pre>{outputResult?.stdout ? outputResult.stdout.split('\n').map((line, index) => <p className='text-wrap break-words ' key={index}>{line}</p>) : ''}</pre>
                <pre>{outputResult?.stderr ? outputResult.stderr.split('\n').map((line, index) => <p className='text-error text-wrap break-words' key={index}>{line}</p>) : ''}</pre>
            </div>
        </>
    );
};

export default Output;
