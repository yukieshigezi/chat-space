# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|user_id|integer|null: false|


### Association
- has_many :messages


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|image|string|null: false|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|group_id|integer|null: false|



### Association
has_many :messages

## group_users

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|


### Association
- has_many :group, through: :group_users
- has_many :user
- has_many :user, through: :group_users
- has_many :group





