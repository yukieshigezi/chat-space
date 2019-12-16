json.content  @message.content
json.user     @message.user.name
json.image    @message.image.url
json.create   @message.created_at.strftime("%Y/%m/%d %H:%M")