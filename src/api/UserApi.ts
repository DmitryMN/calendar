import axios, {AxiosResponse} from "axios";
import { IUser } from "../models/IUser";

const instance = axios.create({
    baseURL: "./",
});

export const userApi = {
    getUsers: async () => {
        return instance.get<IUser[]>("users.json");
    }
}