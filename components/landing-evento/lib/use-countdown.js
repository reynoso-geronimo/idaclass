'use client'

import { useEffect, useState } from 'react'

/**
 * Cuenta regresiva hacia una fecha ISO (ej: "2026-07-17T18:00:00-03:00").
 * Devuelve `null` hasta que el componente montó en el cliente, para evitar
 * el desajuste de hidratación entre servidor y cliente.
 *
 * @param {string} targetISO
 * @returns {{days:number,hours:number,mins:number,secs:number,done:boolean}|null}
 */
export function useCountdown(targetISO) {
  const [parts, setParts] = useState(null)

  useEffect(() => {
    if (!targetISO) return
    const target = new Date(targetISO).getTime()
    if (Number.isNaN(target)) return

    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setParts({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        mins: Math.floor((diff / 60000) % 60),
        secs: Math.floor((diff / 1000) % 60),
        done: diff === 0,
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetISO])

  return parts
}

export const pad2 = (n) => String(n).padStart(2, '0')
