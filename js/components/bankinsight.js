import React, {Component} from 'react';
import {Text,
  		View} from 'react-native';
import styles from '../styles/styles';



export default class Insight_hospital extends Component{

render(){
	return(
					<View>
					
						<View style={styles.insight_component}>		
							<Text style={styles.header2}>BANKS SELECTED</Text>
							{this.banks_selected()}
						</View>

						<View style={styles.insight_component}>
							<Text style={styles.header2}>ATM COVERAGE </Text>
							{this.atm_coverage()}
				        </View>

					</View>



	);

}
banks_selected(){
	return(
			<View style={styles.insight_componentview}>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.bank[0]}<Text style={styles.text_fadebig}>/{this.props.insightstats.bank[1]}</Text></Text><Text style={styles.text_fade}>BANKS</Text></View>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.bank[2]}%</Text><Text style={styles.text_fade}>OF TOTAL</Text></View>
			</View>
			
		);
}
atm_coverage(){
	return(
			<View>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.atm[0]}<Text style={styles.text_fadebig}>/{this.props.insightstats.atm[1]}</Text></Text><Text style={styles.text_fade}>BANKS</Text></View>
				<View><Text style={styles.text_highlight}>{this.props.insightstats.atm[2]}%</Text><Text style={styles.text_atm}>OF ALL BANK OFFICES IN ALL WARD</Text></View>
			</View>

		);
}
}