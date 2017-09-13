json.id @chirp.id
json.author_id @chirp.author_id
json.body @chirp.body
json.likes @chirp.likes.count
json.liked_by_current_user !!@chirp.likes.find_by(user_id: current_user.id)