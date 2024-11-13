/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-10-20 16:59:10
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-02 12:09:06
 * @FilePath: \Front-end\Vue\Vue3\IM\socket_io\socket_io_server\src\utils\token\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-10-20 16:59:10
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-10-20 16:59:29
 * @FilePath: \Front-end\Vue\Vue3\IM\socket_io\socket_io_server\src\utils\token\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import jwt from "jsonwebtoken"; //验证token
import { secretKey } from "../../config/constraint.js";
class Token {
  constructor() {}
  createToken(params, expiresIn = "1h") {
    const tokenStr = jwt.sign(params, secretKey, {
      expiresIn: expiresIn,
    });
    return tokenStr;
  }
  createFreshToken(params, expiresIn = "2h") {
    const tokenStr = jwt.sign(params, secretKey, {
      expiresIn: expiresIn,
    });
    return tokenStr;
  }
  validate(token, callback) {
    jwt.verify(token, secretKey, (err, decode) => {
      //验证token
      if (err) {
        callback(false);
      } else {
        const { email, userId } = decode;
        callback &&
          callback(true, {
            email,
            userId,
          });
      }
    });
  }
}
export default new Token();
