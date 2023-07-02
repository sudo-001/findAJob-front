import React from 'react'

type Props = {
    text: string,
}

function SignInBtn(props: Props) {
    const { text } = props
  return (
    <div className={`text-[#0066FF] hover:cursor-pointer font-bold`}>
        {text}
    </div>
  )
}

export default SignInBtn