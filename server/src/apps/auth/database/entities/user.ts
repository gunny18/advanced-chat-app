import { Column, Entity } from "typeorm";
import CommonEntity from "./commonEntity";
import { GenderType } from "../../types";

@Entity({ name: "users" })
class User extends CommonEntity {
  @Column()
  fullName: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ type: "enum", enum: GenderType })
  gender: GenderType;

  @Column({ nullable: true })
  profilePic: string;
}

export default User;
