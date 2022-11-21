import React, {useState, useEffect} from 'react'
import  '../App.css';

export default function Square(props : any) {
  const id : string = `row${props.row}col${props.col}`
  const [clean, setClean] = useState<Boolean>(false)

  //to clean the crumbs
  useEffect(() => {
     if (props.show) {
    setClean(true)
  }
  }, [props.show]);
 
  const styles = {
    transform : `rotate(${props.rotation}deg)`,
    backgroundColor : 'white'
  }
  if (props.show) {
    styles.backgroundColor = 'crimson'
  }
  
  return <div className="square" id={id} style={styles}>
    {props.show && <img alt='aspi' src='./aspi.png' className='image'/>}
    {!clean && <img alt='miettes' src='./miettes.png' className='image'/>}
    </div>
}