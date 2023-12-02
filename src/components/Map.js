import { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 37.7749, // to adjust the latitude
          lng: -122.4194, // to adjust the longitude
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBGCs1b8NQfNn3N1Aomk2iSsW17zFCUw1M",
})(MapContainer);
