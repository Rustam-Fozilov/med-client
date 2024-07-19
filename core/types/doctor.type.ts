interface DoctorType {
  id: number,
  experience: string,
  specialization: string,
  birth_year: number,
  user: {
    id: number,
    name: string,
    email: string,
    phone: string,
    tg_id: string,
    created_at: string,
  },
  image: string,
  work_start_time: string,
  work_end_time: string,
}

export type {
  DoctorType,
}