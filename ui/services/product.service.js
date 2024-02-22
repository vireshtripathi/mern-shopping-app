import { GET_PRODUCT, GET_PRODUCTS } from "@/services/url.service";
import * as HttpService from "@/services/http.service";

export const getProduct = (slug) =>
  HttpService.getWithoutAuth(GET_PRODUCT(slug));

export const getProducts = (skip = 0, limit = 10) =>
  HttpService.getWithoutAuth(GET_PRODUCTS(skip, limit));
