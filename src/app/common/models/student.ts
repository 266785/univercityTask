export class Student {

  constructor(
    private _firstName?: string,
    private _lastName?: string,
    private _address?: string,
    private _gpa?: number,
    private _className?: string,
  ) {}

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get gpa(): number {
    return this._gpa;
  }

  set gpa(value: number) {
    this._gpa = value;
  }

  get className(): string {
    return this._className;
  }

  set className(value: string) {
    this._className = value;
  }

}
