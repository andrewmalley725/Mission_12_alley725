import React from 'react';
import teams from './data/jsonData';
import Team from './interfaces/team';


export default function DisplayTeams(){
    let data: Array<Team> = teams.teams;

    console.log(data);

    return(
        <div>
            {
                data.map(i => {
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