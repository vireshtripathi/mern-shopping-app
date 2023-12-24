import * as HttpService from "@/services/http.service";
import { ADD_TO_CART, VIEW_CART_ITEM } from "@/services/url.service";

// export const addItemToCart = (id) => {
//   const cookies = new Cookies(null, { path: "/" });
//   cookies.set("myCat", {
//     id: id,
//     user_id: 1,
//   });
//   console.log(cookies.get("myCat"));
//   return true;
// };

export const addItemToCart = (cardId, body) =>
  HttpService.postWithoutAuth(ADD_TO_CART, body);

export const viewCartItem = () => HttpService.getWithoutAuth(VIEW_CART_ITEM);
