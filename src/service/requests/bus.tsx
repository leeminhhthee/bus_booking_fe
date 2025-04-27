import apiClient from '../apiClient'

export const fetchBuses = async (from: string, to: string, date: string) => {
  const { data } = await apiClient.post('/bus/search', { from, to, date })
  return data?.data || []
}

// export const fetchBusDetails = async (busId: string) => {
//   try {
//     const { data } = await apiClient.get(`/bus/${busId}`)
//     return data?.data || []
//   } catch (error: any) {
//     if (error.response?.status) {
//       return []
//     }
//     throw error
//   }
// }

export const fetchBusDetails = async (busId: string) => {
  const { data } = await apiClient.get(`/bus/${busId}`)

  return data?.data || []
}

// export const fetchUserTickets = async () => {
//   const { data } = await apiClient.get('/ticket/my-tickets')
//   return data.tickets
// }

export const fetchUserTickets = async () => {
  try {
    const { data } = await apiClient.get('/ticket/my-tickets')
    return data.tickets
  } catch (error: any) {
    if (error.response?.status === 404) {
      // coi như không có vé
      return []
    }
    // lỗi thật sự, để React Query xử lý
    throw error
  }
}


export const bookTicket = async ({
  busId,
  date,
  seatNumbers,
}: {
  busId: string,
  date: string,
  seatNumbers: number[]
}) => {
  const { data } = await apiClient.post('/ticket/book', {
    busId,
    date,
    seatNumbers,
  })
  return data?.ticket
}
