import React, {useState, useEffect} from 'react';

const BeginnerIntermediate = () => {
    return(
        <div className="main">
            <h3>Beginner/Intermediate Trails</h3>
            {/* <style type="text/css">
	table.tableizer-table {
		font-size: 12px;
		border: 1px solid #CCC; 
		font-family: Arial, Helvetica, sans-serif;
	} 
	.tableizer-table td {
		padding: 4px;
		margin: 3px;
		border: 1px solid #CCC;
	}
	.tableizer-table th {
		background-color: #104E8B; 
		color: #FFF;
		font-weight: bold;
	}
</style> */}
<table class="tableizer-table">
<thead><tr class="tableizer-firstrow"><th>name</th><th>distance</th><th>location</th><th>difficulty</th></tr></thead><tbody>
 <tr><td> 2018 Brown County Epic Full Route</td><td>95.5 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> 2019 Big Woods Epic Core Ride (75 Miles)</td><td>74.8 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> 2019 Big Woods Epic Back Country Only...</td><td>48.0 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> 2019 Big Woods Epic Full State Park O...</td><td>34.4 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> 2019 Big Woods Epic Short State Park...</td><td>22.8 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> 2019 Big Woods Epic Century (100 Miles)</td><td>104.1 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> Brown County State Park Easy Loop</td><td>7.2 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> Zulu</td><td>1.4 mi</td><td>Terre Haute, IN</td><td>BI</td></tr>
 <tr><td> Wolf Trail</td><td>0.8 mi</td><td>Columbia City, IN</td><td>BI</td></tr>
 <tr><td> Crooked Creek Loop</td><td>5.6 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> Bloodroot Trail</td><td>11.3 mi</td><td>Andrews, IN</td><td>BI</td></tr>
 <tr><td> South Ridge Trail</td><td>2.2 mi</td><td>Ferdinand, IN</td><td>BI</td></tr>
 <tr><td> KA-BAR</td><td>2.3 mi</td><td>Farmersburg, IN</td><td>BI</td></tr>
 <tr><td> Big Fire South</td><td>0.5 mi</td><td>Southport, IN</td><td>BI</td></tr>
 <tr><td> Wabash Heritage Trail</td><td>4.3 mi</td><td>West Lafayette, IN</td><td>BI</td></tr>
 <tr><td> Kyana Trail</td><td>2.8 mi</td><td>Ferdinand, IN</td><td>BI</td></tr>
 <tr><td> Puke Point</td><td>0.5 mi</td><td>Winona Lake, IN</td><td>BI</td></tr>
 <tr><td> Creek Trail West</td><td>0.6 mi</td><td>Winona Lake, IN</td><td>BI</td></tr>
 <tr><td> Bowl Field</td><td>0.2 mi</td><td>Winona Lake, IN</td><td>BI</td></tr>
 <tr><td> The Outer Pines</td><td>0.4 mi</td><td>Winona Lake, IN</td><td>BI</td></tr>
 <tr><td> Lower Bowl Field</td><td>0.5 mi</td><td>Winona Lake, IN</td><td>BI</td></tr>
 <tr><td> Rock Garden</td><td>0.2 mi</td><td>Winona Lake, IN</td><td>BI</td></tr>
 <tr><td> Camels Hump</td><td>0.0 mi</td><td>Winona Lake, IN</td><td>BI</td></tr>
 <tr><td> Bowl Field Connector</td><td>0.1 mi</td><td>Winona Lake, IN</td><td>BI</td></tr>
 <tr><td> Perimeter Loop</td><td>5.0 mi</td><td>Farmersburg, IN</td><td>BI</td></tr>
 <tr><td> Nebo Ridge Trail</td><td>8.0 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> Lawrence Creek Trail</td><td>3.3 mi</td><td>Lawrence, IN</td><td>BI</td></tr>
 <tr><td> Bushwhack</td><td>1.1 mi</td><td>Farmersburg, IN</td><td>BI</td></tr>
 <tr><td> Basic Training Skills Trail</td><td>0.9 mi</td><td>Terre Haute, IN</td><td>BI</td></tr>
 <tr><td> Novice/Main Loop</td><td>2.1 mi</td><td>Anderson, IN</td><td>BI</td></tr>
 <tr><td> Fire Tower Trail</td><td>2.3 mi</td><td>Corydon, IN</td><td>BI</td></tr>
 <tr><td> Big Fire North</td><td>0.4 mi</td><td>Southport, IN</td><td>BI</td></tr>
 <tr><td> Power Line DH</td><td>0.3 mi</td><td>Southport, IN</td><td>BI</td></tr>
 <tr><td> East Lake Trail</td><td>1.2 mi</td><td>Farmersburg, IN</td><td>BI</td></tr>
 <tr><td> Rock and Roll Loop</td><td>0.8 mi</td><td>Farmersburg, IN</td><td>BI</td></tr>
 <tr><td> Mega Pump</td><td>0.6 mi</td><td>Terre Haute, IN</td><td>BI</td></tr>
 <tr><td> Buffalo Trace Trail</td><td>4.9 mi</td><td>French Lick, IN</td><td>BI</td></tr>
 <tr><td> Breeden Ridge Trail</td><td>2.8 mi</td><td>Corydon, IN</td><td>BI</td></tr>
 <tr><td> Grandview Loop</td><td>5.1 mi</td><td>Versailles, IN</td><td>BI</td></tr>
 <tr><td> Hoffman Nature Area</td><td>1.3 mi</td><td>Battle Ground, IN</td><td>BI</td></tr>
 <tr><td> Lance's Loop</td><td>2.9 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> Sycamore Ridge</td><td>4.0 mi</td><td>New Harmony, IN</td><td>BI</td></tr>
 <tr><td> Pahoka Adventure</td><td>1.0 mi</td><td>New Harmony, IN</td><td>BI</td></tr>
 <tr><td> Flying Flynn</td><td>0.6 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> Downhill 2</td><td>0.6 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> Dual Slalom Track</td><td>0.2 mi</td><td>Farmersburg, IN</td><td>BI</td></tr>
 <tr><td> The Chute</td><td>0.1 mi</td><td>New Harmony, IN</td><td>BI</td></tr>
 <tr><td> Trail 1</td><td>4.6 mi</td><td>Boonville, IN</td><td>BI</td></tr>
 <tr><td> Trail 2</td><td>2.6 mi</td><td>Oakland City, IN</td><td>BI</td></tr>
 <tr><td> Alpha</td><td>1.2 mi</td><td>Terre Haute, IN</td><td>BI</td></tr>
 <tr><td> Rocky Ridge Loop</td><td>2.0 mi</td><td>Corydon, IN</td><td>BI</td></tr>
 <tr><td> Proving Grounds Expert Drop</td><td>0.0 mi</td><td>Terre Haute, IN</td><td>BI</td></tr>
 <tr><td> Schoen Creek Trail</td><td>3.0 mi</td><td>Lawrence, IN</td><td>BI</td></tr>
 <tr><td> Mountain Bike Trail</td><td>6.7 mi</td><td>North Liberty, IN</td><td>BI</td></tr>
 <tr><td> Marquette Rail Trail</td><td>2.3 mi</td><td>Ogden Dunes, IN</td><td>BI</td></tr>
 <tr><td> Intermediate Loop</td><td>0.9 mi</td><td>Anderson, IN</td><td>BI</td></tr>
 <tr><td> West Lake Trail</td><td>0.4 mi</td><td>Terre Haute, IN</td><td>BI</td></tr>
 <tr><td> Land Bridge</td><td>0.5 mi</td><td>Anderson, IN</td><td>BI</td></tr>
 <tr><td> Shadow Run Loop</td><td>3.8 mi</td><td>Versailles, IN</td><td>BI</td></tr>
 <tr><td> Group Camp Trail</td><td>3.3 mi</td><td>Corydon, IN</td><td>BI</td></tr>
 <tr><td> Bendix Woods County Park Bike Trail</td><td>5.8 mi</td><td>New Carlisle, IN</td><td>BI</td></tr>
 <tr><td> Walnut</td><td>3.7 mi</td><td>New Harmony, IN</td><td>BI</td></tr>
 <tr><td> Blue Trail</td><td>2.6 mi</td><td>North Vernon, IN</td><td>BI</td></tr>
 <tr><td> Upper Cottonwood</td><td>0.3 mi</td><td>Southport, IN</td><td>BI</td></tr>
 <tr><td> Green Trail</td><td>2.6 mi</td><td>North Vernon, IN</td><td>BI</td></tr>
 <tr><td> Walnut Connector</td><td>1.8 mi</td><td>New Harmony, IN</td><td>BI</td></tr>
 <tr><td> Calumet Bike Trail</td><td>9.5 mi</td><td>Porter, IN</td><td>BI</td></tr>
 <tr><td> Waterfall Trail</td><td>3.6 mi</td><td>French Lick, IN</td><td>BI</td></tr>
 <tr><td> Big Frog One</td><td>0.7 mi</td><td>Nashville, IN</td><td>BI</td></tr>
 <tr><td> Proving Grounds Advanced Descent</td><td>0.1 mi</td><td>Terre Haute, IN</td><td>BI</td></tr>
 <tr><td> Ewok Village</td><td>1.1 mi</td><td>Anderson, IN</td><td>BI</td></tr>
 <tr><td> Amphitheater Park Trail</td><td>3.0 mi</td><td>Battle Ground, IN</td><td>BI</td></tr>
</tbody></table>
        </div>
    )
}
export default BeginnerIntermediate;