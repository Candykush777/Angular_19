export class Coche {
  constructor(
    public marca: string = '',
    public modelo: string = '',
    public cv: number = 0,
    public cc: number = 0,
    public tipoMotor: string = '',
    public matricula: string = '',
    public precio: number = 0,
    public imagen: string = ''
  ) {}
}
