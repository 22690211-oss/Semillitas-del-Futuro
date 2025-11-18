export class User {
  id? : number
  created_at?: string
  updated_at? : string
  nombre? : string
  email? : string
  telefono? : string
  password? : string
  rol? : string
}


export const HeadersUsers : string[] = [
  "ID",
  "Creado en ",
  "Ultima actualizacion",
  'Nombre',
  'Email',
  'Telefono',
  'Rol'
]
