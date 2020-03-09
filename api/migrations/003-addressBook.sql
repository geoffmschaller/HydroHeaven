-- Up
create table addressBook (
	id INTEGER PRIMARY KEY,
	firstName TEXT NOT NULL,
	lastName TEXT NOT NULL,
	phone INTEGER NOT NULL,
	email TEXT,
	address TEXT,
	date TEXT NOT NULL
);

-- Down
drop table addressBook;