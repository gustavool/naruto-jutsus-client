import { useRouter } from 'next/router';
import BackToTop from '@/components/BackToTop';
import { JutsuProps } from '@/hooks/ReactQuery/types';
import Base from '../Base';
import EmptyImage from '@/public/assets/empty-image.jpeg';
import AccordionData from '@/components/AccordionData';
import Spinner from '@/components/Spinner';
import ArrowIcon from '@/public/assets/icons/arrow.svg';
import {
  dataDataMapper,
  dataDebutsMapper,
  dataNamesMapper,
  dataOthersMapper,
} from '@/utils/mappers';
import Button from '@/components/Button';
import * as S from './styles';
import JutsuImage from '@/components/JutsuImage';

type JutsuTemplateProps = {
  data: JutsuProps | undefined;
  isLoading: boolean;
};

const Jutsu = ({ data, isLoading }: JutsuTemplateProps) => {
  const { push } = useRouter();

  const imagesList =
    !!data?.images && data?.images.length > 0
      ? data.images
      : [
          {
            src: EmptyImage.src,
            alt: data?.names.englishName || `Empty jutsu image`,
          },
        ];

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
      <S.Container>
        <Button onClick={() => push(`/`)}>
          <S.BackButton>
            <ArrowIcon />
            Back
          </S.BackButton>
        </Button>
        {!!isLoading ? (
          <Spinner />
        ) : (
          <>
            <S.Content>
              <S.TitleH1>{data?.names.englishName}</S.TitleH1>
              <S.SideData>
                <JutsuImage images={imagesList} />

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
