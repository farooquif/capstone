
# create db, password is 'postgres'
psql -h localhost -p 5432 -U postgres -c "CREATE DATABASE capstonedb;"

#connect to db, password is 'postgres'
psql -h localhost -p 5432 -U postgres -d mydatabase -f create_tables.sql
