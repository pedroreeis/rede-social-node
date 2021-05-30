var socket = io('http://181.213.110.132:3333');

            function renderMessage(message) {
                $('.messages').append('<div class="message"><strong>'+ message.author +'</strong>: '+ message.message +'</div>')
            }

            socket.on('previousMessages', function(messages) {
                for(message of messages) {
                    renderMessage(message);
                }
            })
            
            socket.on('receivedMessage', function(message) {
                renderMessage(message)
            })

            $('#chat').submit(function(event) {
                event.preventDefault();

               var author = $('h3').text()
                var message = $('input[name=message]').val();

            if(author.length && message.length) {
                var messageObject = {
                    author: author,
                    message: message,
                };

                $('input[name=message').val('')
                
                renderMessage(messageObject);
            socket.emit('sendMessage', messageObject)
            }
            })