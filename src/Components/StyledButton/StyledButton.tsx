import { FC, MouseEvent } from 'react'

interface StyledButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  text: string;
}

const StyledButton: FC<StyledButtonProps> = ({ onClick = () => {}, disabled = false, text }) => {
  return (
    <button
      className='text-center w-full p-3 bg-blue-500 rounded-md text-white disabled:bg-blue-300 disabled:text-black'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default StyledButton
