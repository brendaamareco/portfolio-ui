import { DateRange } from "./dateRange.interface";

export interface Experience {
    id?:         number;
    title:       string;
    description: string;
    thumbnail:   string;
    dateRange:   DateRange;
    companyName: string;
}
