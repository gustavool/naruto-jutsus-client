import { useRouter } from 'next/router';
import useGetJutsuById from '@/hooks/ReactQuery/useGetJutsuById';
import Jutsu from '@/templates/Jutsu';

export default function Index() {
  const { query } = useRouter();

  const { data, isLoading } = useGetJutsuById(String(query.id));

  return <Jutsu data={data} isLoading={isLoading} />;
}
