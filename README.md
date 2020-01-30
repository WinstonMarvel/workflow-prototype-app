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
- Run npm start in server folder
- Run npm start in client folder

### To build
- Run npm run build in client folder
- Copy files from /build folder in client to server/public

### Important notes
- Client manages data using flux
- Warning: Errors are displayed by updating store and rendering conditionally
- Server returns JSON token on successful authentication
- JSON token has no expiry
- No password reset/signup mechanism
