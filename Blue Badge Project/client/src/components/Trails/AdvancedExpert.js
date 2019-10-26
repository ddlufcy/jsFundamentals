import React, {useState, useEffect} from 'react';

const AdvancedExpert = () => {
    return(
        <div className="main">
            <h3>Advanced/Expert</h3>
            <table class="tableizer-table">
            <thead><tr class="tableizer-firstrow"><th>name</th><th>distance</th><th>location</th><th>difficulty</th></tr></thead><tbody>
            <tr><td> Trail 9</td><td>1.2 mi</td><td>Oolitic, IN</td><td>AE</td></tr>
            </tbody></table>
        </div>
    )
}

export default AdvancedExpert;