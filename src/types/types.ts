type TCharacterStore = {
  comics: TCharacter[];
  data: null | TCharacter;
  isLoading: boolean;
  error: null | string;
};

type TCharactersStore = {
  data: null | TCharacter[];
  isLoading: boolean;
  error: null | string;
};

type TStore = {
  characters: TCharactersStore;
  character: TCharacterStore;
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

export type { TCharacter, TCharacterStore, TCharactersStore, TStore };
