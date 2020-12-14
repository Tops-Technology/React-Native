import React, { Component } from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import  News from './modules/news';
import Constants from 'expo-constants';
import axios from 'axios';

class App extends Component{
  constructor(props){
		super(props);
		this.state = {
			news: []
		}
	}
	componentDidMount() {
    axios.get('https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=62cb43128bf34a019ea46fc9a9e42289')
			.then(res => {
				this.setState({ news: res.data.articles });
			})
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollView >
          {
            this.state.news.map((items, Id) =>
              <News key={Id} data={items} />
            )
          }
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
		marginTop: Platform.OS === 'ios' ? 28 : Constants.statusBarHeight
	}
})

export default App;