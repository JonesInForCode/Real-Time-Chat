class Message {
    constructor(text, sender) {
        this.text = text;
        this.sender = sender;
        this.timeStamp = new Date();
    }

    createMessageElement() {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = `${this.sender}: ${this.text}`;
        return messageElement;
    }

    static addMessageToDOM(messageElement) {
        const messagesContainer = document.getElementById('messages');
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }


}

export default Message;