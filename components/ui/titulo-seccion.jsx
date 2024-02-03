import { cn } from '@/lib/utils'
import React from 'react'

const TituloSeccion = ({className, ...props}) => {
  return (
    <h2 className={cn("text-3xl text-center font-extrabold w-full max-w-7xl mt-16 mb-4 mx-auto text-idaclass tracking-tight", className )}
      {...props} />
  )
}

export default TituloSeccion