import React, { Component } from 'react'

const customStyles = {
  background: 'skyblue',
  color: 'white',
  padding: '1.5rem 3rem',
}

export class Dummy extends Component {
  render() {
    return (
      <div style={customStyles}>
        <h1>Dummy Component</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo culpa doloribus accusantium ex rerum. Consequatur harum inventore quaerat! Tenetur ullam aliquid consequuntur adipisci! Iusto alias quos nihil eaque expedita vel? Explicabo facere, nesciunt culpa dicta pariatur quidem alias quasi vitae.</p>
      </div>
    )
  }
}

export default Dummy
