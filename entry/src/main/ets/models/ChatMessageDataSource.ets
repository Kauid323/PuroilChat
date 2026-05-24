import { MessageItem } from './ChatModels';

export class ChatMessageDataSource implements IDataSource {
  private messages: MessageItem[] = [];
  private listeners: DataChangeListener[] = [];

  totalCount(): number {
    return this.messages.length;
  }

  getData(index: number): MessageItem {
    return this.messages[index];
  }

  registerDataChangeListener(listener: DataChangeListener): void {
    if (this.listeners.indexOf(listener) < 0) {
      this.listeners.push(listener);
    }
  }

  unregisterDataChangeListener(listener: DataChangeListener): void {
    const index: number = this.listeners.indexOf(listener);
    if (index >= 0) {
      this.listeners.splice(index, 1);
    }
  }

  getAll(): MessageItem[] {
    return [...this.messages];
  }

  replaceAll(messages: MessageItem[]): void {
    this.messages = [...messages];
    this.notifyReload();
  }

  prependMessages(messages: MessageItem[]): void {
    if (messages.length === 0) {
      return;
    }
    for (let i = messages.length - 1; i >= 0; i--) {
      this.messages.splice(0, 0, messages[i]);
    }
    for (let i = 0; i < messages.length; i++) {
      this.notifyAdd(i);
    }
  }

  appendMessages(messages: MessageItem[]): void {
    if (messages.length === 0) {
      return;
    }
    const startIndex: number = this.messages.length;
    for (let i = 0; i < messages.length; i++) {
      this.messages.push(messages[i]);
      this.notifyAdd(startIndex + i);
    }
  }

  private notifyReload(): void {
    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i].onDataReloaded();
    }
  }

  private notifyAdd(index: number): void {
    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i].onDataAdd(index);
    }
  }
}
