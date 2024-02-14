import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Service } from "../Services/services";
import { Schedule } from "../Schedule/schedule";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;
  @OneToMany(() => Schedule, schedules => schedules.user)
  schedules: Schedule[];
}

export { User };
