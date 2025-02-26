import React from 'react'
type Props = {
  text: string
}
export default function Content ({ text }: Props) {
  return <div className='flex justify-center text-4xl w-screen'>{text}</div>
}
