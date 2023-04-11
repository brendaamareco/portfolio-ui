import { DateRange } from "./dateRange.interface";

export interface Education
{
    id?: number;
    institution: string;
    title: string;
    description: string;
    thumbnail: string;
    dateRange: DateRange
}