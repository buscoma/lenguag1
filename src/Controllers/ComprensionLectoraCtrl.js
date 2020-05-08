import React, {Component} from 'react';

class ComprensionLectoraController extends Component{
    constructor(props){
        super(props);
        this.state = {
            baseUrl: "http://www.mocky.io/v2/5eb4e5210e00005e00081e29",
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData(){
        return fetch(this.state.baseUrl)
        .then((response) => {
            return response.json();
        })
        .then((responseData) => {
            return responseData.result;
        });
    }
}

export default new ComprensionLectoraController();