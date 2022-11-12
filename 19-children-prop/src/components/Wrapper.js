import React from 'react';

function Wrapper(props) {
  console.log(props);
  const style = {
    backgroundColor: props.backgroundcolor,
    width: props.width,
    padding: '20px',
    margin: '20px auto',
    color: props.color,
  };

  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
