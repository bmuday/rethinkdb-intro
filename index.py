import rethinkdb as r
rdb = r.RethinkDB()

# Connection to the database
rdb.connect("localhost", 28015).repl()
db = rdb.db("mydb")

# Create table
# db.table_create("sprints").run()

# Insert data
# db.table("sprints").insert([
#     {"name": "sunflower", "day" : "monday", "task_id": "a31c5a5e-ef96-4736-96cd-fbd33453d91a"},
#     {"name": "sunflower", "day" : "tuesday", "task_id": "f079445a-a444-45ba-8795-bef871741946"},
#     {"name": "rainbow", "day" : "monday", "task_id": "f079445a-a444-45ba-8795-bef871741946"},
#     {"name": "rainbow", "day" : "wednesday", "task_id": "7dce1c68-12ff-457f-a893-aad84859845f"},
#     {"name": "gun", "day" : "friday", "task_id": "623be6e2-4b33-4e96-9638-77c897d9cab2"}
#     {"name": "gun", "day" : "saturday", "task_id": "623be6e2-4b33-4e96-9638-77c897d9cab2"}
# ]).run()

# Get data
cursor = db.table("users").run()

for doc in cursor:
    print(doc)