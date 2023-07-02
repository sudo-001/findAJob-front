import { Icons } from '@/utils/assets/Icons'
import Image from 'next/image'
import React from 'react'

type Props = {
    width: number,
    height: number,
}

function ArrowRight(props: Props) {
    const { width, height } = props;
    
  return (
    <>
        <Image src={Icons.arrowRight.src} alt={Icons.arrowRight.src} width={width} height={height} />
    </>
  )
}

export default ArrowRight