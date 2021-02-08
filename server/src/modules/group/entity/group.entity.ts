import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { GroupMessage } from '../../message/entity/groupMessage.entity';
@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  groupName: string;

  @Column()
  groupManagerId: number;

  @Column({ default: '群主很懒,没写公告' })
  intro: string;

  @CreateDateColumn()
  createTime: number;

  @OneToMany(() => GroupMessage, msg => msg.group)
  groupMessage: GroupMessage[];
}
