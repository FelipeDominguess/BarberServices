import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "../User/users.entity";
import { Service } from "../Services/services";
import { Professional } from "../Professional/professional";

@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => User, user => user.schedules)
  user: User;

  @ManyToOne(() => Service, service => service.schedules)
  service: Service;

  @ManyToOne(() => Professional, professional => professional.schedules)
  professional: Professional;
}

export { Schedule };
