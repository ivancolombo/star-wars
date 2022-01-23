export interface People {    
    url: string;
    name: string;
    birth_year: string;
    gender: string;
    eye_color: string;
    films: string[];
}

export interface PeopleRequest {
    count: number;
    results: People[];
}
