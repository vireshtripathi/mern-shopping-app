import { API_URL } from "./connections.service";

const GetParamsValue = (value) => {
  if (value) {
    return value;
  }
  return "";
};

export const getApiUrl = (path, params = {}) => {
  let APIEndPoint = `${API_URL}${path}`;
  if (params) {
    Object.keys(params).forEach(
      // eslint-disable-next-line no-return-assign
      (key) =>
        (APIEndPoint = APIEndPoint.replace(
          `:${key}`,
          GetParamsValue(params[key])
        ))
    );
  }
  console.log("APIEndPoint", APIEndPoint);
  return APIEndPoint;
};

export const GET_PRODUCT = (slug) => getApiUrl("/products/:slug", { slug });

export const GET_PRODUCTS = (skip, limit) =>
  getApiUrl("/products?skip=:skip&limit=:limit", {
    skip,
    limit,
  });
