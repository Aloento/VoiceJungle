import React from 'react';
import { Button,Input } from 'antd';


const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};

const urlSearchParams = new URLSearchParams(window.location.search);
const model_name = urlSearchParams.get("id");

const App: React.FC = () => (
    <div style={{ color: 'black', width: '50%' }}>
        <h1>{`${model_name}`}</h1>
        <TextArea placeholder="Enter the text you want to convert" allowClear onChange={onChange} />
        <Button type="primary">submit</Button>
    </div>
    
);

export default App;