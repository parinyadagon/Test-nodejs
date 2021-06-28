SELECT count(*) as 'จำนวนลูกค้าที่มียอดซื้อ ระหว่าง 1000-2000',
TotalAmount as 'ยอดซื้อ'
FROM "order"
GROUP BY CustomerId
HAVING sum(TotalAmount)
BETWEEN 1000 AND 2000
