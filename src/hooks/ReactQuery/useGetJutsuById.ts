import api from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { JutsuProps } from './types';

export default function useGetJutsuById(id: string) {
  async function getJutsusById(idJutsu: string) {
    return await api
      .get<JutsuProps>(`/jutsu/id/${idJutsu}`)
      .then((response) => response.data);
  }

  return useQuery([`jutsu`, id], () => getJutsusById(id), {
    staleTime: 1000 * 60 * 10, //10 minutes
  });
}
