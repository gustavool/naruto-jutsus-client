export type AllJutsusProps = {
  total: number;
  page: number;
  pageSize: number;
  jutsus: JutsuProps[];
};

export type JutsuProps = {
  _id: string;
  names: {
    englishName: string;
    kanjiName: string;
    romajiName: string;
    literalEnglish: string;
    englishGames: string;
    vizPrintMedia: string;
    alternativeNames: string;
  };

  debut: {
    manga: string;
    anime: string;
    novel: string;
    movie: string;
    game: string;
    ova: string;
  };

  data: {
    classification: string[];
    kekkeiGenkai: string[];
    type: string[];
    class: string[];
    range: string[];
    rank: string;
    handSeals: string;
  };

  images: [
    {
      src: string;
      alt: string;
    },
  ];

  description: string;

  relatedJutsu: string[];

  parentJutsu: string[];

  derivedJutsu: string[];

  users: string[];
};
