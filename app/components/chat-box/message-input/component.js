import Component from '@ember/component';

export default Component.extend({
  actions: {
    onSubmit() {
      const value = this.get('value');
      this.get('sendMessage')(value);

      this.set('value', '');
    }
  }
});
