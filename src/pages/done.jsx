import BlockTitle from '@/components/UI/BlockTitle/BlockTitle';
import Gallery from '@/components/UI/Gallery/Gallery';
import React from 'react';

const Done = () => {
  return (
    <div>
      <div style={{ maxWidth: '80%', margin: '0 auto', padding: '40px 0' }}>
        <BlockTitle title="ВЫПОЛНЕННЫЕ РАБОТЫ" />
        <Gallery />
      </div>
    </div>
  );
};

export default Done;
