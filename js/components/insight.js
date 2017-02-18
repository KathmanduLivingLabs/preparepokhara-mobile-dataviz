import React, {Component} from 'react';
import {Text,
 		Button,
  		ScrollView,
  		Modal,
  		View} from 'react-native';
import styles from '../styles/styles';
import Insight_hospital from './hospitalinsight';
import Insight_school from './schoolinsight';
import Insight_bank from './bankinsight';



export default class Insight_main extends Component{
render(){
	return(
		<View>
		<View style={styles.container}>
		<Modal
      animationType={"slide"}
      transparent={false}
      visible={this.props.visible}
      onRequestClose={this.props.onInshightsClosed} >
				
			<View style={styles.header}>
				<Text style={styles.header1}>INSIGHTS</Text>
			</View>

			<View style={styles.insight_maincomponent}>

				<ScrollView>
					
					
					
					{this.filter_type()}


				    

		         	
		       </ScrollView>

	        </View>

	        <View  style={styles.filter_button}>
		         <Button
		          onPress={this.props.onInshightsClosed}
		          title="CLOSE"
				  color="#10A0E6"
				  accessibilityLabel="Close Insight"
				/>
			</View>
		</Modal>
		</View>
		</View>

	);
	}

	filter_type(){

		switch(this.props.amenity){

        case 'hospital':
          return <Insight_hospital insightstats={this.props.insightstats}/>;
          break;
        case 'school':
          return <Insight_school insightstats={this.props.insightstats}/>;
          break;
        case 'bank':
          return <Insight_bank insightstats={this.props.insightstats}/>;
          break;
        default :
          return 'NA';


	}
}
}