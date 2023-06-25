/* 
High level overview of this file: HomePage.js
Date: June 25, 2023
HomePage.js is the container file housing the component which is rendered
when users click "Epistemica-X" in the navigation bar.

*/
import React from 'react';
// import BasketForm from './BasketForm';
import FullTableContainer from '../containers/FullTableContainer';

export default function HomePage() {
  return (
    <div>
        <FullTableContainer/>
    </div>
  )
}
