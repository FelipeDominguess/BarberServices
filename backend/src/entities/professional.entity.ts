import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";



@Entity("professionals")
class Professional {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  name: string;

}

export { Professional };
