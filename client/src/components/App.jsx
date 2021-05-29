import React from 'react';
import axios from 'axios';
import SelectorGroup from './SelectorGroup.jsx';
import SlotGroup from './SlotGroup.jsx';
import StatGroup from './StatGroup.jsx';

// the url for getting an image for an item
// http://ddragon.leagueoflegends.com/cdn/11.10.1/img/item/{item_id_goes_here}.png

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      item1: null,
      stats1: {ad: 0, ap: 0, atkSpeed: 0, crit: 0},
      item2: null,
      stats2: {ad: 0, ap: 0, atkSpeed: 0, crit: 0},
      item3: null,
      stats3: {ad: 0, ap: 0, atkSpeed: 0, crit: 0},
      item4: null,
      stats4: {ad: 0, ap: 0, atkSpeed: 0, crit: 0},
      item5: null,
      stats5: {ad: 0, ap: 0, atkSpeed: 0, crit: 0},
      item6: null,
      stats6: {ad: 0, ap: 0, atkSpeed: 0, crit: 0},
    };
    this.selectItem = this.selectItem.bind(this);
    this.updateStats = this.updateStats.bind(this);
  }

  componentDidMount() {
    axios.get('/items')
      .then((data) => {
        this.setState({items: data.data});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  selectItem(e) {
    e.preventDefault();
    if(e.target.value === 'null') {
      this.setState({[e.target.className]: null});
      this.updateStats(e.target.value, e.target.className);
    } else {
      this.setState({[e.target.className]: e.target.value});
      this.updateStats(Number(e.target.value), e.target.className);
    }
  }

  updateStats(item, slot) {
    if(item === 'null') {
      var stats = {ad: 0, ap: 0, atkSpeed: 0, crit: 0};
      if (slot === 'item1') {this.setState({stats1: stats})}
      else if (slot === 'item2') {this.setState({stats2: stats})}
      else if (slot === 'item3') {this.setState({stats3: stats})}
      else if (slot === 'item4') {this.setState({stats4: stats})}
      else if (slot === 'item5') {this.setState({stats5: stats})}
      else if (slot === 'item6') {this.setState({stats6: stats})}
    } else {
      let ad, ap, atkSpeed, crit;
      let foundItem;
      this.state.items.forEach((tem) => {
        if(tem._id === item) {
          foundItem = tem
        };
      })
      ad = (foundItem.ad !== undefined ? foundItem.ad : 0)
      ap = (foundItem.ap !== undefined ? foundItem.ap : 0)
      atkSpeed = (foundItem.atkSpeed !== undefined ? foundItem.atkSpeed : 0)
      crit = (foundItem.crit !== undefined ? foundItem.crit : 0)
      var stats = {
        ad: ad,
        ap: ap,
        atkSpeed: atkSpeed,
        crit: crit
      }
      if (slot === 'item1') {this.setState({stats1: stats})}
      else if (slot === 'item2') {this.setState({stats2: stats})}
      else if (slot === 'item3') {this.setState({stats3: stats})}
      else if (slot === 'item4') {this.setState({stats4: stats})}
      else if (slot === 'item5') {this.setState({stats5: stats})}
      else if (slot === 'item6') {this.setState({stats6: stats})}
    }
  }

  render() {
    return (
      <div className='app'>
        <h2>Select Your Desired Items!</h2>
        <SelectorGroup
        items={this.state.items}
        selectItem={this.selectItem}/>
        <SlotGroup
        item1={this.state.item1}
        item2={this.state.item2}
        item3={this.state.item3}
        item4={this.state.item4}
        item5={this.state.item5}
        item6={this.state.item6}/>
        <div className='stat-title'>Estimated Stat Bonuses!</div>
        <StatGroup
        stats={[
          this.state.stats1,
          this.state.stats2,
          this.state.stats3,
          this.state.stats4,
          this.state.stats5,
          this.state.stats6]}/>
      </div>
    );
  }
}

export default App;