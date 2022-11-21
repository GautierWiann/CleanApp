import React from 'react';
import './App.css';
import Grid from './components/Grid';
import { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

 interface Emplacement {
    col : number,
    row : number
  }

function App() {
  const [col, setCol] = useState<number>(10)
  const [row, setRow] = useState<number>(10)
  const [col2, setCol2] = useState<number>(10)
  const [row2, setRow2] = useState<number>(10)
  const [emplacement, setEmplacement] = useState<Emplacement>({col:0, row:0})
  const [startCol, setStartCol] = useState<number>(0)
  const [startRow, setStartRow] = useState<number>(0)
   const [rotation, setRotation] = useState<number>(0)

   //change rotatation prop of the image
function handleG(rot : number)   {
  if (rot === 0) {
    setRotation(270)
  } else if (rot === 90) {
    setRotation(0)
  } else if (rot === 180) {
    setRotation(90)
  }else if (rot === 270) {
    setRotation(180)
  }
}

 
function handleD(rot : number)   {
  if (rot === 0) {
    setRotation(90)
  } else if (rot === 90) {
    setRotation(180)
  } else if (rot === 180) {
    setRotation(270)
  }else if (rot === 270) {
    setRotation(0)
  }
}


//change emplacement depending on rotation 
function handleA(rot : number)   {
  if (rot === 0) {
    if (emplacement.row > 0) {
    setEmplacement({col : emplacement.col , row : emplacement.row -1})
  }
  } else if (rot === 90) {
    if (emplacement.col < col2 - 1) {
      setEmplacement({col : emplacement.col + 1 , row : emplacement.row })
    }
  } else if (rot === 180) {
    if (emplacement.row < row2 - 1) {
      setEmplacement({col : emplacement.col , row : emplacement.row +1})
    }
  }else if (rot === 270) {
    if (emplacement.col > 0) {
      setEmplacement({col : emplacement.col - 1, row : emplacement.row})
    }
  }
}

function reset() {
  setCol2(col)
  setRow2(row)
  setEmplacement({col:0, row: row -1})
  setRotation(0)
}

function replace () {
  setRotation(0)
  //attention we don't use startRow as it is because the rows of the grid are reverse to the x axis
  setEmplacement({col : startCol, row : row2 - startRow -1 })
}

  return (
    <div className="App">
      <Form inline>
        <FormGroup className='input'>
          <Label >Nombre de colonnes :  </Label>
          <Input type="number"  placeholder="0" onChange={(e) => setCol(Number(e.target.value))} value={col} />
        </FormGroup>
        <FormGroup className='input' >
          <Label >Nombre de lignes :  </Label>
          <Input type="number"  placeholder="0" onChange={(e) => setRow(Number(e.target.value))} value={row} />
        </FormGroup>
        
         <FormGroup className='input' >
          <Button onClick={() => reset()}>générer une grille</Button>
        </FormGroup>
        <FormGroup className='input'>
          <Label >colonne de départ :  </Label>
          <Input type="number"  placeholder="0" onChange={(e) => setStartCol(Number(e.target.value))} value={startCol} />
        </FormGroup>
        <FormGroup className='input' >
          <Label >ligne de départ :  </Label>
          <Input type="number"  placeholder="0" onChange={(e) => setStartRow(Number(e.target.value))} value={startRow} />
        </FormGroup>
        <Button onClick={() => replace()}>Placer l'aspirateur</Button>
       

     
       <p>Vous êtes à l'emplacement (colonne : {emplacement.col} ; ligne : { - emplacement.row + row2 - 1})</p>
        
       
        <FormGroup><Button onClick={()=> handleG(rotation)}>G</Button> <Button onClick={()=> handleA(rotation)}>A</Button> <Button onClick={()=> handleD(rotation)}>D</Button></FormGroup>
      </Form>
      <div id='grille'>
      <Grid col={col2} row={row2} emplacement={emplacement} rotation={rotation}/>
     </div>
    </div>
  );
}

export default App;