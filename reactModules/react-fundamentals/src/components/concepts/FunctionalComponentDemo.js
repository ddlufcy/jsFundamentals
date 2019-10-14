import React from 'react';

const FunctionalComponentDemo = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <div>
                   <h1>Functional Component Demo</h1>
                </div>
                <div>
                    <dl>
                        <dt>Presentational</dt>
                        <dd>Often used for simply rendering a small chunk of code to the dom.</dd>
                        <dt>No "this" keyword</dt>
                        <dd>Unlike class components, functional ones don't use "this".</dd>
                        <dd>No State</dd>
                        <dt>These are "dumb" components for UI.</dt>
                        <dd>return()</dd>
                        <dt>Must return a single</dt>
                    </dl>
                </div>
              
            </div>
        </div>
    );
};

export default FunctionalComponentDemo;