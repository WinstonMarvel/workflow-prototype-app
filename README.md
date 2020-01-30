# workflow-prototype-app
Very poorly designed MERN application to rate and review.
If you landed here somehow, skip over to other repos.

# Disclaimer
Application works but is very poorly designed and I did not know react well enough at that time.
These readme notes are only for my own reference.

### To run
- Make sure MongoDB is running (mongod.exe if on local installation on Windows)
- Run npm start from the server folder (Make sure latest build files are in server/public)
- Make sure config.json is present in server/ folder in this format:

`{
    "db": {
        "url": "mongodb://127.0.0.1:27017/rubricdb"
    },
    "jwt": {
        "secret" : "asdsadasdasdasd"
    }
}`

### To develop
- Make sure MongoDB is running (mongod.exe if on local installation on Windows)
- Make sure you run `npm install` for client and server (OR use the SERVER INSTALL and CLIENT INSTALL batch scripts) 
- Run npm start in server folder
- Run npm start in client folder

### To build and run
- Run npm run build in client folder
- Copy files from /build folder in the client folder to server/public/
- Only the server folder is required to run the app
- Make sure config.json is also added to the server/ folder
- Run the START SERVER batch file or run `node index.js` in the server/ folder
- The files in the public folder are served on http://localhost:8080/

### Important notes
- Client manages data using flux
- Warning: Errors are displayed by updating store and rendering conditionally
- Server returns JSON token on successful authentication
- JSON token has no expiry
- No password reset/signup mechanism

### Backing up and restoring the db
- Run CMD as administrator
- Change directory to C:\Program Files\MongoDB\Server\4.2\bin\
- For backup:
`mongodump --out=C:\db-backups\ --db rubricdb`
You should find the folder with the backup bson files in db-backups
- For restoration:
`mongorestore --db rubricdb C:\db-bkp\rubricdb\`