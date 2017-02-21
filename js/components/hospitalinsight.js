import React, {Component} from 'react';
import {Text,
  		View} from 'react-native';
import styles from '../styles/styles';
import {stats} from '../api/fetch_data';



export default class Insight_hospital extends Component{

render(){
	return(
					<View>
					
						<View style={styles.insight_component}>		
							<Text style={styles.header_insight}>HOSPITALS SELECTED</Text>
							{this.hospital_no()}
						</View>

						<View style={styles.insight_component}>
							<Text style={styles.header_insight}>BED CAPACITY </Text>
							{this.bed_capacity()}
				        </View>

				      	<View style={styles.insight_component}>
							<Text style={styles.header_insight}>PERSONNEL</Text>
							{this.personnel()}
						</View>

					</View>



	);

}
hospital_no(){
	return(
			<View style={styles.insight_componentview}>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.hospital[0]}</Text><Text style={styles.text_fade}>OUT OF {this.props.insightstats.hospital[1]}</Text></View>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.hospital[2]}%</Text><Text style={styles.text_fade}>OF TOTAL</Text></View>
			</View>
		);
}
bed_capacity(){
	return(
			<View style={styles.insight_componentview}>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.bed[0]}<Text style={styles.text_fadebig}>/{this.props.insightstats.bed[1]}</Text></Text><Text style={styles.text_fade}>BEDS IN TOTAL</Text></View>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.bed[2]}%</Text><Text style={styles.text_fade}>OF TOTAL</Text></View>
			</View>

		);
}
personnel(){
	return(
			<View style={styles.insight_componentview}>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.personnel[0]}<Text style={styles.text_fadebig}>/{this.props.insightstats.personnel[1]}</Text></Text><Text style={styles.text_fade}>PERSONNEL</Text></View>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.personnel[2]}%</Text><Text style={styles.text_fade}>OF TOTAL</Text></View>
			</View>

		);
}


}