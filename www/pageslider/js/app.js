

var Header = React.createClass({
    render: function () {
        return (
            <header className="bar bar-nav headerpaginas">
                <a href="#" className={"icon icon-left-nav pull-left" + (this.props.back==="true"?"":" hidden")}>{this.props.text}</a>
               
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
        <div className="col-6"><div className="tarjeta"><a className="btn bothov" href="#page1"><img src="img/iconopizza.png" /></a><p>PIZZAS</p></div></div>
        <div className="col-6"><div className="tarjeta"><a className="btn bothov"  href="#page2"><img src="img/menusicono.png" /></a><p>CARTA</p></div></div>
       </div>
       <div className="row">
       <div className="col-6"><div className="tarjeta"><a className="btn bothov"  href="#page3"><img src="img/ofertasicono.png" /></a><p>OFERTAS</p></div></div>
       <div className="col-6"><div className="tarjeta"><a className="btn bothov"  href="#page4"><img src="img/entregaicono.png" /></a><p>ZONAS REPARTO</p></div></div>
      </div>           
                    
                    
                </div>
            </div>
        );
    }
});

var Page1 = React.createClass({
    render: function () {
        return (
            <div className={"page page1 " + this.props.position}>
                <Header text="Page 1" back="true"/>
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
                <Header text="Page 2" back="true"/>
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
                <Header text="Page 3" back="true"/>
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
                <Header text="Page 4" back="true"/>
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
