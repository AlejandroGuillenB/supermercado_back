
CREATE TABLE public.users (
	userid SERIAL PRIMARY KEY,
	username varchar NULL,
	"password" varchar NULL
);

insert into users (username, "password") values('admin', '123');