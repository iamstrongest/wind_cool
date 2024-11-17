/*
 * @Author: strongest-qiang 1309148358@qq.com
 * @Date: 2024-10-20 11:35:24
 * @LastEditors: strongest-qiang 1309148358@qq.com
 * @LastEditTime: 2024-10-25 15:05:48
 * @FilePath: \Front-end\Vue\Vue3\IM\socket_io\socket_io_server\src\db\model\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 创建表的 SQL 语句
const createUsersTableSql = `
CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '自增的主键',
    userId VARCHAR(255) NOT NULL COMMENT '用户账号',
    username VARCHAR(255) NOT NULL COMMENT '用户名',
    password VARCHAR(255) NOT NULL COMMENT '密码',
    avatar VARCHAR(255) COMMENT '头像 URL',
    email VARCHAR(255) NOT NULL UNIQUE COMMENT '电子邮件，唯一',
    uuid VARCHAR(255) DEFAULT 'ekskjdomsidc',
    theme VARCHAR(255) DEFAULT 'light',
    description VARCHAR(255) DEFAULT '该用户很懒，什么都没有留下' COMMENT '用户介绍',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间，默认当前时间',
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间，默认当前时间，更新时自动更新时间'
);
`;
// 创建考勤表的 SQL 语句
const createAttendanceTableSql = `
CREATE TABLE attendance (
    id INT AUTO_INCREMENT PRIMARY KEY COMMENT '自增的主键',
    userId VARCHAR(255) NOT NULL COMMENT '用户账号',
    description VARCHAR(255) DEFAULT '打卡成功' COMMENT '用户打卡说明',
    date VARCHAR(255) NOT NULL COMMENT '打卡日期',
    attendance_year_month VARCHAR(255) NOT NULL COMMENT '用户打卡年限和月份',
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间，默认当前时间',
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间，默认当前时间，更新时自动更新时间'
);
`;
// 创建用户表
export function createUsersTable(db, callback) {
  db.query(createUsersTableSql, (err, results) => {
    if (err) {
      return callback("创建 user 表失败:" + err);
    }
    callback(null, "user 表创建成功或已存在");
  });
}
// 创建考勤表
export function createAttendanceTable(db, callback) {
  db.query(createAttendanceTableSql, (err, results) => {
    if (err) {
      return callback("创建 attendance 表失败:" + err);
    }
    callback(null, "attendance 表创建成功或已存在");
  });
}
