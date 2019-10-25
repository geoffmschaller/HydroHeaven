import React from 'react';
import {
	GoogleMap, withGoogleMap, withScriptjs, Marker,
} from 'react-google-maps';
import PropTypes from 'prop-types';

class MapBox extends React.Component {
	constructor(props) {
		super(props);
		this.map = () => (
			<GoogleMap defaultZoom={14} defaultCenter={{ lat: this.props.lat, lng: this.props.lng }}>
				<Marker position={{ lat: this.props.lat, lng: this.props.lng }} />
			</GoogleMap>
		);
		this.WrappedMap = withScriptjs(withGoogleMap(this.map));
	}


	render() {
		return (
			<>
				<this.WrappedMap
					googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAz89pEyVfEwOndrtDhoo9ubaR_agBv-1A"
					loadingElement={<p />}
					containerElement={<div style={{ height: '400px', borderRadius: '10px' }} />}
					mapElement={<div style={{ height: '100%', borderRadius: '10px' }} />}
				/>
			</>
		);
	}
}

MapBox.propTypes = {
	lat: PropTypes.number.isRequired,
	lng: PropTypes.number.isRequired,
};

export default MapBox;
