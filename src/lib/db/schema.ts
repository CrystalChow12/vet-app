import { Many, relations } from 'drizzle-orm';
import {
	mysqlTable,
	serial,
	text,
	varchar,
	uniqueIndex,
	int,
	decimal,
	datetime,
	date
} from 'drizzle-orm/mysql-core';

//serial is an alias for int({ autoIncrement: true })
//it implies that the column is autoincrementing

export const pet = mysqlTable('pet', {
	id: serial('pet_id').primaryKey(),
	name: varchar('name', { length: 255 }),
	age: varchar('age', { length: 255 }),
	species: varchar('species', { length: 255 }),
	breed: varchar('breed', { length: 255 }),
	gender: varchar('gender', { length: 255 })
});

export const owner = mysqlTable('owner', {
	id: serial('owner_id').autoincrement().primaryKey(), //must auto increment
	petId: int('pet_id').references(() => pet.id), //foreign key to pet table
	firstName: varchar('first_name', { length: 255 }),
	lastName: varchar('last_name', { length: 255 }),
	phone: varchar('phone', { length: 255 }),
	email: varchar('email', { length: 255 }).unique() //should be unique
});

export const staff = mysqlTable('staff', {
	id: serial('staff_id').primaryKey(),
	firstName: varchar('first_name', { length: 255 }),
	lastName: varchar('last_name', { length: 255 }),
	role: varchar('role', { length: 255 }),
	phone: varchar('phone', { length: 255 }),
	email: varchar('email', { length: 255 }).unique(),
	password: varchar('password', { length: 65 }),
	authToken: varchar('auth_token', { length: 255 })
});

export const appointment = mysqlTable('appointment', {
	id: serial('appt_id').primaryKey(),
	petId: int('pet_id').references(() => pet.id),
	staffId: int('staff_id').references(() => staff.id),
	date: datetime('date'),
	reason: text('reason')
});

//define relationships between tables

// export const visit = mysqlTable('visit', {
// 	id: serial('visit_id').primaryKey(),
// 	petId: int('pet_id').references(() => pet.id),
// 	staffId: int('staff_id').references(() => staff.id),
// 	date: datetime('date'),
// 	reason: text('reason'),
// 	notes: text('notes'),
// 	illness: varchar('illness', { length: 255 }),
// 	cost: decimal('cost', { precision: 10, scale: 2 })
// });

// export const treatment = mysqlTable('treatment', {
// 	id: serial('treatment_id').primaryKey(),
// 	visitId: int('visit_id').references(() => visit.id),
// 	description: text('description'),
// 	reason: text('reason'),
// 	cost: decimal('cost', { precision: 10, scale: 2 })
// });

//one owner to many pets
export const ownerRelations = relations(owner, ({ many }) => ({
	pet: many(pet)
}));

export const petRelations = relations(pet, ({ one }) => ({
	owner: one(owner, {
		fields: [pet.id],
		references: [owner.petId]
	}), //one owner to many pets
	appointment: one(appointment, {
		fields: [pet.id],
		references: [appointment.petId]
	}) //one pet to one appointment
}));

//one staff member to many appointments
export const staffRelations = relations(staff, ({ many }) => ({
	appointment: many(appointment)
}));

//many appointments to one staff member
export const apptRelations = relations(appointment, ({ one }) => ({
	staff: one(staff, {
		fields: [appointment.staffId],
		references: [staff.id]
	})
}));
