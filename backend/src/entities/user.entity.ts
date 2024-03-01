import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    DeleteDateColumn,
    OneToMany,
} from 'typeorm'
import { Schedule } from './schedule.entity';

@Entity('users')
class User {
    @PrimaryGeneratedColumn("increment")
    id: number;
  
    @Column()
    name: string;
  
    @Column({ unique: true })
    email: string;
  
    @Column()
    password: string;

    @Column()
    confirmPassword: string;
}

export { User }