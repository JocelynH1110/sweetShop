// 如果是在部署的時候，所有路徑都必須加 Github Pages 的前綴
export const baseURL =
  process.env.NODE_ENV === "production" ? "/sweetShop" : "";
