'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Header () {
  type Links = {
    title: string
    href: string
  }
  const links: Links[] = [
    {
      title: 'page1',
      href: '/page1'
    },
    {
      title: 'page2',
      href: '/page2'
    },
    {
      title: 'page3',
      href: '/page3'
    }
  ]
  const pathName: string = usePathname()
  return (
    <div className='absolute w-full backdrop-blur-sm bg-opacity-30 bg-slate-400 rounded-3xl'>
      <div className='flex justify-between container mx-auto p-8'>
        <Link className='text-3xl text-white' href={'/'}>
          Home
        </Link>
        <div className='flex gap-3'>
          {links.map((el, index) => (
            <Link
              className={pathName === el.href ? 'text-white' : ''}
              key={index}
              href={el.href}
            >
              {el.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
