export function apiResponse<T>(params: {
  success: boolean;
  message: string;
  data?: T;
  meta?: unknown;
  error?: unknown;
  status?: number;
}) {
  return Response.json({
    success: params.success,
    message: params.message,
    data: params.data || null,
    meta: params.meta || null,
    error: params.error || null,
  }, { status: params.status || 200 });
}
