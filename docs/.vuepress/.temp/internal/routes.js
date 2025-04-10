export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/Users/zhaoxinhao/goProject/zeroai/FAQ/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"常见问题解答"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/Users/zhaoxinhao/goProject/zeroai/FAQ/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
