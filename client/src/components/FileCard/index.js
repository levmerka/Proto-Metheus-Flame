import React from 'react';
import { Card } from 'antd';
import { Button } from 'antd';


const [addToLibrary, { error }] = useMutation(ADD_File, {
    update(cache, { data: { addFile } }) {
      try {
        const { File } = cache.readQuery({ query: QUERY_File });

        cache.writeQuery({
          query: QUERY_File,
          data: { File: [addToLibrary, ...File] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });



const App = () => {
    return (
    
    <Card title="All Files">
      <Card type="inner" title="Inner Card title" extra={<a href="">Add File</a>}>
        Inner Card content
      </Card>
   </Card>
)};
  


export default FileCard;