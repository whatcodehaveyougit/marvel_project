type TCharacterStore = {
  data: null | TCharacter;
  isLoading: boolean;
  error: undefined | string;
};

type TCharactersStore = {
  data: null | TCharacter[];
  isLoading: boolean;
  error: undefined | string;
};

type TCharacterComicsStore = {
  data: null | TComic[];
  isLoading: boolean;
  error: undefined | string;
};

type TCharacter = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  resourceURI: string;
  comics: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  series: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      type: string;
    }[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  urls: {
    type: string;
    url: string;
  }[];
};

type TComic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: {
    type: string;
    language: string;
    text: string;
  }[];
  resourceURI: string;
  urls: {
    type: string;
    url: string;
  }[];
  series: {
    resourceURI: string;
    name: string;
  };
  variants: any[]; // You can define a type for this if needed
  collections: any[]; // You can define a type for this if needed
  collectedIssues: any[]; // You can define a type for this if needed
  dates: {
    type: string;
    date: string;
  }[];
  prices: {
    type: string;
    price: number;
  }[];
  thumbnail: {
    path: string;
    extension: string;
  };
  images: {
    path: string;
    extension: string;
  }[];
  creators: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      role: string;
    }[];
    returned: number;
  };
  characters: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
    }[];
    returned: number;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: {
      resourceURI: string;
      name: string;
      type: string;
    }[];
    returned: number;
  };
  events: {
    available: number;
    collectionURI: string;
    items: any[]; // You can define a type for this if needed
    returned: number;
  };
};

type TSetComicsAction = { type: string; payload: TComic[] };

type TSetIsLoadingAction = { type: string; payload: boolean };

type TSetErrorAction = { type: string; payload: string };

type TSetCharacterAction = { type: string; payload: TCharacter | null };

type TSetCharactersAction = { type: string; payload: TCharacter[] };

export type {
  TCharacter,
  TSetComicsAction,
  TSetIsLoadingAction,
  TSetErrorAction,
  TSetCharacterAction,
  TSetCharactersAction,
  TCharacterStore,
  TCharactersStore,
  TComic,
  TCharacterComicsStore,
};
