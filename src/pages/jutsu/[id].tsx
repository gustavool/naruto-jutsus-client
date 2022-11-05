import useGetJutsuById from '@/hooks/ReactQuery/useGetJutsuById';
import Jutsu from '@/templates/Jutsu';
import { useRouter } from 'next/router';

export default function Index() {
  const { query } = useRouter();

  const { data, isLoading } = useGetJutsuById(String(query.id));

  return <Jutsu data={data} isLoading={isLoading} />;
}
