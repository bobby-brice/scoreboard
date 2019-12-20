import React from "react";
import { Consumer } from './Context';

const AddPlayerForm = () => {

  const playerInput = React.createRef() //provides an easier an quicker way from input fields if you don't need to keep track of every keystroke
  //we replaced our state object, the reference to state in the addPlayer handleSubmit, and the commented out lines below

  // handleValueChange = (e) => {
  //   this.setState({ value: e.target.value })
  // }
    return (
      <Consumer>
        { context => {
          const handleSubmit = (e) => {
            e.preventDefault();
            context.actions.addPlayer(playerInput.current.value);
            e.currentTarget.reset();
          }
          return (
            <form onSubmit={handleSubmit}>
              <input 
                type="text"
                ref={playerInput}
                placeholder="enter a player's name"
              />
              <input 
                type="submit"
                value="Add Player"
              />
            </form>
          );
        }}
      </Consumer>


    );
}

export default AddPlayerForm;