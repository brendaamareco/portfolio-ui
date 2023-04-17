export interface Language
{
    id?: number;
    name: string;
    level: LanguageLevel;
}

export enum LanguageLevel{ A1, A2, B1, B2, C1, C2}