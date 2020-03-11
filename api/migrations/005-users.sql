-- Up
create table users (
	id INTEGER PRIMARY KEY,
	email TEXT NOT NULL UNIQUE,
	firstName TEXT NOT NULL,
	lastName TEXT NOT NULL,
	password TEXT NOT NULL,
	authToken TEXT,
	resetToken TEXT,
	date datetime default current_timestamp
);

-- Down
drop table users;