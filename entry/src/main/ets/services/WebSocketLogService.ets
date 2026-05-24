import { WebSocketLogEntry, WebSocketLogListener } from '../models/WebSocketModels';

const MAX_LOG_ENTRIES: number = 400;

export class WebSocketLogService {
  private static instance: WebSocketLogService | undefined = undefined;
  private entries: WebSocketLogEntry[] = [];
  private listeners: WebSocketLogListener[] = [];

  static getInstance(): WebSocketLogService {
    if (WebSocketLogService.instance === undefined) {
      WebSocketLogService.instance = new WebSocketLogService();
    }
    return WebSocketLogService.instance;
  }

  private constructor() {
  }

  private createId(): string {
    return `${Date.now()}_${Math.floor(Math.random() * 1000000)}`;
  }

  private notify(): void {
    const snapshot: WebSocketLogEntry[] = this.getEntries();
    for (let i = 0; i < this.listeners.length; i++) {
      this.listeners[i](snapshot);
    }
  }

  private addListener(listener: WebSocketLogListener): void {
    for (let i = 0; i < this.listeners.length; i++) {
      if (this.listeners[i] === listener) {
        return;
      }
    }
    this.listeners.push(listener);
  }

  private removeListener(listener: WebSocketLogListener): void {
    const next: WebSocketLogListener[] = [];
    for (let i = 0; i < this.listeners.length; i++) {
      if (this.listeners[i] !== listener) {
        next.push(this.listeners[i]);
      }
    }
    this.listeners = next;
  }

  log(level: string, tag: string, message: string): void {
    const entry: WebSocketLogEntry = new WebSocketLogEntry();
    entry.id = this.createId();
    entry.timestamp = Date.now();
    entry.level = level;
    entry.tag = tag;
    entry.message = message;
    this.entries.push(entry);
    if (this.entries.length > MAX_LOG_ENTRIES) {
      this.entries.splice(0, this.entries.length - MAX_LOG_ENTRIES);
    }
    this.notify();
  }

  info(tag: string, message: string): void {
    this.log('info', tag, message);
  }

  warn(tag: string, message: string): void {
    this.log('warn', tag, message);
  }

  error(tag: string, message: string): void {
    this.log('error', tag, message);
  }

  clear(): void {
    this.entries = [];
    this.notify();
  }

  getEntries(): WebSocketLogEntry[] {
    const copied: WebSocketLogEntry[] = [];
    for (let i = 0; i < this.entries.length; i++) {
      copied.push(this.entries[i]);
    }
    return copied;
  }

  addListenerAndEmit(listener: WebSocketLogListener): void {
    this.addListener(listener);
    listener(this.getEntries());
  }

  removeListenerByRef(listener: WebSocketLogListener): void {
    this.removeListener(listener);
  }
}
