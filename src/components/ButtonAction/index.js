import React from 'react'
import { Button } from './styles'

export default function ButtonAction({ onClick, title, ...props }) {
  return (
    <Button {...props} onClick={onClick}>{title}</Button>
  );
}
