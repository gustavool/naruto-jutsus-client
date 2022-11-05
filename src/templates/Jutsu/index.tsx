import Image from 'next/image';
import { useRouter } from 'next/router';
import BackToTop from '@/components/BackToTop';
import { JutsuProps } from '@/hooks/ReactQuery/types';
import Base from '../Base';
import EmptyImage from '@/public/assets/empty-image.jpeg';
import AccordionData from '@/components/AccordionData';
import Spinner from '@/components/Spinner';
import {
  dataDataMapper,
  dataDebutsMapper,
  dataNamesMapper,
  dataOthersMapper,
} from '@/utils/mappers';
import * as S from './styles';

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

  const dataNames = !!data?.names ? dataNamesMapper({ names: data.names }) : [];
  const dataDebuts = !!data?.debut
    ? dataDebutsMapper({ debut: data.debut })
    : [];
  const dataData = !!data?.data ? dataDataMapper({ data: data.data }) : [];
  const dataOthers =
    !!data?.relatedJutsu ||
    !!data?.parentJutsu ||
    data?.derivedJutsu ||
    !!data?.users
      ? dataOthersMapper({
          relatedJutsu: data.relatedJutsu,
          parentJutsu: data.parentJutsu,
          derivedJutsu: data.derivedJutsu,
          users: data.users,
        })
      : [];

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
