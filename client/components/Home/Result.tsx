import React from 'react';
import CardView, { contentsInterface } from './CardView';
import useSWR from 'swr';
import { client } from '../../lib/client';

function Result() {
  return (
    <div>
      <CardView />
    </div>
  );
}

export default Result;
