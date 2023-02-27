drop table client;

create table client (
    cid int PRIMARY KEY AUTO_INCREMENT,
    name varchar(256),
    email varchar(256),
    address varchar(256),
    city varchar(256),
    state varchar(256),
    zip int,
    pass1 varchar(40)
);

insert into client values (null, "John Watson", "john@example.com", "123 Street", "Houston", "Texas", 77008, MD5('john123') );
insert into client values (null, "Jane Doe", "jane@example.com", "456 Street", "Houston", "Texas", 77002, MD5('jane456') );
insert into client values (null, "Ava Kelly", "ava@example.com", "567 Street", "Dallas", "Texas", 76789, MD5('ava567') );
insert into client values (null, "Derrick Dave", "Derrick@example.com", "222 Street", "Austin", "Texas", 72008, MD5('derrick222') );
insert into client values (null, "Kaleb Bar", "kaleb@example.com", "848 Street", "Houston", "Texas", 77008, MD5('kaleb848') );
insert into client values (null, "Kaleb Bar", "kaleb@example.com", "848 Street", "Houston", "Texas", 77008, MD5('kaleb848') );

select * from client;

update client set address = "5678 Street" where cid = 3;

select * from client;

delete from client where cid = 6;

select * from client;

