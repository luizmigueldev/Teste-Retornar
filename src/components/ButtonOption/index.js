import React from 'react'
import { Button } from './styles'

export default function ButtonOption({ onClick, title, ...props }) {
  return (
    <Button {...props} onClick={onClick}>{title}</Button>
  );
}
