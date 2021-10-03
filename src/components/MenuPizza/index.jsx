import React, { useEffect, useState } from "react";
import Pizza from "../Pizza";
export default function MenuPizza() {
  const [pizzas, setPizzas] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
      });
  }, []);
  return <div>{pizzas && pizzas.map((pizza) => <Pizza pizza={pizza} />)}</div>;
}

export class MenuPizzaClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pizzas: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/pizzas")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ pizzas: { ...this.state.pizza, data } });
      });
  }
  componentDidUpdate() {
    fetch("http://localhost:8000/pizzas")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ pizzas: { ...this.state.pizza, data } });
      });
  }
  render() {
    return (
      <div>
        {this.state.pizzas &&
          this.state.pizzas.map((pizza) => <Pizza pizza={pizza} />)}
      </div>
    );
  }
}
