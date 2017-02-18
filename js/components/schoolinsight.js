import React, {Component} from 'react';
import {Text,
  		View} from 'react-native';
import styles from '../styles/styles';



export default class Insight_school extends Component{

render(){
	return(
					<View>
					
						<View style={styles.insight_component}>		
							<Text style={styles.header2}>SCHOOLS SELECTED</Text>
							{this.school_selected()}
						</View>

						<View style={styles.insight_component}>
							<Text style={styles.header2}>STUDENTS </Text>
							{this.students()}
				        </View>

				      	<View style={styles.insight_component}>
							<Text style={styles.header2}>PERSONNEL</Text>
							{this.personnel()}
						</View>

					</View>



	);

}

school_selected(){
	return(
			<View style={styles.insight_componentview}>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.school[0]}<Text style={styles.text_fadebig}>/{this.props.insightstats.school[1]}</Text></Text><Text style={styles.text_fade}>SCHOOLS</Text></View>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.school[2]}%</Text><Text style={styles.text_fade}>OF TOTAL</Text></View>
			</View>
		);
}
students(){
	return(
			<View style={styles.insight_componentview}>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.students[0]}<Text style={styles.text_fadebig}>/{this.props.insightstats.students[1]}</Text></Text><Text style={styles.text_fade}>STUDENTS</Text></View>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.students[2]}%</Text><Text style={styles.text_fade}>OF TOTAL</Text></View>
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