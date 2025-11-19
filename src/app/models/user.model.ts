export class User {
  id? : number
  created_at?: string 
  updated_at? : string 
  nombre? : string 
  email? : string 
  telefono? : string 
  password? : string
  rol? : string | null
}
export const HeadersUsers : string[] = [
  "ID",
  'Nombre',
  'Email',
  'Telefono',
  'Rol',
  "Creado en ",
  "Ultima actualizacion",
]
