import React from 'react';
import Block from './Block/Block';

const Blocks = (props) => {
  return props.blocks.map((block, index) => (
    <Block
      key={index}
      index={index}
      prevHash={block.previousHash}
      hash={block.hash}
      timestamp={block.timestamp}
      data={block.data}
      nonce={block.nonce}
      changed={props.blockChange}
    />
  ));
};

export default Blocks;
