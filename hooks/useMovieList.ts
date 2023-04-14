import useSWR from 'swr';

import fetcher from '@/lib/fetcher';

const useMovieList = () => {
  const { data, error, isLoading } = useSWR('/api/movies', fetcher, {
    revalidateIfStale: false,
    revalidateOnPurpose: false,
    revalidateOnReconnect: false,
  });

  return {
    data,
    error,
    isLoading,
  }
}

export default useMovieList;