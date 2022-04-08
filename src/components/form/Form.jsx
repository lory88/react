import React from "react";
import BingMap from '../map/Map';
import Push from '../../models/push';

export default class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            latitudine:0,
            longitudine:0,
            pushPins:[]

        };
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.forceUpdate();//utilizzato al posto setState, per forzare l'aggiornamento di react per vedere il punto??
        let n=new Push(this.state.latitudine,this.state.longitudine);
        this.state.pushPins.push(n.posizione());

    }

    handleChange = e => {
        if(e.target.value){
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    render() {
        return(
            <div>
            <BingMap coordinate={[this.state.latitudine,this.state.longitudine,this.state.pushPins]}/>
            <form onSubmit={this.handleSubmit}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="input-group">
                                <label/>Latitudine
                                <input type="number" className="input-group" name="latitudine" value={this.state.name} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="input-group">
                                <label/>Longitudine
                                <input type="number" className="input-group" name="longitudine" value={this.state.name}  onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="input-group">
                                <button className="btn btn-danger">Submit!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            </div>
        )
    }
}