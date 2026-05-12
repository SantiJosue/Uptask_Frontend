export function formatDate(dateString: string) : string {
    const date = new Date(dateString)
    const formatter = new Intl.DateTimeFormat("es-ES", {
        dateStyle: "full"
    })
    return formatter.format(date)
}

export function formatTimeAgo(dateString: string) {
  const now = Date.now()
  const date = new Date(dateString).getTime()
  
  const seconds = Math.floor((now - date) / 1000)

  if (seconds < 60) return "ahora"

  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `hace ${minutes} minutos`

  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `hace ${hours} horas`

  const days = Math.floor(hours / 24)
  if (days < 7) return `hace ${days} dias`

  const weeks = Math.floor(days / 7)
  if (weeks < 4) return `hace ${weeks} semanas`

  const months = Math.floor(days / 30)
  if (months < 12) return `hace ${months} meses`

  const years = Math.floor(days / 365)
  return `hace ${years} años`
}