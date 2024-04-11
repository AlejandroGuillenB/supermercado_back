import { ApiProperty } from '@nestjs/swagger';

export class LoginDTO {
  @ApiProperty()
    name: string;

  @ApiProperty()
    pass: string;

  constructor(name: string, pass: string) {
    this.name = name;
    this.pass = pass;
  }
}
