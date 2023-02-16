export interface Card {
    title: string;
    id: number;
    date: string ;
    image: string;
    description: string;
}

export interface Cards {
    allCards : Card[] | null;
}
