import React from 'react';
import { Consumer } from './Context';
import Player from './Player';

const PlayerList = ({getHighScore}) => {
  return (
    <Consumer>
      { context => (
        <React.Fragment>
          {context.players.map( (player, index) =>
            <Player 
              index={index}
              key={player.id.toString()}
              id={player.id}
              name={player.name}
              score={player.score}
            
            />
          )}
        </React.Fragment>
      )}
    </Consumer>
  );
}

export default PlayerList;