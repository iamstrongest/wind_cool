/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-10-20 11:27:51
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-13 09:26:21
 * @FilePath: \Front-end\Vue\Vue3\IM\socket_io\socket_io_server\src\config\constraint.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 约束
export const httpCode = {
  200: "获取请求成功",
  401: "身份认证过期，请重新登录",
  402: "未携带token,非法请求",
  403: "不存在该路由，你怕是请求了个寂寞",
  405: "线上环境禁止代理，只能进行原网站访问",
  406: "刷新token失效,请重新登陆",
  417: "账号已存在",
  418: "账号或密码错误",
  419: "用户不存在",
  420: "用户已经注册，请重新选择用户名",
  421: "你和他已经是好友关系，不能重复添加好友",
  422: "不能添加自己为好友",
  423: "添加的好友不存在，请确认查找的账号是否存在",
  424: "插入好友关系申请失败",
  425: "插入好友申请列表失败",
  426: "申请已提交过了，请处理新的好友页面有无通知",
  427: "当前用户已在别的地方进行了登录，请勿泄露个人信息",
  441: "缺少必要参数",
};
const data = {};
switch (process.env.NODE_ENV) {
  case "http_devlopment":
    data.httpPort = 3030;
    // 本地服务器服务器图片上传地址(预览)
    data.publicPath = "http://localhost:3030";
    data.message = `Express server running at http://127.0.0.1:3030`;
    data.hosts = [`127.0.0.1:3030`, `localhost:3030`];
    data.socketOrigin = "http://localhost:5175";
    break;
  case "https_devlopment":
    data.httpPort = 3030;
    // 本地服务器服务器图片上传地址(预览)
    data.publicPath = "https://localhost:3030";
    data.message = `Express server running at https://127.0.0.1:3030`;
    data.hosts = [`127.0.0.1:3030`, `localhost:3030`];
    data.socketOrigin = "https://localhost:5175";
    break;
  case "http_preview":
    data.httpPort = 3033;
    // 本地服务器服务器图片上传地址(预览)
    data.publicPath = "http://localhost:3033";
    data.message = `Express server running at http://127.0.0.1:3033`;
    data.hosts = [`127.0.0.1:3033`, `localhost:3033`];
    data.socketOrigin = "http://localhost:3033";
    break;
  case "https_preview":
    data.httpPort = 3033;
    // 本地服务器服务器图片上传地址(预览)
    data.publicPath = "https://localhost:3033";
    data.message = `Express server running at https://127.0.0.1:3033`;
    data.hosts = [`127.0.0.1:3033`, `localhost:3033`];
    data.socketOrigin = "https://localhost:3033";
    break;
  case "http_production":
    data.httpPort = 3333;
    // 远程服务器服务器图片上传地址(没有ssl证书或者域名的情况)
    data.publicPath = "http://121.43.11.11:3333";
    data.message = `Express server running at http://121.43.11.11:3333/page`;
    data.hosts = [`121.43.11.11:3333`, `http://wiiind-cool123.top:3333`];
    break;
  case "https_production":
    data.httpPort = 443;
    data.publicPath = "https://wind1u-cooly.top";
    data.message = `Express server running at https://wind-coqewol.top`;
    data.hosts = [`121.43.11.11:443`, `https://wiqand-coolqsa.top`];
    break;
}
export const serverConfig = data;
export const secretKey = "strongest ^0^";
