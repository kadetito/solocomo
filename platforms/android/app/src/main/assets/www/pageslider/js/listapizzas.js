class EmpleadoApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { pizzas: [] }
  }

  componentWillMount() {
    fetch('http://www.webentorn.com/gtareas/puente_crud/listapizzas.puente.php')
      .then((response) => {
        return response.json()
      })
      .then((pizzas) => {
        this.setState({ pizzas: pizzas })
      })
  }

  render() {
    if (this.state.pizzas.length > 0) {
      return (
        <div className="container-fluid">
          <EmpleadoList listado={this.state.pizzas} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando pizzas...</p>
    }
  }

}