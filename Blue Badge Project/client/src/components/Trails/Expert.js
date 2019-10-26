import React, {useState, useEffect} from 'react';

const Expert = () => {
    return(
        <div className="main">
            <h3>Expert Trails</h3>
            <table class="tableizer-table">
                <thead><tr class="tableizer-firstrow"><th>name</th><th>distance</th><th>location</th><th>difficulty</th></tr></thead><tbody>
                <tr><td> Trail 6</td><td>1.1 mi</td><td>Oolitic, IN</td><td>E</td></tr>
                <tr><td> Weedpatch</td><td>0.1 mi</td><td>Nashville, IN</td><td>E</td></tr>
                <tr><td> Bobcat Connector</td><td>0.4 mi</td><td>Nashville, IN</td><td>E</td></tr>
                </tbody></table>
        </div>
    )
}

export default Expert;