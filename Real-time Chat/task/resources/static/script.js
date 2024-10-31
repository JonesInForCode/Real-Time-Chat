import Message from './components/Message.js';

document.addEventListener('DOMContentLoaded', () => {
        const inputMsg = document.getElementById('input-msg');
        const sendMsgBtn = document.getElementById('send-msg-btn');

        sendMsgBtn.addEventListener('click', sendMessage);
        inputMsg.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
        }
    });

    function sendMessage() {
        const messageText = inputMsg.value.trim();
        if (messageText) {
            const message = new Message(messageText, 'You');
            const messageElement = message.createMessageElement();
            Message.addMessageToDOM(messageElement);
            inputMsg.value = '';
        }
    }

});