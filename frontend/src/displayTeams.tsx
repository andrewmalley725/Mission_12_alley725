import React from 'react';
import teams from './data/jsonData';


export default function DisplayTeams(){
    let data: Object = teams.teams;

    console.log(data);

    return(
        <h1>Hello World</h1>
    )
}