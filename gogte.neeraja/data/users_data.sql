CREATE TABLE IF NOT EXISTS `track_users` (
`id` INT NULL,
`name` VARCHAR(MAX) NULL,
`username` VARCHAR(MAX) NULL,
`email` VARCHAR(MAX) NULL,
`password` VARCHAR(MAX) NULL,
`img` VARCHAR(MAX) NULL,
`date_create` VARCHAR(MAX) NULL
);

INSERT INTO track_users VALUES
(1,'Silvia Calderon','user1','user1@gmail.com',md5("pass"),'https://via.placeholder.com/400/764/fff/?text=user1','2020-11-26T12:33:39 +08:00'),
(2,'Lorna Love','user2','user2@gmail.com',md5("pass"),'https://via.placeholder.com/400/904/fff/?text=user2','2021-03-11T07:19:36 +08:00'),
(3,'Georgia Ferrell','user3','user3@gmail.com',md5("pass"),'https://via.placeholder.com/400/904/fff/?text=user3','2020-06-07T02:07:26 +07:00'),
(4,'Whitney Petersen','user4','user4@gmail.com',md5("pass"),'https://via.placeholder.com/400/934/fff/?text=user4','2020-01-15T01:54:33 +08:00'),
(5,'Priscilla Talley','user5','user5@gmail.com',md5("pass"),'https://via.placeholder.com/400/933/fff/?text=user5','2021-05-07T07:56:02 +07:00'),
(6,'Sharpe Golden','user6','user6@gmail.com',md5("pass"),'https://via.placeholder.com/400/770/fff/?text=user6','2020-09-21T06:17:30 +07:00'),
(7,'Melba Valdez','user7','user7@gmail.com',md5("pass"),'https://via.placeholder.com/400/720/fff/?text=user7','2020-05-23T09:12:48 +07:00'),
(8,'Rivera Pate','user8','user8@gmail.com',md5("pass"),'https://via.placeholder.com/400/930/fff/?text=user8','2020-12-06T08:05:34 +08:00'),
(9,'Morris Payne','user9','user9@gmail.com',md5("pass"),'https://via.placeholder.com/400/817/fff/?text=user9','2020-04-04T05:12:33 +07:00'),
(10,'Reed Perry','user10','user10@gmail.com',md5("pass"),'https://via.placeholder.com/400/768/fff/?text=user10','2021-04-06T11:29:00 +07:00');