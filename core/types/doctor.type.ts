interface DoctorType {
  id: number,
  experience: string,
  user: {
    id: number,
    name: string,
    email: string,
    phone: string,
    tg_id: string,
    created_at: string,
  }
}

export type {
  DoctorType,
}