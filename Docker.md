TO RUN DOCKER
sudo docker exec -it 3a96e607dc39dbc9209ce5766a0b7a32cf2bd0088aa9ec85b103c12af8bee0aa /bin/bash

to run docker:
systemctl start docker

cd opt/

TO OPEN ORACLE 
sqlplus system/oracle@//localhost:1521/xe
OR, rlwrap sqlplus system/oracle@//localhost:1521/xe

; Open another terminal
1. cd Desktop/SJSU/cs157a/TanusreeDebnath_HW3

2. sudo docker cp createdb.sql eager_shamir:/opt

; Sql commands
DROP TABLE IF EXISTS YELP_USER;

; Timestamp format
;https://docs.oracle.com/cd/B19306_01/server.102/b14225/ch4datetime.htm
; https://www.oracletutorial.com/oracle-basics/oracle-timestamp-with-time-zone/
; https://docs.oracle.com/cd/E11882_01/server.112/e10729/ch4datetime.htm
; https://docs.oracle.com/cd/B19306_01/server.102/b14225/ch4datetime.htm

ALTER SESSION SET NLS_TIMESTAMP_TZ_FORMAT='MON-DD-YY HH24:MI:SS TZD';


; docker copy from computer to docker:
; sudo docker cp <source in computer> <name of docker>:<destination in docker>
sudo docker cp createdb.sql eager_shamir:/opt
