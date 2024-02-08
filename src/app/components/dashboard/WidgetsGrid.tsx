
"use client";

import React from 'react'
import { SimpleWidget } from './SimpleWidget'
import { useAppSelector } from '@/store'
import counterSlice from '../../../store/counter/counterSlice';
import { IoCartOutline } from 'react-icons/io5';

export const WidgetsGrid = () => {
    const isCart = useAppSelector(state => state.counter.count)
  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
        <SimpleWidget title={`${isCart}`} href="/dashboard/counter" subTitle='Productos agregados' label='Contador' icon={<IoCartOutline size={70} className='text-blue-600' />}/>
        <SimpleWidget title={`${isCart}`} href="/dashboard/counter" subTitle='Productos agregados' label='Contador' icon={<IoCartOutline size={70} className='text-blue-600' />}/>
      </div>
  )
}
