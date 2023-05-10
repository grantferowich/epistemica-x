import React from 'react';
import BasketForm from './BasketForm';
import CryptoStickyTableContainer from '../containers/CryptoStickyTableContainer';

export default function HomePage() {
  return (
    <div>
        <CryptoStickyTableContainer></CryptoStickyTableContainer>
        <BasketForm/>
    </div>
  )
}
