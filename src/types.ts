export interface ClassDiscussion {
    id: number;
    name: string;
    date: Date;

    comments: Comment[];
}

export interface Comment {
    id: number;
    name: string;
    content: string;
    date: Date;

    replies: Reply[];
}

export interface Reply {
    id: number;
    name: string;
    content: string;
    date: Date;
}


