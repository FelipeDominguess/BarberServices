import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Schedule } from "../Schedule/schedule";


@Entity("professionals")
class Professional {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

  // Relacionamento One-to-Many com Agendamento
  @OneToMany(() => Schedule, Schedule => Schedule.professional)
  schedules: Schedule[];
}

export { Professional };
