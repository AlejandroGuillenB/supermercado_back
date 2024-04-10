import { ApiProperty } from '@nestjs/swagger';

export class UsersDTO {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly username: string;

  @ApiProperty()
  readonly password: string;

  constructor(id: number, name: string, pass: string) {
    this.id = id;
    this.username = name;
    this.password = pass;
  }
}
