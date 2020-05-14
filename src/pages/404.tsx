import React from 'react';

export default function() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: 782, textAlign: 'center' }}>
        <img
          alt=""
          src={require('../assets/pic_404.png')}
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}
