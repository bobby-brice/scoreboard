import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';
import Counter from './Counter';
import Icon from './Icon';

class Player extends PureComponent { //pure components avoid wasted renders and improve performance

  static propTypes = {
    name: PropTypes.string,
    score: PropTypes.number,
    id: PropTypes.number,
    index: PropTypes.number,
  };

  render () {
    const {
      name,
      id,
      score,
      index,
    } = this.props;

    return (
      <div className="player">
        <Consumer>
          { context => (
            <span className="player-name">
              <button className="remove-player" onClick={() => context.actions.removePlayer(id)}>✖</button>
              <Icon />
              { name }
            </span>
          )}
        </Consumer>

        <Counter score ={score}
        index={index}
        />
      </div>
    );
  }

}

export default Player;