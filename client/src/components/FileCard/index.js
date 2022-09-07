import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';




const FileCard = () => {
    return (
    
    <Card title="All Files">
      <Card type="inner" title="Files" extra={<a href="">Add File</a>}>
        </Card>
      <Button type="primary">Add File</Button>
   </Card>
)};
  


export default FileCard;