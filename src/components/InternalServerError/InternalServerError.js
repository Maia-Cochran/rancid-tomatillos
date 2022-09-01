import React from 'react'
import Status from '../Status/Status';

const NotFound = () => {
    return (
      <Status code={500}>
        <div>
          <h1>Internal Server Error</h1>
        </div>
      </Status>
    );
  }

  export default NotFound



