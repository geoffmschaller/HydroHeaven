-- Up
create table addressBook (
	id INTEGER PRIMARY KEY,
	firstName TEXT NOT NULL,
	lastName TEXT NOT NULL,
	phone INTEGER NOT NULL UNIQUE,
	email TEXT,
	address TEXT,
	date datetime default current_timestamp
);

-- Down
drop table addressBook;