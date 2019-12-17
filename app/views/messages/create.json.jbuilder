json.content  @message.content
json.user     @message.user.name
json.image    @message.image.url
json.created   @message.created_at.strftime("%Y/%m/%d %H:%M")

json.id @message.id