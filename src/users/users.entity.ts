import * as bcrypt from 'bcrypt';
import { BeforeInsert, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class UsersEntity {
  @PrimaryColumn()
  readonly userid: number;

  @Column({
    unique: true,
  })
  readonly username: string;

  @Column({
    type: 'varchar', length: 70, nullable: true
  })
    password: string;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compareSync(password, this.password);
  }

  constructor(userId: number, name: string, pass: string) {
    this.userid = userId;
    this.username = name;
    this.password = pass;
  }
}
