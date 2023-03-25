export interface Profile {
    id:          number;
    thumbnail:   string;
    welcomeText: string;
    description: string;
    role:        string;
    owner:       Owner;
}

export interface Owner {
    id:       number;
    name:     string;
    lastName: string;
    country:  string;
    province: string;
}
