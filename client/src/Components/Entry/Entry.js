import React from 'react';
import classes from './Entry.module.css';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from 'reactstrap';

const Entry = (props) => {
  return (
    <div className={classes.block}>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Data</InputGroupText>
        </InputGroupAddon>
        <Input
          placeholder="Data"
          onChange={props.changed}
          value={props.inValue}
        />
      </InputGroup>
      <Button outline color="primary" onClick={props.add}>
        Add new Block
      </Button>{' '}
    </div>
  );
};

export default Entry;
