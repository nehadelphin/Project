drop table meetings; 

create table meetings (
    mid int PRIMARY KEY AUTO_INCREMENT,
    topic varchar(256),
    attendees int,
    startdate datetime,
    enddate datetime,
    location varchar(256),
    room varchar(256),
    cid int,
    CONSTRAINT fk_client  FOREIGN KEY (cid)
    REFERENCES client(cid)
);

insert into meetings values (null, "Vacation Days", 5, "2023-02-15 10:00:00", "2023-02-15 13:00:00", "Main Building", "Conference Room 588, Floor 5", 3);
insert into meetings values (null, "Project Client Kickoff", 15, "2023-02-01 13:00:00", "2023-02-01 14:00:00", "Main Building", "Conference Room 68, Floor 6", 4);
insert into meetings values (null, "Backlog Discussions", 3, "2023-02-20 10:00:00", "2023-02-20 10:30:00", "Biden Building", "Conference Room 5", 2);
insert into meetings values (null, "Weekly Meeting", 6, "2023-02-25 10:00:00", "2023-02-25 13:00:00", "Main Building", "Conference Room 588, Floor 7", 1);
insert into meetings values (null, "Issues Meeting", 8, "2023-02-20 10:00:00", "2023-02-20 13:00:00", "Main Building", "Conference Room 588, Floor 8", 5);
insert into meetings values (null, "Issues Meeting", 8, "2023-02-20 10:00:00", "2023-02-20 13:00:00", "Main Building", "Conference Room 588, Floor 8", 5);

select * from meetings;

delete from meetings where mid = 6;

select * from meetings;

update meetings set topic = "Requirements Meeting" where mid = 5;

select * from meetings;

select * from client;

insert into meetings values (null, "Issues Meeting", 8, "2023-02-20 10:00:00", "2023-02-20 13:00:00", "Main Building", "Conference Room 588, Floor 8", 10);

drop table client;
