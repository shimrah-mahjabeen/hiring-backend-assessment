import {
    BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity("TableNameForExampleEntity")
export class ExampleEntity extends BaseEntity {
  constructor(data: Pick<ExampleEntity, "exampleColumn">) {
    super();
    if (data && Object.keys(data)?.length) Object.assign(this, data);
  }

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  exampleColumn: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @DeleteDateColumn()
  deletedDate: Date;
}
