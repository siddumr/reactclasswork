import React from 'react';
export default function Listobject()
{
    const college=[{id:1,stuName:"siddu ",age:10},
    {id:2,stuName:"surya ",age:24},
    {id:3,stuName:"pawan ",age:30}]
    const display=college.map((col)=><li key={col.id}>{col.stuName}{col.age}</li>)
    return(
        <div style={{background:"yellow"}}>
        <h1>List of Students</h1>
        {display}</div>
    )

}