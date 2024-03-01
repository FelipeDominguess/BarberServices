import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Professional } from "./professional.entity";
import { Service } from "./services.entity";
import { User } from "./user.entity";



@Entity("schedules")
class Schedule {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => User, (user: { schedules: any; }) => user.schedules)
  user: User;

  @ManyToOne(() => Service, (service: { schedules: any; }) => service.schedules)
  service: Service;

  @ManyToOne(() => Professional, (professional: { schedules: any; }) => professional.schedules)
  professional: Professional;
}

export { Schedule };
