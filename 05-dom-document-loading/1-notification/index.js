export default class NotificationMessage {
  constructor(text = '', {duration = 0, type = "" } = {}) {
    this.text = text;
    this.duration = duration;
    this.type = type;
  }
  show() {
    const correctDuration = this.duration / 1000;
    const notificationHtml = `
        <div class="notification ${this.type}" style="--value:${correctDuration}s">
        <div class="timer"></div>
        <div class="inner-wrapper">
        <div class="notification-header">${this.type}</div>
        <div class="notification-body">
            ${this.text}
        </div>
        </div>
    </div>
    `;
    const id = document.getElementById('notification');
    if (id) {
      document.getElementById('notification').remove();
    }
    const notificationWrapper = document.createElement("div");
    notificationWrapper.innerHTML = notificationHtml;
    const notification = notificationWrapper.firstElementChild;
    notification.setAttribute('id', 'notification');
    document.body.append(notification);
    setTimeout(() => {
      notification.remove();
    }, this.duration);
  }
}
