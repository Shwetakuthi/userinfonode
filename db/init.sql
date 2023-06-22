create TABLE `user`(
    `user_id` int(11) NOT NULL,
    `user_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Inser records in table
--

insert into `user`(`user_id`, `user_name`) VALUES
(1, 'Panku'),
(2, 'Shweti');