-- Up
create table pageViews (
	id INTEGER PRIMARY KEY,
	page TEXT NOT NULL,
	date datetime default current_timestamp
);

-- Down
drop table pageViews;