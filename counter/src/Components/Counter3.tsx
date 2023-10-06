import React,{ReactNode} from 'react'

type Children = {
  children : ReactNode
}
export default function Counter3({children} : Children) {
  return (
    <div>
      {children}
    </div>
  )
}
