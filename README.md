# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|integer|null: false|
|e-mail|string|null: false|

### Association
- has_many :messages
- has_many :groups, through: :group_users
- has_many :group_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|
|image|string|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|



### Association
- has_many :messages
- has_many :group_users
- has_many :users, through: :group_users

## group_users

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|


### Association
- belongs_to user
- belongs_to group



