import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class MainController extends Controller {
  queryParams = [
    {
      labelIds: {
        type: 'array',
        as: 'l',
      },
    },
  ];

  @service router;

  @tracked _labelIds = [];

  set labelIds(value) {
    this._labelIds = value;
  }

  get labelIds() {
    return this._labelIds;
  }

  @action
  changeQps() {
    const rand = () => {
      return Math.floor(Math.random() * 5) + 1;
    };
    this._labelIds = Array(rand())
      .fill(null)
      .map(() => rand());
  }

  @action
  clearQps() {
    this._labelIds = [];
  }

  @action
  goToChildA() {
    this.router.transitionTo('main.child-route-a', {
      queryParams: { color: 'blue' },
    });
  }
}
