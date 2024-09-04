CREATE TABLE `appointment` (
	`appt_id` serial AUTO_INCREMENT NOT NULL,
	`pet_id` int,
	`staff_id` int,
	`date` datetime,
	`reason` text,
	CONSTRAINT `appointment_appt_id` PRIMARY KEY(`appt_id`)
);
--> statement-breakpoint
CREATE TABLE `owner` (
	`owner_id` serial AUTO_INCREMENT NOT NULL,
	`pet_id` int,
	`first_name` varchar(255),
	`last_name` varchar(255),
	`phone` varchar(255),
	`email` varchar(255),
	CONSTRAINT `owner_owner_id` PRIMARY KEY(`owner_id`),
	CONSTRAINT `owner_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
CREATE TABLE `pet` (
	`pet_id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255),
	`age` varchar(255),
	`species` varchar(255),
	`breed` varchar(255),
	`gender` varchar(255),
	CONSTRAINT `pet_pet_id` PRIMARY KEY(`pet_id`)
);
--> statement-breakpoint
CREATE TABLE `staff` (
	`staff_id` serial AUTO_INCREMENT NOT NULL,
	`first_name` varchar(255),
	`last_name` varchar(255),
	`role` varchar(255),
	`phone` varchar(255),
	`email` varchar(255),
	CONSTRAINT `staff_staff_id` PRIMARY KEY(`staff_id`),
	CONSTRAINT `staff_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `appointment` ADD CONSTRAINT `appointment_pet_id_pet_pet_id_fk` FOREIGN KEY (`pet_id`) REFERENCES `pet`(`pet_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `appointment` ADD CONSTRAINT `appointment_staff_id_staff_staff_id_fk` FOREIGN KEY (`staff_id`) REFERENCES `staff`(`staff_id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `owner` ADD CONSTRAINT `owner_pet_id_pet_pet_id_fk` FOREIGN KEY (`pet_id`) REFERENCES `pet`(`pet_id`) ON DELETE no action ON UPDATE no action;

