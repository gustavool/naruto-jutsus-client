import BackToTop from '@/components/BackToTop';
import { JutsuProps } from '@/hooks/ReactQuery/types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Base from '../Base';
import EmptyImage from '@/public/assets/empty-image.jpeg';
import AccordionData from '@/components/AccordionData';
import * as S from './styles';
import Spinner from '@/components/Spinner';

type JutsuTemplateProps = {
  data: JutsuProps | undefined;
  isLoading: boolean;
};

const Jutsu = ({ data, isLoading }: JutsuTemplateProps) => {
  const { push } = useRouter();

  const imageJutsuSrc = !!data?.images[0]
    ? data?.images[0].src
    : EmptyImage.src;
  const imageJutsuAlt = !!data?.images[0]
    ? data?.images[0].alt
    : data?.names.englishName;

  const dataNames = [
    { name: `English: `, description: data?.names.englishName },
    { name: `Kanji: `, description: data?.names.kanjiName },
    { name: `Romaji: `, description: data?.names.romajiName },
    { name: `Literal English: `, description: data?.names.literalEnglish },
    { name: `English Games: `, description: data?.names.englishGames },
    { name: `Viz Print Media: `, description: data?.names.vizPrintMedia },
    { name: `Alternatives: `, description: data?.names.alternativeNames },
  ];

  const dataDebuts = [
    { name: `Manga: `, description: data?.debut.manga },
    { name: `Anime: `, description: data?.debut.anime },
    { name: `Novel: `, description: data?.debut.novel },
    { name: `Movie: `, description: data?.debut.movie },
    { name: `Game: `, description: data?.debut.game },
    { name: `OVA: `, description: data?.debut.ova },
  ];

  const dataData = [
    {
      name: `Classification: `,
      description: data?.data.classification.join(`, `),
    },
    {
      name: `Kekkei Genkai: `,
      description: data?.data.kekkeiGenkai.join(`, `),
    },
    { name: `Type: `, description: data?.data.type.join(`, `) },
    { name: `Class: `, description: data?.data.class.join(`, `) },
    { name: `Range: `, description: data?.data.range.join(`, `) },
    { name: `Rank: `, description: data?.data.rank },
    { name: `Hand Seals: `, description: data?.data.handSeals },
  ];

  const dataOthers = [
    {
      name: `Related jutsus: `,
      description: data?.relatedJutsu.join(`, `),
    },
    {
      name: `Parent jutsus: `,
      description: data?.parentJutsu.join(`, `),
    },
    { name: `Derived jutsus: `, description: data?.derivedJutsu.join(`, `) },
    { name: `Users: `, description: data?.users.join(`, `) },
  ];

  return (
    <Base>
      <button onClick={() => push(`/`)}>Voltar</button>
      <S.Container>
        {!!isLoading ? (
          <Spinner />
        ) : (
          <>
            <S.Content>
              <S.TitleH1>{data?.names.englishName}</S.TitleH1>
              <S.SideData>
                <S.BoxImage>
                  <Image
                    src={imageJutsuSrc}
                    alt={imageJutsuAlt}
                    width="430px"
                    height="313px"
                    layout="responsive"
                  />
                </S.BoxImage>
                <S.Data>
                  <h2>Description</h2>
                  <S.DataContent>
                    <p>{data?.description}</p>
                  </S.DataContent>
                </S.Data>
              </S.SideData>

              <AccordionData title="Names" data={dataNames} />
              <AccordionData title="Debuts" data={dataDebuts} />
              <AccordionData title="Data" data={dataData} />
              <AccordionData title="Others" data={dataOthers} />
            </S.Content>
            <BackToTop />
          </>
        )}
      </S.Container>
    </Base>
  );
};

export default Jutsu;
