export interface TareaIf {
  nombre: string
  isCompleted: boolean
}

export class TareaModel implements TareaIf {
  /*nombre: string
  constructor( nombre ) {
    this.nombre = nombre
  } */

  constructor(
    public nombre: string,
    public isCompleted: boolean
    ) {}
}

