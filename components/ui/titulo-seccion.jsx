import { cn } from '@/lib/utils'
import React from 'react'

const TituloSeccion = ({className, ...props}) => {
  return (
    <h2 className={cn("text-3xl text-center font-extrabold w-full max-w-7xl my-6 mx-auto text-idaclass tracking-tight px-2", className )}
      {...props} />
  )
}

export default TituloSeccion