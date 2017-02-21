import React from 'react';

import {
  View,
  Text
} from 'react-native';

import Mapbox,{
  MapView
} from 'react-native-mapbox-gl';

import FeatureDetails from './feature_details';

import styles from '../styles/styles';

Mapbox.setAccessToken('pk.eyJ1IjoibmlyYWJwdWRhc2FpbmkiLCJhIjoiOVRtcWxvTSJ9.Ubh6aFZDqx9HHYU1hPxH9Q');

var Map = React.createClass({
  getInitialState: function(){
    return{
      detailsVisible: false,
      attributes: this.props.attributes,
      selectedFeature: 'noselection'
    }
  },
  render: function(){
    return <View style={styles.mapContainer}>
    <FeatureDetails visible={this.state.detailsVisible}
    onClose={this.detailsClosed}
    data={this.state.attributes}
    featureId={this.state.selectedFeature}
    amenity={this.props.amenity} />
    <MapView style={styles.map}
    ref={map => { this._map = map; }}
    initialCenterCoordinate={{latitude:28.2156,longitude:83.9961}}
    initialZoomLevel={11}
    showUserLocation={true}
    logoIsHidden={true}
    annotations={this.props.annotations}
    onOpenAnnotation={this.markerTapped}
    onRightAnnotationTapped={this.annotationTapped}>
    </MapView>
    </View>
  },
  markerTapped: function(marker){
    this._map.setZoomLevel(17, animated = true);
    this._map.setCenterCoordinate(marker.latitude, marker.longitude, animated = true);
  },
  annotationTapped: function(marker){
    this.setState({
      selectedFeature: marker.id,
      detailsVisible: true
    });
  },
  detailsClosed: function(){
    //alert("Modal has been closed.");
    this.setState({
      detailsVisible: false
    });
  }
});

export default Map;
