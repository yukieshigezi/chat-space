# README

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|group_id|integer|null: false, foreign_key: true|


### Association
- has_many :messages


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user|string|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- has_many :user