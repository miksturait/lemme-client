import Component from '@ember/component';

export default Component.extend({
  classNames: ["chat-box__input"],

  actions: {
    onSubmit() {
      const value = this.get("value");
      this.get("sendMessage")(value);

      this.set("value", "");
    }
  }
});
