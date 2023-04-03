import { Owner } from "./owner.interface";

export interface Project {
    id?:         number;
    title:       string;
    description: string;
    thumbnail:   string;
    owner:       Owner;
}
