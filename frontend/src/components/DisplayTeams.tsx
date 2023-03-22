import React from 'react';
import teams from '../data/jsonData'; //imports the tems json variable from the .ts file
import Team from '../interfaces/team';


export default function DisplayTeams(){
    let data: Array<Team> = teams.teams; //sets data equal to the teams attribute of teams (an array of objects)

    return(
        <div>
            {
                data.map(i => { //loops through each object in the data array
                    return(
                        <div className='card card-outline-primary m-1 p-1'>
                            <div className='bg-faded p-1'>
                                <h4>
                                    {i.school + " " + i.name}
                                </h4>
                                <div className="card-text p-1">{i.city + ", " + i.state}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}