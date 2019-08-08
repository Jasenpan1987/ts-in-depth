type Callback = () => void;

export class Eventing {
  private listeners: { [key: string]: Callback[] } = {};
  on = (eventName: string, callback: Callback) => {
    this.listeners[eventName] = [
      ...(this.listeners[eventName] || []),
      callback
    ];
  };

  trigger = (eventName: string) => {
    const handlers = this.listeners[eventName] || [];
    for (let handler of handlers) {
      handler();
    }
  };
}
