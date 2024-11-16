/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-10-20 11:29:39
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-11-16 12:22:10
 * @FilePath: \Front-end\Vue\Vue3\IM\socket_io\socket_io_server\src\db\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import mysql from "mysql";
import { dbConfig } from "../config/db.js";
import { createUsersTable, createAttendanceTable } from "./model/user.js";
// 创建数据库连接
const db = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.root, // 替换为你的 MySQL 用户名
  password: dbConfig.password, // 替换为你的 MySQL 密码
});

// 连接到 MySQL 服务器
db.connect((err) => {
  if (err) {
    console.error("连接到 MySQL 服务器失败:", err);
    return;
  }
  console.log("成功连接到 MySQL 服务器");

  // 初始化数据库和表
  initializeDatabase();
});
// 初始化数据库和表
function initializeDatabase() {
  const databaseName = dbConfig.scheam; // 替换为你想要创建的数据库名称

  // 创建数据库
  db.query(
    `CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`,
    (err, results) => {
      if (err) {
        console.error("创建数据库失败:", err);
        return;
      }
      console.log(`数据库 ${databaseName} 创建成功或已存在`);

      // 选择使用的数据库
      db.changeUser({ database: databaseName }, (err) => {
        if (err) {
          console.error("切换数据库失败:", err);
          return;
        }
        console.log(`成功切换到数据库 ${databaseName}`);
        function callback(err, message) {
          if (err) {
            console.error(err);
          }
          console.log(message);
        }
        // 创建表
        // 创建用户表
        createUsersTable(db, callback);
        createAttendanceTable(db, callback);
      });
    }
  );
}
export default db;
