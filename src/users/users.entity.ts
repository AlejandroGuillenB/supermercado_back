import * as bcrypt from 'bcrypt';
import { EmpleadosEntity } from '../empleados/empleados.entity';
import { BeforeInsert, Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';

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
    password!: string;

  @Column()
  readonly rol: number;

  @Column({ unique: true })
  readonly empleadoid!: number;

  @OneToOne(() => EmpleadosEntity)
  @JoinColumn({ name: 'empleadoid' })
    empleado: EmpleadosEntity;

  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compareSync(password, this.password);
  }

  constructor(userId: number, name: string, rol: number, empleado: EmpleadosEntity) {
    this.userid = userId;
    this.username = name;
    this.rol = rol;
    this.empleado = empleado;
  }
}
