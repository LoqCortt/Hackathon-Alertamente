import { NearBindgen, near, call, view } from 'near-sdk-js';

@NearBindgen
class Contract {
  constructor() {
    this.message = "Hello, NEAR!";
  }

  @view
  get_message() {
    return this.message;
  }

  @call
  set_message({ newMessage }) {
    this.message = newMessage;
  }
}