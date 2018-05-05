# Base image
FROM postgres:10-alpine

# run create.sql on init
ADD create.sql /docker-entrypoint-initdb.d

# Connect psql on this database with
# docker run -it --rm --network socialmedia_tddd27_default postgres psql -h users-db -U postgres