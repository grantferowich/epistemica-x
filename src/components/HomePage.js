import React from 'react';
import BasketForm from './BasketForm';
import FullTableContainer from '../containers/FullTableContainer';

export default function HomePage() {
  return (
    <div>
        <FullTableContainer/>
        <BasketForm/>
    </div>
  )
}
