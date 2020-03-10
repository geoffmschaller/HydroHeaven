-- Up
create table contacts (
	id INTEGER PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	message TEXT NOT NULL,
	date TEXT DEFAULT(getDate()) NOT NULL
);

-- Down
drop table contacts;