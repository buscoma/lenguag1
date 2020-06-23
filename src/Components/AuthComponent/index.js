import React, { Component } from "react";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { getJwt, getJwtRefresh } from "./helper";
import LinearProgress from "@material-ui/core/LinearProgress";

// External components
import NavBar from "../NavBar";


class AuthComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			playerDetails: undefined,
			API_URL: "https://backendlenguamaticag1.herokuapp.com",
		};
		this.getPlayerDetails = this.getPlayerDetails.bind(this);
	}

	componentDidMount() {
		this.getPlayerDetails();
	}
	getPlayerDetails() {
		const token = getJwt();
		if (!token) {
			this.setState({
				playerDetails: null,
			});
			return;
		} else {
			let axios_config = { headers: { Authorization: getJwt() } };
			axios
				.get(
					this.state.API_URL + "/api/player/check_token_is_valid",
					axios_config
				)
				.then((res) => {
					if (res.status !== 200) {
						localStorage.removeItem("token");
						let refresh = getJwtRefresh();
						axios_config = { headers: { Authorization: refresh } };
						axios
							.get(this.state.API_URL + "/api/player/refresh")
							.then((res) => {
								if (res.status === 200 && res.body.token) {
									localStorage.setItem(
										"token",
										res.body.token
									);
								} else {
									localStorage.removeItem("refresh");
									this.setState({
										playerDetails: null,
									});
									return;
								}
							})
							.catch((err) => {
								this.setState({
									playerDetails: null,
								});
								console.log(err);
								return;
							});
					}
					axios_config = { headers: { Authorization: getJwt() } };
					axios
						.get(
							this.state.API_URL + "/api/player/details",
							axios_config
						)
						.then((res) => {
							if (res.status === 200) {
								this.setState({
									playerDetails: res.data.data,
								});
								localStorage.setItem("player", this.state.playerDetails)
								return;
							} else {
								this.setState({
									playerDetails: null,
								});
								return;
							}
						})
						.catch((err) => {
							this.setState({
								playerDetails: null,
							});
							console.log(err);
							return;
						});
				})
				.catch((err) => {
					this.setState({
						playerDetails: null,
					});
					console.log(err);
					return;
				});
		}
	}
	
	render() {
		if (this.state.playerDetails === undefined) {
			return (
					<LinearProgress color="secondary" />
			);
		}
		if (this.state.playerDetails === null) {
			this.props.history.push("/")
			return null;
		} else {
			console.log("ACAAAAAAA")
			console.log(this.props)
			console.log("ACAAAAAAA")
			return (
					<div>
						<NavBar user={this.state.playerDetails} />
						{React.Children.map(this.props.children, child => {
							return (child.Component);
						})}
					</div>
				);
		}
	}
}

export default withRouter(AuthComponent);
