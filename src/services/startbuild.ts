import { RequestData } from '@/type-dev';

export const startBuild = async (params: RequestData) => {
  const res = await fetch('/api/startbuild', {
    body: JSON.stringify(params),
    method: 'POST',
  });

  return res.json();
};
