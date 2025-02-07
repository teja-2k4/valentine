// src/Heart.js
import React from 'react';
import { useSpring, animated } from 'react-spring';

const Heart = () => {
  const props = useSpring({
    to: { transform: 'scale(1.2)' },
    from: { transform: 'scale(1)' },
    config: { duration: 500 },
    loop: { reverse: true },
  });

  return (
    <animated.div style={{ ...props, display: 'inline-block' }}>
      <span role="img" aria-label="heart" style={{ fontSize: '50px' }}>
        ❤️
      </span>
    </animated.div>
  );
};

export default Heart;