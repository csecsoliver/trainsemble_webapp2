import {
	pgTable,
	integer,
	text,
	uuid,
	timestamp,
	boolean
} from 'drizzle-orm/pg-core';

export const car = pgTable('cars', {
	id: uuid('id').primaryKey().default('uuid_as_a_service()'),
	uic: text('uic').notNull().unique(),
	agency: text('agency').notNull(),
	type: text('type').notNull(),
	nick: text('nick'),
	vagonweb: text('vagonweb'),
	created_at: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
	updated_at: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow()
});

export const station = pgTable('stations', {
	id: uuid('id').primaryKey().default('uuid_as_a_service()'),
	name: text('name').notNull().unique(),
	created_at: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
	updated_at: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow()
});

export const route = pgTable('routes', {
	id: uuid('id').primaryKey().default('uuid_as_a_service()'),
	number: integer('number').notNull(),
	type: text('type').notNull(),
	nick: text('nick'),
	origin_id: uuid('origin_id')
		.notNull()
		.references(() => station.id),
	departure: timestamp('departure', { withTimezone: true }).notNull(),
	destination_id: uuid('destination_id')
		.notNull()
		.references(() => station.id),
	arrival: timestamp('arrival', { withTimezone: true }).notNull(),
	created_at: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
	updated_at: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow()
});

export const sighting = pgTable('sightings', {
	id: uuid('id').primaryKey().default('uuid_as_a_service()'),
	route_id: uuid('route_id').notNull().references(()=>route.id),
	date: timestamp('date', { withTimezone: true }).notNull(),
	station_id: uuid('station_id')
		.notNull()
		.references(() => station.id),
	notes: text('notes'),
	images: text('images').array().notNull().default([]),
	car_ids: uuid('car_ids').array().notNull().default([]),
	created_at: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
	updated_at: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow()
});

export const user = pgTable('users', {
	id: uuid('id').primaryKey().default('uuid_as_a_service()'),
	username: text('username').notNull(),
	email: text('email'),
	passhash: text('passhash')
});

export const token = pgTable('tokens', {
	id: uuid('id').primaryKey().default('uuid_as_a_service()'),
	user_id: uuid('user_id').notNull().references(()=>user.id),
	valid: boolean().notNull().default(true),
	token: text().notNull().unique()
});