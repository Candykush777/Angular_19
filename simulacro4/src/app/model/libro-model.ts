export interface Libro {
    data: Data;
}

export interface Data {
    id:         number;
    Year:       number;
    Title:      string;
    handle:     string;
    Publisher:  string;
    ISBN:       string;
    Pages:      number;
    Notes:      string[];
    created_at: Date;
    villains:   Villain[];
}

export interface Villain {
    name: string;
    url:  string;
}