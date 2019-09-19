

var Header = React.createClass({
    render: function () {
        return (
            <header className="bar bar-nav headerpaginas">
            <div className="row">
              <div className="col-6 smhead"><a href="#" className={"icon pull-left posicionad retorno" + (this.props.back==="true"?"":" hidden")}>{this.props.text}</a></div>
              <div className="col-6 smhead text-right"><img src={this.props.imageUri}/></div>
             </div>
                
                
            </header>
        );
    }
});

var HomePage = React.createClass({
    render: function () {
        return (
            <div className={"page " + this.props.position}>
                <Header text="PageSlider"/>
                <div className="content ">
                
                
                
       <div className="row toprow">
        <div className="col-6"><div className="tarjeta"><a className="btn bothov" href="pizzas.html"><img src="img/iconopizza.png" /></a><p>PEDIR COMIDA</p></div></div>
        <div className="col-6"><div className="tarjeta"><a className="btn bothov"  href="carta.html"><img src="img/menusicono.png" /></a><p>NUESTRA CARTA</p></div></div>
       </div>
       <div className="row">
       <div className="col-6"><div className="tarjeta"><a className="btn bothov"  href="pizzas.html"><img src="img/ofertasicono.png" /></a><p>OFERTAS</p></div></div>
       <div className="col-6"><div className="tarjeta"><a className="btn bothov"  href="reparto.html"><img src="img/entregaicono.png" /></a><p>ZONAS REPARTO</p></div></div>
      </div>           
                    
                    
      
      <div className="row rowaviso"><div className="col-12"><div className="card"><small>En este momento está</small>
      <h4>CERRADO</h4><small>Abriremos a las 16:40h.</small></div></div></div>
      
                </div>
            </div>
        );
    }
});

var Page1 = React.createClass({
    render: function () {
        return (
        		
            <div className={"page page1 " + this.props.position}>
                <Header text="< Pizzas" imageUri="img/min-iconopizza.png" back="true"/>
                <div className="content">
                    <div className="card">
                        <ul className="table-view">
                            <li className="table-view-cell media">
                                <a>
                                    <img className="media-object pull-left" src="images/avatar.png"/>
                                    <div className="media-body">Susan Smith</div>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    
                </div>
            </div>
        );
    }
});

var Page2 = React.createClass({
    render: function () {
        return (
            <div className={"page page2 " + this.props.position}>
            <Header text="< Carta" imageUri="img/min-menusicono.png" back="true"/>
                <div className="content">
                    <img src="images/react.png"/>
                </div>
            </div>
        );
    }
});

var Page3 = React.createClass({
    render: function () {
        return (
            <div className={"page page3 " + this.props.position}>
            <Header text="< Ofertas" imageUri="img/mini-ofertasicono.png" back="true"/>
                <div className="content">
                    <img src="images/react.png"/>
                </div>
            </div>
        );
    }
});

var Page4 = React.createClass({
    render: function () {
        return (
            <div className={"page page4 " + this.props.position}>
            <Header text="< Zonas de reparto" imageUri="img/min-entregaicono.png" back="true"/>
                <div className="content">
                    <img src="images/react.png"/>
                </div>
            </div>
        );
    }
});

var App = React.createClass({
    mixins: [PageSlider],
    componentDidMount: function() {
        router.addRoute('', function() {
            this.slidePage(<HomePage key="home"/>);
        }.bind(this));
        router.addRoute('page1', function() {
            this.slidePage(<Page1 key="page1"/>);
        }.bind(this));
        router.addRoute('page2', function() {
            this.slidePage(<Page2 key="page2"/>);
        }.bind(this));
        router.addRoute('page3', function() {
            this.slidePage(<Page3 key="page3"/>);
        }.bind(this));
        router.addRoute('page4', function() {
            this.slidePage(<Page4 key="page4"/>);
        }.bind(this));
        router.start();
    }
});
React.render(<App />, document.getElementById('contenedor'));
