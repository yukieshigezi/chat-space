$(function(){
     
  function buildHTML (message){

    if (message.image) {
      var html = 
      `<div class="message" data-message-id="${message.id}">
        <div class="user">
          <div class="member">
            ${message.user}
          </div>
          <div class="date">
            ${message.created}
          </div>
        </div> 
        <div class="title">
          <p class="lower-message__content">
          ${message.content}
          </p>
          <img class="lower-message__image" src="${message.image}">
        </div>
      </div>`
    }

      else {
      var html = 
      `<div class="message" data-message-id="${message.id}">
        <div class="user">
          <div class="member">
          ${message.user}
          </div>
          <div class="date">
          ${message.created}
          </div>
        </div>
        <div class="title">
          <p class="lower-message__content">
          ${message.content}
          </p>
        </div>
      </div>`
    }
    return html
  }

    $('#new_message').on('submit', function(e){
      e.preventDefault()
      var formData = new FormData(this);
      var url = $(this).attr('action');
      $.ajax({
        url: url,  
        type: 'POST',  
        data: formData,  
        dataType: 'json',
        processData: false,
        contentType: false,
      })
      .done(function(data){
        var html = buildHTML(data);
        $('.content-main').append(html);
        $('form')[0].reset();
        $('.content-main').animate({ scrollTop: $('.content-main')[0].scrollHeight});
        $('.form__submit').prop('disabled', false);
      })

      .fail(function() {
        alert("メッセージ送信に失敗しました");
        $('.form__submit').prop('disabled', false);
    });
  })

  var reloadMessages = function() {
    last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id}
    })
    .done(function(messages) {
      var insertHTML = '';
      $.each(messages, function(i, message) {
        insertHTML += buildHTML(message)
      });
      $('.content-main').append(insertHTML);
      $('.content-main').animate({ scrollTop: $('.content-main')[0].scrollHeight});
    })
    .fail(function() {
    });
  };    
  setInterval(reloadMessages, 7000);
 });
