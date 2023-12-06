import {DataSource} from "typeorm";
import {Task} from "../domain/task/Task";
import {User} from "../domain/user/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "christopher",
    password: "12345",
    database: "tasks",
    synchronize: true,
    subscribers: [],
    entities: [Task, User]
})