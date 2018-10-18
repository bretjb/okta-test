import Component from '@ember/component';
import OktaSignIn from '@okta/okta-signin-widget';

export default Component.extend({
  didInsertElement(...args) {
    this._super(...args);
    const widget = new OktaSignIn({
      baseUrl: 'https://google.com/'
    });

    widget.renderEl({
      el: '#okta-container'
    });
  },
});
