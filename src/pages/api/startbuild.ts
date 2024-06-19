import { PluginErrorType, createErrorResponse } from '@lobehub/chat-plugin-sdk';

import { buildResult} from '@/data-dev';
import { RequestData, ResponseData } from '@/type-dev';

export const config = {
  runtime: 'edge',
};

export default async (req: Request) => {
  if (req.method !== 'POST') return createErrorResponse(PluginErrorType.MethodNotAllowed);

  const {gttscope, baseline} = (await req.json()) as RequestData;

  const bresult = gttscope === 'fivegonly' ? 'ok' : 'fail';

  const finalresult: ResponseData = {
    baseline,
    result: baseline ? buildResult[bresult] : Object.values(buildResult).flat(),
    today: Date.now(),
  };

  return new Response(
    `the build ${finalresult.baseline} you want to start,result is ${finalresult.result.map((c) => c.name).join('、')}.`,
  );
};
