import React, {useState, useEffect} from 'react';

const Intermediate = () => {
    return(
        <div className="main">
            <h3>Intermediate Trails</h3>
            <table class="tableizer-table">
<thead><tr class="tableizer-firstrow"><th>name</th><th>distance</th><th>location</th><th>difficulty</th></tr></thead><tbody>
 <tr><td> Cliffside</td><td>1.4 mi</td><td>Versailles, IN</td><td>I</td></tr>
 <tr><td> The Pier</td><td>0.6 mi</td><td>Anderson, IN</td><td>I</td></tr>
 <tr><td> Advanced Trails Access</td><td>0.4 mi</td><td>Terre Haute, IN</td><td>I</td></tr>
 <tr><td> McCormick Woods</td><td>2.7 mi</td><td>West Lafayette, IN</td><td>I</td></tr>
 <tr><td> Creekside</td><td>1.1 mi</td><td>Versailles, IN</td><td>I</td></tr>
 <tr><td> Mann Loop</td><td>1.1 mi</td><td>Southport, IN</td><td>I</td></tr>
 <tr><td> Hoffman Nature Area Spur Trail</td><td>1.1 mi</td><td>Battle Ground, IN</td><td>I</td></tr>
 <tr><td> Expert 5</td><td>1.1 mi</td><td>Anderson, IN</td><td>I</td></tr>
 <tr><td> Little Erzberg</td><td>0.3 mi</td><td>Anderson, IN</td><td>I</td></tr>
 <tr><td> Camp Glenn Trail</td><td>0.8 mi</td><td>Lawrence, IN</td><td>I</td></tr>
 <tr><td> Worm Hole Trail</td><td>2.6 mi</td><td>Versailles, IN</td><td>I</td></tr>
 <tr><td> Potato Run Trail</td><td>1.2 mi</td><td>Corydon, IN</td><td>I</td></tr>
 <tr><td> Eagle Trace Trail</td><td>1.3 mi</td><td>Versailles, IN</td><td>I</td></tr>
 <tr><td> Homestead</td><td>1.6 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Rollercoaster</td><td>1.0 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Meadow Run</td><td>0.8 mi</td><td>Bristol, IN</td><td>I</td></tr>
 <tr><td> Oka Run</td><td>1.3 mi</td><td>New Harmony, IN</td><td>I</td></tr>
 <tr><td> Cruiser</td><td>0.8 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Lucas Hollow</td><td>3.0 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Cliff Dweller</td><td>1.7 mi</td><td>Corydon, IN</td><td>I</td></tr>
 <tr><td> Mann Summit East</td><td>0.3 mi</td><td>Southport, IN</td><td>I</td></tr>
 <tr><td> Berm Coaster</td><td>0.2 mi</td><td>Fortville, IN</td><td>I</td></tr>
 <tr><td> Frog Man</td><td>0.9 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Right to the Skinnies</td><td>0.2 mi</td><td>Fortville, IN</td><td>I</td></tr>
 <tr><td> Blue Loop</td><td>2.6 mi</td><td>South Bend, IN</td><td>I</td></tr>
 <tr><td> Hill Side Hell</td><td>0.4 mi</td><td>Fortville, IN</td><td>I</td></tr>
 <tr><td> Chute Loop</td><td>0.4 mi</td><td>New Harmony, IN</td><td>I</td></tr>
 <tr><td> Warrior Trail (Adaptive Use)</td><td>0.5 mi</td><td>Farmersburg, IN</td><td>I</td></tr>
 <tr><td> Blue Loop</td><td>3.4 mi</td><td>LaPorte, IN</td><td>I</td></tr>
 <tr><td> Red Loop</td><td>6.8 mi</td><td>LaPorte, IN</td><td>I</td></tr>
 <tr><td> Hobbs Hollow Flow Trail</td><td>3.4 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Crooked Creek Connector</td><td>0.4 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Dual Slalom and Jumplines Return</td><td>0.3 mi</td><td>Farmersburg, IN</td><td>I</td></tr>
 <tr><td> Trail D</td><td>3.2 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Center Loop</td><td>1.4 mi</td><td>Versailles, IN</td><td>I</td></tr>
 <tr><td> Lenape</td><td>1.9 mi</td><td>Southport, IN</td><td>I</td></tr>
 <tr><td> Combs Rd.</td><td>2.1 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Lower Cottonwood</td><td>0.4 mi</td><td>Southport, IN</td><td>I</td></tr>
 <tr><td> Red Loop</td><td>3.0 mi</td><td>Gulivoire Park, IN</td><td>I</td></tr>
 <tr><td> South Trail</td><td>0.8 mi</td><td>Bloomington, IN</td><td>I</td></tr>
 <tr><td> Cockrum</td><td>1.3 mi</td><td>Southport, IN</td><td>I</td></tr>
 <tr><td> Basement</td><td>0.4 mi</td><td>Portage, IN</td><td>I</td></tr>
 <tr><td> Spaghetti Hill</td><td>0.4 mi</td><td>Portage, IN</td><td>I</td></tr>
 <tr><td> South Trail Alternate</td><td>0.1 mi</td><td>Bloomington, IN</td><td>I</td></tr>
 <tr><td> Bartley Ridge</td><td>3.1 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Deam Lake Loop</td><td>6.3 mi</td><td>Sellersburg, IN</td><td>I</td></tr>
 <tr><td> Mann Summit North</td><td>0.2 mi</td><td>Southport, IN</td><td>I</td></tr>
 <tr><td> Turtle Loop</td><td>0.6 mi</td><td>Versailles, IN</td><td>I</td></tr>
 <tr><td> Green Valley Trail</td><td>3.9 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Turkey Run</td><td>0.5 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Last Chance Trail</td><td>1.2 mi</td><td>Versailles, IN</td><td>I</td></tr>
 <tr><td> Copperhead Ridge</td><td>1.8 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Black Trail</td><td>1.2 mi</td><td>North Vernon, IN</td><td>I</td></tr>
 <tr><td> Riverview</td><td>0.3 mi</td><td>Southport, IN</td><td>I</td></tr>
 <tr><td> Twin Bridges</td><td>1.4 mi</td><td>Bristol, IN</td><td>I</td></tr>
 <tr><td> Raccoon Rollers</td><td>0.2 mi</td><td>Bristol, IN</td><td>I</td></tr>
 <tr><td> Deer Run (Downhill 1)</td><td>0.5 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> #3 Division Road Loop</td><td>0.3 mi</td><td>Westville, IN</td><td>I</td></tr>
 <tr><td> Hillside Pines</td><td>1.2 mi</td><td>Bristol, IN</td><td>I</td></tr>
 <tr><td> Return Loop</td><td>0.2 mi</td><td>Fortville, IN</td><td>I</td></tr>
 <tr><td> Smith Valencia</td><td>1.4 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Trail #4</td><td>1.7 mi</td><td>Linton, IN</td><td>I</td></tr>
 <tr><td> Indian Camp</td><td>0.6 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Sunset Ridge</td><td>1.0 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Valley Line Loop</td><td>1.0 mi</td><td>Bristol, IN</td><td>I</td></tr>
 <tr><td> West Side Option</td><td>0.3 mi</td><td>Bristol, IN</td><td>I</td></tr>
 <tr><td> Connector</td><td>0.2 mi</td><td>Oakland City, IN</td><td>I</td></tr>
 <tr><td> #2 Large Loop</td><td>0.3 mi</td><td>Westville, IN</td><td>I</td></tr>
 <tr><td> Connector</td><td>0.1 mi</td><td>Oakland City, IN</td><td>I</td></tr>
 <tr><td> Short Cut</td><td>0.1 mi</td><td>French Lick, IN</td><td>I</td></tr>
 <tr><td> Alternate Line</td><td>0.1 mi</td><td>Bristol, IN</td><td>I</td></tr>
 <tr><td> River/Mann Connector</td><td>0.1 mi</td><td>Southport, IN</td><td>I</td></tr>
 <tr><td> WTP Lower Loop</td><td>2.3 mi</td><td>Avon, IN</td><td>I</td></tr>
 <tr><td> Beginner Trail</td><td>0.8 mi</td><td>Bloomington, IN</td><td>I</td></tr>
 <tr><td> North Trail</td><td>0.7 mi</td><td>Bloomington, IN</td><td>I</td></tr>
 <tr><td> Hesitation Point Trail</td><td>2.5 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Cottonwood</td><td>0.5 mi</td><td>Southport, IN</td><td>I</td></tr>
 <tr><td> Limekiln Trail</td><td>2.2 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Miller Ridge</td><td>5.0 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Walnut Trail</td><td>2.0 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Bobcat</td><td>1.8 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Aynes Loop</td><td>3.2 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Finks Road Connector</td><td>0.6 mi</td><td>Versailles, IN</td><td>I</td></tr>
 <tr><td> Creekview Trail</td><td>0.1 mi</td><td>Chesterton, IN</td><td>I</td></tr>
 <tr><td> Weed Patch</td><td>2.4 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> North Tower Loop</td><td>3.9 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Fire Tower Trail</td><td>1.4 mi</td><td>Ferdinand, IN</td><td>I</td></tr>
 <tr><td> Roller Coaster</td><td>0.5 mi</td><td>Burns Harbor, IN</td><td>I</td></tr>
 <tr><td> Richs Revenge</td><td>1.1 mi</td><td>Burns Harbor, IN</td><td>I</td></tr>
 <tr><td> Deer Alley</td><td>0.7 mi</td><td>Fort Wayne, IN</td><td>I</td></tr>
 <tr><td> Twister</td><td>0.2 mi</td><td>Columbia City, IN</td><td>I</td></tr>
 <tr><td> Morsches Connector</td><td>0.7 mi</td><td>Columbia City, IN</td><td>I</td></tr>
 <tr><td> Bobol Ridge</td><td>0.4 mi</td><td>Burns Harbor, IN</td><td>I</td></tr>
 <tr><td> Daytona</td><td>0.4 mi</td><td>Burns Harbor, IN</td><td>I</td></tr>
 <tr><td> Log Jam</td><td>0.5 mi</td><td>Burns Harbor, IN</td><td>I</td></tr>
 <tr><td> Twin Oak</td><td>0.1 mi</td><td>Fort Wayne, IN</td><td>I</td></tr>
 <tr><td> Yellow Trail Connector</td><td>0.1 mi</td><td>Richmond, IN</td><td>I</td></tr>
 <tr><td> Easter Cutoff</td><td>0.0 mi</td><td>Fort Wayne, IN</td><td>I</td></tr>
 <tr><td> Pine Loop</td><td>1.1 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Mountain Bike Trail</td><td>8.3 mi</td><td>Spencer, IN</td><td>I</td></tr>
 <tr><td> Prarie Creek Multi-Use Trail</td><td>1.2 mi</td><td>Parker City, IN</td><td>I</td></tr>
 <tr><td> Schooner Trace Trail</td><td>4.0 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Loop 1</td><td>1.6 mi</td><td>Parker City, IN</td><td>I</td></tr>
 <tr><td> North Gate Connector</td><td>1.1 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Shelley Trail</td><td>2.0 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Trail 19</td><td>1.8 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> Trail 18</td><td>4.9 mi</td><td>Nashville, IN</td><td>I</td></tr>
 <tr><td> 10 O'Clock MTB Trail</td><td>2.7 mi</td><td>Nashville, IN</td><td>I</td></tr>
</tbody></table>
        </div>
    )
}

export default Intermediate;