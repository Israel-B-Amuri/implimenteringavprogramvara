import React , {ReactNode} from 'react'

type Children ={
  children:ReactNode
}
export default function Counter1({children} : Children) {
  return (
    <div>
      {children}
    </div>
  )
}
 