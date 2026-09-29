---
title: SQL尝试
date: 2026-08-14
cover: /images/posts/my-first-blog/cover.webp
updated: 2026-09-18
categories: SQL 笔记
tags:
  - SQL
  - note
top: 1
---

## WHERE 能否使用 SELECT 未选中的列

学习 SQL 时，我有一个疑问：如果没有在 `SELECT` 中选择 `department` 列，还能用它作为查询条件吗？答案是可以。`SELECT` 决定查询结果显示哪些列，而 `WHERE` 决定保留哪些行，两者的作用不同。例如，`SELECT name, salary FROM employees WHERE department = '技术部';` 会根据 `department` 筛选出技术部的员工，但结果中只显示姓名和工资。因此，用于筛选的列不一定需要出现在 `SELECT` 中。

## AND 和 OR 不加括号时的优先级

在 SQL 的 `WHERE` 条件中，`AND` 的优先级高于 `OR`。不加括号时，会先将 `AND` 两侧的条件组合起来。例如：

```sql
SELECT name, salary FROM employees
WHERE department = 'IT'
   OR department = 'Sales' AND salary > 10000;
```

这条语句会查询 IT 部门的所有员工，以及 Sales 部门中工资大于 10000 的员工。工资条件只限制 Sales 部门，不限制 IT 部门。它等价于 `department = 'IT' OR (department = 'Sales' AND salary > 10000)`，因此这里可以省略括号，也可以保留英文半角括号 `()`，让逻辑更清楚。

如果希望两个部门的员工都必须满足工资大于 10000，就需要用括号将两个部门条件组合起来：

```sql
WHERE (department = 'IT' OR department = 'Sales')
  AND salary > 10000
```
