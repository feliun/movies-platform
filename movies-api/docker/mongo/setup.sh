#!/usr/bin/env bash
echo "Creating mongo db and users..."
echo "Creating new mongo db: $MONGO_DB_APP_DATABASE"
echo "Creating new mongo user"
echo "username: $MONGO_DB_APP_USERNAME"
echo "password: $MONGO_DB_APP_PASSWORD"

mongo admin -u $MONGO_INITDB_ROOT_USERNAME -p $MONGO_INITDB_ROOT_PASSWORD --eval "db.getSiblingDB('$MONGO_DB_APP_DATABASE').createUser({user: '$MONGO_DB_APP_USERNAME', pwd: '$MONGO_DB_APP_PASSWORD', roles: [{role: 'readWrite', db: '$MONGO_DB_APP_DATABASE'}]});"
mongoimport -u $MONGO_DB_APP_USERNAME -p $MONGO_DB_APP_PASSWORD --db $MONGO_DB_APP_DATABASE --collection movies --type json --file /movies.json --jsonArray
mongoimport -u $MONGO_DB_APP_USERNAME -p $MONGO_DB_APP_PASSWORD --db $MONGO_DB_APP_DATABASE --collection landing_content --type json --file /cms.json --jsonArray

# Creating indexes
mongo $MONGO_DB_APP_DATABASE -u $MONGO_DB_APP_USERNAME -p $MONGO_DB_APP_PASSWORD --eval "db.movies.createIndex({ id: 1 }, { unique: true });"
mongo $MONGO_DB_APP_DATABASE -u $MONGO_DB_APP_USERNAME -p $MONGO_DB_APP_PASSWORD --eval "db.landing_content.createIndex({ id: 1 }, { unique: true });"

echo "Mongo db and users created."