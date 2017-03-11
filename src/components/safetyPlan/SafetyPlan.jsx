import React, {Component, PropTypes} from 'react';
import s from 'components/styles/index.scss';
import {connect} from 'react-redux';
import {updatePlan, submitPlan} from 'redux/modules/safetyPlan.js';
import {Link} from 'react-router';

@connect(state => ({
  ...state.safetyPlan
}), {updatePlan, submitPlan})
export default class SafetyPlan extends Component {
  static propTypes = {
    escapeRoutes: PropTypes.string,
    itemsToCollect: PropTypes.string,
    locationsAndContacts: PropTypes.string,
    argumentLocations: PropTypes.string,
    codeword: PropTypes.string,
    updatePlan: PropTypes.func,
    submitPlan: PropTypes.func
  }
  planChanged = (e) => {
    if (e.target.name === 'escapeRoutes_input') {
      this.props.updatePlan({
        ...this.props,
        escapeRoutes: e.target.value
      });
    }else if (e.target.name === 'itemsToCollect_input') {
      this.props.updatePlan({
        ...this.props,
        itemsToCollect: e.target.value
      });
    }else if (e.target.name === 'locationsAndContacts_input') {
      this.props.updatePlan({
        ...this.props,
        locationsAndContacts: e.target.value
      });
    }else if (e.target.name === 'argumentLocations_input') {
      this.props.updatePlan({
        ...this.props,
        argumentLocations: e.target.value
      });
    }else if (e.target.name === 'codeword_input') {
      this.props.updatePlan({
        ...this.props,
        codeword: e.target.value
      });
    }
    this.forceUpdate();
  }
  render() {
    return (
      <div>
        <div><label htmlFor="escapeRoutes_input">Escape routes & methods to reach safety (e.g. doors, windows, or  fire escapes)</label> <input type="text" id="escapeRoutes_input" name="escapeRoutes_input" value={this.props.escapeRoutes} onChange={(e) => this.planChanged(e)}/></div>
        <div><label htmlFor="itemsToCollect_input">Items to collect and take with them upon leaving (e.g. purse, car keys, documents)</label> <input type="text" id="itemsToCollect_input" name="itemsToCollect_input" value={this.props.itemsToCollect} onChange={(e) => this.planChanged(e)}/></div>
        <div><label htmlFor="locationsAndContacts_input">Locations and contacts to go to in case of emergency (e.g. family, friend)</label> <input type="text" id="locationsAndContacts_input" name="locationsAndContacts_input" value={this.props.locationsAndContacts} onChange={(e) => this.planChanged(e)}/></div>
        <div><label htmlFor="argumentLocations_input">Locations that are safer places to have arguments (avoid kitchens or bathrooms)</label> <input type="text" id="argumentLocations_input" name="argumentLocations_input" value={this.props.argumentLocations} onChange={(e) => this.planChanged(e)}/></div>
        <div><label htmlFor="codeword_input">A codeword for their children, friends, and trusted ones to know when to call for help</label> <input type="text" id="codeword_input" name="codeword_input" value={this.props.codeword} onChange={(e) => this.planChanged(e)}/></div>
      <Link to={'/'} className={s.button} onClick={() => {
        this.props.submitPlan({
          escapeRoutes: this.props.escapeRoutes,
          itemsToCollect: this.props.itemsToCollect,
          locationsAndContacts: this.props.locationsAndContacts,
          argumentLocations: this.props.argumentLocations,
          codeword: this.props.codeword
        });
      }}>Submit Safety Plan</Link>
      <Link to={'/'} className={s.button}>Back to Home</Link>
      </div>
    );
  }
}
