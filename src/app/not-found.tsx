import React from 'react';

const Custom404 = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: `<div style="text-align: center; width: 800px; margin-left: -400px; position: absolute; top: 30%; left: 50%; color: rgb(68, 68, 68);">
            <h1 style="margin: 0px; font-size: 150px; line-height: 150px; font-weight: bold;">404</h1>
            <h2 style="margin-top: 20px; font-size: 30px;">Not Found</h2>
            <p>The resource requested could not be found on this server!</p>
        </div>` }} />
    );
};

export default Custom404;
