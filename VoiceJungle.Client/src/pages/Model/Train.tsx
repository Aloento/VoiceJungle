import React from 'react';
import { Button,Input } from 'antd';

const { TextArea } = Input;

const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  console.log(e);
};

const App: React.FC = () => (
    <div style={{ color: 'red', width: '50%' }}>
        <TextArea placeholder="Enter the text you want to convert" allowClear onChange={onChange} />
        <Button type="primary">submit</Button>
    </div>
    
);

export default App;