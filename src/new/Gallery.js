import React, {useState} from 'react';
import { Contextstore } from "../App"

export default function Gallery() {
  const { state : {cart} } = Contextstore();
  return (
    <div>
      <h2>Cart</h2>
      <h3>{cart}</h3>
    </div>
  )}