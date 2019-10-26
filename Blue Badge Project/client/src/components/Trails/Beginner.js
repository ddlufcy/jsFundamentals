import React, {useState, useEffect} from 'react';

const Beginner = () => {
    return(
        <div className='main'>
            <h3>Beginner Trails</h3>    
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
 <tr><td>Bluhm County-Westville</td><td>4.3 mi</td><td>Westville, IN</td><td>B</td></tr>
 <tr><td>Outback Trail System At Imagination Glen</td><td>9.2 mi</td><td>Portage, IN</td><td>B</td></tr>
 <tr><td>Hayes Arboretum Mountain Bike Trails</td><td>7.4 mi</td><td>Richmond,IN</td><td>B</td></tr>
 <tr><td>Scales Lake Loop</td><td>7.0 mi</td><td>Boonville IN</td><td>B</td></tr>
 <tr><td> Winona Lake Full Lap</td><td>8.3 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Morsches Park Full Lap</td><td>6.5 mi</td><td>Columbia City, IN</td><td>B</td></tr>
 <tr><td> Town Run Trail</td><td>6.6 mi</td><td>Fishers, IN</td><td>B</td></tr>
 <tr><td> Eagle's Trace Trail</td><td>4.8 mi</td><td>Salem, IN</td><td>B</td></tr>
 <tr><td> Amp Big Loop</td><td>3.3 mi</td><td>Battle Ground, IN</td><td>B</td></tr>
 <tr><td> XC Race Loop</td><td>6.5 mi</td><td>Farmersburg, IN</td><td>B</td></tr>
 <tr><td> Redbird SRA Loop</td><td>5.1 mi</td><td>Linton, IN</td><td>B</td></tr>
 <tr><td> Coffee Creek Watershed Preserve - 5k...</td><td>3.2 mi</td><td>Chesterton, IN</td><td>B</td></tr>
 <tr><td> Haan Trail - Hidden Valley</td><td>2.5 mi</td><td>Lafayette, IN</td><td>B</td></tr>
 <tr><td> Lake Loop</td><td>2.8 mi</td><td>Farmersburg, IN</td><td>B</td></tr>
 <tr><td> French Lick Loop</td><td>8.8 mi</td><td>French Lick, IN</td><td>B</td></tr>
 <tr><td> Rum Village MTB Trail</td><td>5.5 mi</td><td>South Bend, IN</td><td>B</td></tr>
 <tr><td> Flat Fork Creek - Full</td><td>1.6 mi</td><td>Fortville, IN</td><td>B</td></tr>
 <tr><td> Expert Loop</td><td>6.2 mi</td><td>Anderson, IN</td><td>B</td></tr>
 <tr><td> Interlake SRA - Gravel Extreme</td><td>7.3 mi</td><td>Boonville, IN</td><td>B</td></tr>
 <tr><td> Interlake SRA - 2017 Coal Country 50...</td><td>7.8 mi</td><td>Boonville, IN</td><td>B</td></tr>
 <tr><td> Lance's Loop to Frog Man</td><td>8.6 mi</td><td>Nashville, IN</td><td>B</td></tr>
 <tr><td> Southwestway Figure 8</td><td>3.7 mi</td><td>Southport, IN</td><td>B</td></tr>
 <tr><td> O'Bannon Woods State Park</td><td>17.4 mi</td><td>Corydon, IN</td><td>B</td></tr>
 <tr><td> Westwood Park</td><td>8.7 mi</td><td>New Castle, IN</td><td>B</td></tr>
 <tr><td> Fort Benjamin Harrison State Park</td><td>8.2 mi</td><td>Lawrence, IN</td><td>B</td></tr>
 <tr><td> Versailles State Park Outer Loop Figu...</td><td>12.5 mi</td><td>Versailles, IN</td><td>B</td></tr>
 <tr><td> Muscatatuck Park 2019 DINO Tune Up</td><td>5.9 mi</td><td>North Vernon, IN</td><td>B</td></tr>
 <tr><td> Hoosier National Forest Loops</td><td>29.6 mi</td><td>Nashville, IN</td><td>B</td></tr>
 <tr><td> Harmonie Intermediate Loop</td><td>8.6 mi</td><td>New Harmony, IN</td><td>B</td></tr>
 <tr><td> The Adventure Hiking Trail Loop</td><td>22.9 mi</td><td>Corydon, IN</td><td>B</td></tr>
 <tr><td> Hoffman Nature full "lap" expert opti...</td><td>5.0 mi</td><td>Battle Ground, IN</td><td>B</td></tr>
 <tr><td> Springs Valley Trail - West</td><td>8.2 mi</td><td>French Lick, IN</td><td>B</td></tr>
 <tr><td> Beginner Loop</td><td>1.4 mi</td><td>Portage, IN</td><td>B</td></tr>
 <tr><td> Slayer Trail</td><td>1.0 mi</td><td>Boonville, IN</td><td>B</td></tr>
 <tr><td> Meadow Field Trail</td><td>0.8 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Caution Trail</td><td>0.4 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Goat Trail</td><td>1.0 mi</td><td>Boonville, IN</td><td>B</td></tr>
 <tr><td> Race Field</td><td>0.1 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Goat Trail/DuKattie Drop</td><td>0.1 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Black and Blue</td><td>0.3 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Derby Hill</td><td>0.7 mi</td><td>Fort Wayne, IN</td><td>B</td></tr>
 <tr><td> Pitfall</td><td>0.5 mi</td><td>Boonville, IN</td><td>B</td></tr>
 <tr><td> Deadman's Curve Trail</td><td>0.5 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Fall Creek Trail</td><td>9.7 mi</td><td>Indianapolis, IN</td><td>B</td></tr>
 <tr><td> Darkside Access Loop</td><td>3.2 mi</td><td>Burns Harbor, IN</td><td>B</td></tr>
 <tr><td> Christmas Trail</td><td>1.6 mi</td><td>Fort Wayne, IN</td><td>B</td></tr>
 <tr><td> Red Trail</td><td>2.3 mi</td><td>Richmond, IN</td><td>B</td></tr>
 <tr><td> Central Canal Towpath</td><td>5.5 mi</td><td>Broad Ripple, IN</td><td>B</td></tr>
 <tr><td> Sinkhole Trail</td><td>1.7 mi</td><td>Boonville, IN</td><td>B</td></tr>
 <tr><td> Southtown Alternate</td><td>0.1 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> The Pines</td><td>0.7 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Creek Trail East</td><td>0.2 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> North Loop</td><td>3.0 mi</td><td>Columbia City, IN</td><td>B</td></tr>
 <tr><td> Jedi</td><td>0.9 mi</td><td>Boonville, IN</td><td>B</td></tr>
 <tr><td> Kintionki Trail</td><td>3.4 mi</td><td>Andrews, IN</td><td>B</td></tr>
 <tr><td> Silver Spoon</td><td>0.5 mi</td><td>Fort Wayne, IN</td><td>B</td></tr>
 <tr><td> Blue Trail</td><td>1.8 mi</td><td>Richmond, IN</td><td>B</td></tr>
 <tr><td> Yellow Trail</td><td>1.6 mi</td><td>Richmond, IN</td><td>B</td></tr>
 <tr><td> Hoover Hill</td><td>1.5 mi</td><td>Boonville, IN</td><td>B</td></tr>
 <tr><td> Murdock Park Multi-Use Trail</td><td>2.6 mi</td><td>Lafayette, IN</td><td>B</td></tr>
 <tr><td> Twin Lakes Trail</td><td>2.6 mi</td><td>Ferdinand, IN</td><td>B</td></tr>
 <tr><td> Goshen</td><td>1.8 mi</td><td>Fort Wayne, IN</td><td>B</td></tr>
 <tr><td> Orange Trail</td><td>1.5 mi</td><td>Richmond, IN</td><td>B</td></tr>
 <tr><td> Southtown Loop</td><td>1.1 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Sweet Darlin' Trail</td><td>0.2 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Purple Haze</td><td>1.6 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Shoot the Chutes</td><td>0.1 mi</td><td>Winona Lake, IN</td><td>B</td></tr>
 <tr><td> Brown County State Park</td><td>28.6 mi</td><td>Nashville, IN</td><td>B</td></tr>
 <tr><td> Riverside</td><td>0.5 mi</td><td>Fort Wayne, IN</td><td>B</td></tr>
 <tr><td> South Loop</td><td>1.7 mi</td><td>Columbia City, IN</td><td>B</td></tr>
 <tr><td> Easter</td><td>0.4 mi</td><td>Fort Wayne, IN</td><td>B</td></tr>
 <tr><td> Foxey Hollow Trail</td><td>1.6 mi</td><td>Ferdinand, IN</td><td>B</td></tr>
 <tr><td> Oak Savannah Trail</td><td>8.9 mi</td><td>Hobart, IN</td><td>B</td></tr>
 <tr><td> Tipsaw Lake Trail</td><td>5.6 mi</td><td>Santa Claus, IN</td><td>B</td></tr>
</tbody></table> 

        </div>
    )
}
export default Beginner;