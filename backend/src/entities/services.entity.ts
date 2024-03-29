import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Schedule } from "./schedule.entity";


@Entity("services")
class Service {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  serviceName: string;

  @Column()
  price: number;

  @OneToMany(() => Schedule, schedules => schedules.service)
  schedules: Schedule[];
}

export { Service };
