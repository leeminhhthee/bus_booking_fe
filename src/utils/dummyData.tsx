/* eslint-disable quotes */
type Bus = {
  busId: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  availableSeats: number;
  price: number;
  originalPrice: number;
  company: string;
  busType: string;
  rating: number;
  totalReviews: number;
  badges: string[];
};

interface seat_id {
  seat_id: number;
  booked: boolean;
  type: 'window' | 'side' | 'path';
}

interface Seats {
  rowId: number;
  seats: seat_id[];
}

export const busBookings = [
  {
    id: '1',
    from: 'Hà Nội',
    to: 'TP. Hồ Chí Minh',
    date: '09/02/2025, 16:00',
    type: 'Bus - Phương Trang',
    status: 'Cancelled',
    passengers: 3,
  },
  {
    id: '2',
    from: 'TP. Hồ Chí Minh',
    to: 'Hà Nội',
    date: '08/02/2025, 20:30',
    type: 'Bus - Mai Linh Express',
    status: 'Cancelled',
    passengers: 3,
  },
  {
    id: '3',
    from: 'Huế',
    to: 'Đà Nẵng',
    date: '15/04/2025, 10:00',
    type: 'Bus - Xe Nhà',
    status: 'Upcoming',
    passengers: 2,
  },
  {
    id: '4',
    from: 'Hải Phòng',
    to: 'Quảng Ninh',
    date: '05/03/2025, 12:30',
    type: 'Bus - Thành Bưởi',
    status: 'Completed',
    passengers: 1,
  },
];

export const tabs = ['All', 'Upcoming', 'Completed', 'Cancelled'];

export const busInfo = {
  busId: 'bus_001',
  departureTime: '20:00',
  arrivalTime: '05:30',
  duration: '9h 30m',
  availableSeats: 6,
  price: 949000,
  originalPrice: 999000,
  company: 'Phương Trang',
  busType: 'Bus - Giường nằm A/C (2+1)',
  rating: 4.6,
  totalReviews: 846,
  badges: ['Highly rated by women', 'New Bus'],
};

export const locations = [
  "Hà Nội",
  "Huế",
  "Lai Châu",
  "Điện Biên",
  "Sơn La",
  "Cao Bằng",
  "Lạng Sơn",
  "Quảng Ninh",
  "Thanh Hóa",
  "Nghệ An",
  "Hà Tĩnh",
  "Tuyên Quang",
  "Lào Cai",
  "Thái Nguyên",
  "Phú Thọ",
  "Bắc Ninh",
  "Hưng Yên",
  "Hải Phòng",
  "Ninh Bình",
  "Quảng Trị",
  "Đà Nẵng",
  "Quảng Ngãi",
  "Gia Lai",
  "Khánh Hòa",
  "Lâm Đồng",
  "Đắk Lắk",
  "TP. Hồ Chí Minh",
  "Đồng Nai",
  "Tây Ninh",
  "Cần Thơ",
  "Vĩnh Long",
  "Đồng Tháp",
  "Cà Mau",
  "An Giang",
];
export const buses: Bus[] = [
  {
    busId: 'bus_001',
    departureTime: '20:00',
    arrivalTime: '05:30',
    duration: '9h 30m',
    availableSeats: 6,
    price: 949000,
    originalPrice: 999000,
    company: 'Phương Trang',
    busType: 'Bus - Giường nằm A/C (2+1)',
    rating: 4.6,
    totalReviews: 846,
    badges: ['Highly rated by women', 'New Bus'],
  },
  {
    busId: 'bus_002',
    departureTime: '21:30',
    arrivalTime: '06:45',
    duration: '9h 15m',
    availableSeats: 11,
    price: 949000,
    originalPrice: 999000,
    company: 'Phương Trang',
    busType: 'Bus - Giường nằm A/C (2+1)',
    rating: 4.6,
    totalReviews: 682,
    badges: ['Highly rated by women', '4 Women Traveling'],
  },
];

export const seats: Seats[] = [
  {
    rowId: 1,
    seats: [
      {
        seat_id: 1,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 2,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 3,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 4,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 2,
    seats: [
      {
        seat_id: 5,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 6,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 7,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 8,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 3,
    seats: [
      {
        seat_id: 9,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 10,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 11,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 12,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 4,
    seats: [
      {
        seat_id: 13,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 14,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 15,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 16,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 5,
    seats: [
      {
        seat_id: 17,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 18,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 19,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 20,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 6,
    seats: [
      {
        seat_id: 21,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 22,
        type: 'path',
        booked: false,
      },
      {
        seat_id: 23,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 24,
        type: 'side',
        booked: false,
      },
    ],
  },
  {
    rowId: 7,
    seats: [
      {
        seat_id: 25,
        type: 'window',
        booked: false,
      },
      {
        seat_id: 26,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 27,
        type: 'side',
        booked: false,
      },
      {
        seat_id: 28,
        type: 'side',
        booked: false,
      },
    ],
  },
];
