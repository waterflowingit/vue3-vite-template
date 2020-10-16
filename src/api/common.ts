import request from "/@/utils/request";

export function version(params?:any) {
  return request({
    url: `/version`,
    method: "get",
    params
  });
}
