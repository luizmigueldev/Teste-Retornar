import React from 'react'
import { Button } from './styles'

export default function MyButton({ onClick, title, ...props }) {
  return (
    <Button {...props} onClick={onClick}>{title}</Button>
  );
}
