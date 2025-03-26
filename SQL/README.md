# 数据库MySQL学习
[DataWhale教程 wonderful-sql](https://github.com/datawhalechina/wonderful-sql)
[廖雪峰的教程](https://liaoxuefeng.com/books/sql/introduction/index.html)
## 0.安装
port设置为3306
密码设置为123456

## 1.数据库及其基本操作
基本操作
```sql
-- 连接到数据库, 其中 `root` 为用户名.
mysql -u root -p;

-- 查询所有数据库
show databases;

-- 选择数据库
use shop;

-- 查询数据库中的所有表
show tables;
```

创建表，括号中为（< 列名 > < 数据类型 > < 该列所需约束 > < 默认设置 >），`PRIMARY KEY (product_id)` 为整个表的约束，意思是主键约束，代表该列是唯一值，可以通过该列取出特定的行的数据。
```sql
-- 基本语法
CREATE TABLE < 表名 >
( < 列名 1> < 数据类型 > < 该列所需约束 > < 默认设置 > ,
  < 列名 2> < 数据类型 > < 该列所需约束 > < 默认设置 > ,
  < 列名 3> < 数据类型 > < 该列所需约束 > < 默认设置 > ,
  < 列名 4> < 数据类型 > < 该列所需约束 > < 默认设置 > ,
  .
  .
  .
  < 该表的约束 1> , < 该表的约束 2> ,……);

-- 创建表
CREATE TABLE product
(product_id CHAR(4) NOT NULL,  
 product_name VARCHAR(100) NOT NULL,
 product_type VARCHAR(32) NOT NULL DEFAULT "水果", 
 sale_price INTEGER ,
 purchase_price INTEGER ,
 regist_date DATE ,
 PRIMARY KEY (product_id));

-- 添加列
alter table product add column product_name_pinyin varchar(100);
```

删除
```sql
-- 删除表
drop tabel <表名>;

-- 删除列
alter table product drop column product_name_pinyin;

-- 删除表中特定的行
delete from product where column_name='';

--清空表的内容，这种方法删除的速度更快
truncate table <列名>
```

数据的更新
```sql
-- 基本语法
UPDATE <表名>
   SET <列名> = <表达式> 
 WHERE <条件>  -- 可选，非常重要
 ORDER BY 子句  --可选
 LIMIT 子句; --可选

--使用 update 时要注意添加 where 条件，否则将会将所有的行按照语句修改
-- 修改所有的注册时间
UPDATE product
   SET regist_date = '2009-10-10';  
-- 仅修改部分商品的单价
UPDATE product
   SET sale_price = sale_price * 10
 WHERE product_type = '厨房用具';  

-- 将多个列作为更新对象
update product
set sale_prise = sale_prise * 10,
    purchase_prise = purchase_prise / 2
where product_type = '厨房用具';
 ```

插入数据
```sql
-- 基本语法
INSERT INTO <表名> (列1, 列2, 列3, ……) VALUES (值1, 值2, 值3, ……);  

-- 包含列清单
INSERT INTO product (product_id, product_name, product_type, sale_price, purchase_price, regist_date) VALUES ('0005', '高压锅', '厨房用具', 6800, 5000, '2009-01-15');

-- 省略列清单
INSERT INTO product VALUES ('0005', '高压锅', '厨房用具', 6800, 5000, '2009-01-15');  

-- 多行INSERT （ DB2、SQL、SQL Server、 PostgreSQL 和 MySQL多行插入）
INSERT INTO product VALUES ('0002', '打孔器', '办公用品', 500, 320, '2009-09-11'),
                              ('0003', '运动T恤', '衣服', 4000, 2800, NULL),
                              ('0004', '菜刀', '厨房用具', 3000, 2800, '2009-09-20');  
```

索引
```sql
-- 添加唯一索引
alter table product
add unique index uni_name(product_name);
```

练习
```sql
-- 1.1 创建表
create table Addressbook
(
regist_no int not null,
name varchar(128) not null,
address varchar(256) not null,
tel_no char(10),
mail_address char(20),
primary key (regist_no));

-- 1.2 添加一列
alter table addressbook add column postal_code char(8) not null;

-- 1.3 删除表
drop table addressbook;

-- 1.4 是否可以编写 SQL 语句来恢复删除掉的 Addressbook 表？
-- 不行！
```

## 2.查询与排序
SELECT语句
```sql
-- 基本语句
select <列名> from <表名>;
select * from productins;

-- 使用 WHERE
SELECT product_name, product_type
  FROM product
 WHERE product_type = '衣服';

-- SQL语句可以使用AS关键字为列设定别名（用中文时需要双引号（“”））。
SELECT product_id     As id,
       product_name   As name,
       purchase_price AS "进货单价"
  FROM product;

-- 使用 `DISTINCT` 剔除 `product_type` 列中重复的数据
SELECT DISTINCT product_type
  FROM product;
```

运算符
```sql
-- 比较运算符
-- 选取出sale_price列为500的记录
SELECT product_name, product_type
  FROM product
 WHERE sale_price = 500;

```
