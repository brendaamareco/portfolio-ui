import { Owner } from "./owner.interface";

export interface Profile {
    id:          number;
    thumbnail:   string;
    welcomeText: string;
    description: string;
    role:        string;
    owner:       Owner;
}

