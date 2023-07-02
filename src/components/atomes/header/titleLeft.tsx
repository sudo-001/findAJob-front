import React from 'react'

type Props = {
    leftText: string,
    rightText: string,
}

function TitleLeft(props: Props) {
    const { leftText, rightText } = props;

  return (
    <div>
        <p className='text-lg md:text-3xl font-bold '>{leftText} <span className='text-[#0066FF]'>{rightText}</span></p>
    </div>
  )
}

export default TitleLeft