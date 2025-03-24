import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

class CommonEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn({ type: "time without time zone" })
  createdAt: Date;

  @UpdateDateColumn({ type: "time without time zone" })
  updatedAt: Date;
}

export default CommonEntity;
