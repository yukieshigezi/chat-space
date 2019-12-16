$(function(){
     
  function buildHTML(message){
    if (message.image) {
      var html = 
      `<div class="message">
         <div class="user">
          <div class="member">
          ${message.user}
          </div>
          <div class="date">
          ${message.create}
          </div>
        </div>
        <div class="title">
          ${message.content}
          <img src='${message.image}'>
          </div>
      </div>`
    }

      else {
      var html = 
      `<div class="message">
        <div class="user">
          <div class="member">
          ${message.user}
          </div>
          <div class="date">
          ${message.create}
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
      console.log("OK")
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
        console.log("")
        var html = buildHTML(data);
        $('.content-main').append(html);
        $('form')[0].reset();
        $('.content-main').animate({ scrollTop: $('.content-main')[0].scrollHeight});
        $('.form__submit').prop('disabled', false);
      })

      .fail(function() {
        alert("メッセージ送信に失敗しました");
    });
    })
 })
