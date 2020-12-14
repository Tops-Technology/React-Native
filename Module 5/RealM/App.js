import React from 'react';
import { View, Text, SafeAreaView, TextInput, TouchableHighlight, FlatList, StyleSheet } from 'react-native';
import { EventSchema, EVENT } from './EventSchema';
import moment from 'moment';
const Realm = require('realm');

let i = 0;
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			eventID: 0,
			eventName: '',
			eventDesc: '',
			eventNameError: false,
			eventDescError: false,
			events: [],
			eventsList: null,
			realm: null,
			updateDataValue: false
		};
	}
	componentWillUnmount() {
		const { realm } = this.state;
		if (realm !== null && !realm.isClosed) {
			realm.close();
		}
	}

	componentDidMount() {
		Realm.open({ schema: [ EventSchema ], schemaVersion: 4 })
			.then((res) => {
				let a = [];
				for (let events of res.objects(EVENT)) {
					a.push(JSON.parse(JSON.stringify(events)));
				}
				this.setState({ realm: res, events: a }, () => {
					if (i !== 0) {
						i = parseInt(a.reverse()[0].key);
					}
				});
			})
			.catch(() => {});
	}
	saveData = () => {
		const { realm } = this.state;
		realm.write(() => {
			realm.create(EVENT, this.state.eventsList);
		});
	};
	onPressUpdate = (item) => {
		this.setState({
			eventID: parseInt(item.key),
			eventName: item.eventName,
			eventDesc: item.eventDesc,
			updateDataValue: true
		});
	};
	onPressDelete = (id) => {
		Realm.open({ schema: [ EventSchema ], schemaVersion: 4 }).then((res) => {
			res.write(() => {
				res.delete(res.objectForPrimaryKey(EVENT, id));
				let a = [];
				for (let events of res.objects(EVENT)) {
					a.push(JSON.parse(JSON.stringify(events)));
				}
				this.setState({ realm: res, events: a });
			});
		});
	};
	updateData = (id) => {
		const { realm } = this.state;
		let eventId = id - 1;
		realm.write(() => {
			var obj = realm.objects(EVENT);
			obj[eventId].eventName = this.state.eventName;
			obj[eventId].eventDesc = this.state.eventDesc;
			obj[eventId].updateAt = moment().format();
			Realm.open({ schema: [ EventSchema ], schemaVersion: 4 })
				.then((res) => {
					let a = [];
					for (let events of res.objects(EVENT)) {
						a.push(JSON.parse(JSON.stringify(events)));
					}
					this.setState({ realm: res, events: a, eventName: '', eventDesc: '' });
				})
				.catch(() => {});
		});
	};
	onSubmit = () => {
		let tempEvents = this.state.events;
		i = i + 1;
		tempEvents.push({
			key: `${i}`,
			eventName: this.state.eventName,
			eventDesc: this.state.eventDesc,
			createdAt: moment().format(),
			updateAt: moment().format()
		});
		this.setState(
			{
				eventsList: {
					key: `${i}`,
					eventName: this.state.eventName,
					eventDesc: this.state.eventDesc,
					createdAt: moment().format(),
					updateAt: moment().format()
				},
				eventDesc: '',
				eventName: ''
			},
			() => {
				this.saveData();
			}
		);
	};
	render() {
		return (
			<SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
				<View style={{ backgroundColor: 'yellow', width: '100%', alignItems: 'center' }}>
					<Text style={{ fontSize: 30, marginTop: 20 }}>React native Realm Demo</Text>
				</View>
				<View style={{ flex: 1, width: '90%', alignItems: 'center' }}>
					<View style={[ styles.inputText, { borderColor: this.state.eventNameError ? 'red' : 'black' } ]}>
						<TextInput
							placeholder="Event Name"
							value={this.state.eventName}
							style={{ fontSize: 20 }}
							onChangeText={(text) => {
								this.setState({
									eventName: text,
									eventNameError: false
								});
							}}
						/>
					</View>
					<View style={[ styles.inputText, { borderColor: this.state.eventDescError ? 'red' : 'black' } ]}>
						<TextInput
							placeholder="Event Description"
							value={this.state.eventDesc}
							style={{ fontSize: 20 }}
							onChangeText={(text) => {
								this.setState({
									eventDesc: text,
									eventDescError: false
								});
							}}
						/>
					</View>
					<TouchableHighlight
						style={[ styles.inputText, { alignItems: 'center' } ]}
						underlayColor={'red'}
						onPress={() => {
							this.setState(
								{
									eventNameError: !this.state.eventName.length,
									eventDescError: !this.state.eventDesc.length
								},
								() => {
									if (!this.state.eventNameError && !this.state.eventDescError) {
										!this.state.updateDataValue ? this.onSubmit() : this.updateData(this.state.eventID);
									}
								}
							);
						}}
					>
						<Text style={{ fontSize: 20 }}>Submit</Text>
					</TouchableHighlight>
					<FlatList
						style={{ width: '100%', marginTop: 20 }}
						data={this.state.events}
						renderItem={({ item }) => {
							return (
								<View style={{ flex: 1, flexDirection: 'row' }} key={`${item.key}`}>
									<View style={{ flex: 0.7, margin: 10 }}>
										<Text style={{ fontSize: 20 }}>{`Event Name : ${item.eventName}`}</Text>
										<Text style={{ fontSize: 20 }}>{`Event Description : ${item.eventDesc}`}</Text>
										<Text style={{ fontSize: 20 }}>{`Create At: ${moment(item.createdAt).format('DD/MM/YYYY')}`}</Text>
									</View>
									<View style={{ flex: 0.3, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
										<Text
											style={{ fontSize: 20 }}
											onPress={() => {
												this.onPressUpdate(item);
											}}
										>
											Update
										</Text>
										<Text
											style={{ fontSize: 20 }}
											onPress={() => {
												this.onPressDelete(item.key);
											}}
										>
											Delete
										</Text>
									</View>
								</View>
							);
						}}
						keyExtractor={(item) => {
							return item.key;
						}}
					/>
				</View>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	inputText: {
		height: 46,
		width: '100%',
		justifyContent: 'center',
		padding: 10,
		borderRadius: 6,
		borderWidth: 0.5,
		marginTop: 20
	}
});
