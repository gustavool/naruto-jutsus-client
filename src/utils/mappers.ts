import { JutsuProps } from '@/hooks/ReactQuery/types';

export function dataNamesMapper(data: Pick<JutsuProps, 'names'>) {
  if (Object.keys(data).length > 0) {
    return [
      { name: `English: `, description: data?.names?.englishName },
      { name: `Kanji: `, description: data?.names?.kanjiName },
      { name: `Romaji: `, description: data?.names?.romajiName },
      { name: `Literal English: `, description: data?.names?.literalEnglish },
      { name: `English Games: `, description: data?.names?.englishGames },
      { name: `Viz Print Media: `, description: data?.names?.vizPrintMedia },
      { name: `Alternatives: `, description: data?.names?.alternativeNames },
    ];
  }

  return [];
}

export function dataDebutsMapper({ debut }: Pick<JutsuProps, 'debut'>) {
  if (Object.keys(debut).length > 0) {
    return [
      { name: `Manga: `, description: debut?.manga },
      { name: `Anime: `, description: debut?.anime },
      { name: `Novel: `, description: debut?.novel },
      { name: `Movie: `, description: debut?.movie },
      { name: `Game: `, description: debut?.game },
      { name: `OVA: `, description: debut?.ova },
    ];
  }

  return [];
}

export function dataDataMapper({ data }: Pick<JutsuProps, 'data'>) {
  if (Object.keys(data).length > 0) {
    return [
      {
        name: `Classification: `,
        description: data?.classification.join(`, `),
      },
      {
        name: `Kekkei Genkai: `,
        description: data?.kekkeiGenkai.join(`, `),
      },
      { name: `Type: `, description: data?.type.join(`, `) },
      { name: `Class: `, description: data?.class.join(`, `) },
      { name: `Range: `, description: data?.range.join(`, `) },
      { name: `Rank: `, description: data?.rank },
      { name: `Hand Seals: `, description: data?.handSeals },
    ];
  }

  return [];
}

export function dataOthersMapper({
  relatedJutsu,
  parentJutsu,
  derivedJutsu,
  users,
}: Pick<
  JutsuProps,
  'relatedJutsu' | 'parentJutsu' | 'derivedJutsu' | 'users'
>) {
  if (!!relatedJutsu || !!parentJutsu || !!derivedJutsu || !!users) {
    return [
      {
        name: `Related jutsus: `,
        description: relatedJutsu.join(`, `),
      },
      {
        name: `Parent jutsus: `,
        description: parentJutsu.join(`, `),
      },
      { name: `Derived jutsus: `, description: derivedJutsu.join(`, `) },
      { name: `Users: `, description: users.join(`, `) },
    ];
  }

  return [];
}
