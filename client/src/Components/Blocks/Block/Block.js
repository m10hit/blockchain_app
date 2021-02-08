import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import classes from './Block.module.css';

const Block = (props) => {
  let blockIndex;
  if (props.index === 0) {
    blockIndex = 'Genesis Block';
  } else {
    blockIndex = 'Block #' + props.index;
  }
  // console.log(props.timestamp);
  return (
    <div className={classes.block}>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Data</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Data" value={props.data} onChange={props.changed} />
      </InputGroup>
      <p>Previous Hash {props.prevHash}</p>
      <p>Hash {props.hash}</p>
      <h2 className={classes.heading}>{blockIndex} </h2>
      <p className={classes.heading}>on {props.timestamp}</p>
      <p className={classes.nonce}>{props.nonce}</p>
    </div>
  );
};

export default Block;
