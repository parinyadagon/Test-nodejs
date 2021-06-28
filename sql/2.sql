SELECT customer.FirstName as 'ชื่อ',
customer.LastName as 'นามสกุล',
customer.City as 'เมือง',
customer.Country as 'ประเทศ',
sum("order".TotalAmount) as 'ยอดซื้อ'
FROM customer 
INNER JOIN "order"
ON customer.ID = "order".CustomerId
GROUP BY "order".CustomerId
ORDER BY sum("order".TotalAmount) DESC;