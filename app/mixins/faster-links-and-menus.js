import Ember from 'ember';

/*
 * Many link-to and resource-action-menus components on the screen are pretty slow.
 * So instead a static <a> and <button> are put in the template and this handles the clicks.
 */
export default Ember.Mixin.create({
  resourceActions: Ember.inject.service('resource-actions'),

  click(event) {
    if ( event.target.tagName === 'BUTTON' && $(event.target).hasClass('btn-circle-menu') ) // Only menu buttons
    {
      this.get('resourceActions').show(this.get('model'), event.target);
    }
    else if ( event.target.tagName === 'A' && $(event.target).data('transitionLink')) // Only links with data-transition-link
    {
      this.container.lookup('router:main').transitionTo(event.target.pathname);
      event.preventDefault();
      return false;
    }
  }
});
