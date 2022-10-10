export type AllJutsusProps = {
  total: number;
  page: number;
  pageSize: number;
  jutsus: JutsuProps[];
};

export type JutsuProps = {
  names: {
    englishName: string;
  };

  _id: string;
  images: [
    {
      src: string;
      alt: string;
    },
  ];
};
