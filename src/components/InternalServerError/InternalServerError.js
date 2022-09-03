import React from 'react';
import Status from '../Status/Status';
import "./InternalServerError.css";

const InternalServerError = () => {
    return (
      <Status code={500}>
        <div>
          <h1>Internal Server Error</h1>
        </div>
      </Status>
    );
  }

export default InternalServerError;