const Database = require('sqlite-async')
Database.open(__dirname+'/database.sqlite').then(execute)


function execute (db) {
    db.exec(`  
        CREATE TABLE ID NOT EXISTS proffys (
            id INTERGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classses(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            subject TEXT,
            cost TEXT,
            proffy_id INTEGER
        );
    
        CREATE TABLE IF NOT EXISTS class_schedule(
            id INTERGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)

}
