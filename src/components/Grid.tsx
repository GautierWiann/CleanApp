import React from 'react'
import Square from './Square'
import '../App.css'
import {Row} from 'reactstrap'


export default function Grid(props : any) {

  // generates an array of props.row rows, each containing props.col Squares.
    
    const grid : any = []
    for (let rows = 0; rows < props.col; rows ++) {
     
        const ligne : any = []
        const row : any = []
        for (let col = 0; col < props.row; col ++) {
            if(props.emplacement.col === rows && props.emplacement.row === col ){

            ligne.push(<Square key={`${col}${rows}`} size='100' row={`${col}`} col={`${rows}`} show={true} rotation={props.rotation} />)}
         else {
            ligne.push(<Square key={`${col}${rows}`} size='100' row={`${col}`} col={`${rows}`} show={false} />)
        }}
        row.push(<Row style={{width:'100%'}}>{ligne}</Row>)
        grid.push(row)
    }


    return (
        <div className='grid-board'>
            {grid}
        </div>
    )
}