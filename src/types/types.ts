export type Character = {
    id: string;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string
    }
}

export type CharacterAPICall = {
    code: number,
    status: string,
    copyright: string,
    attributionText: string,
    attributionHTML: string,
    etag: string,
    data: {
        offset: number,
        limit: number,
        total: number,
        count: number,
        // results: Array<any>
    }
}

export type Comic = {
    id: number;
    title: string;
    description: string;
}


export type CharacterProps = {
    character: Character;
}