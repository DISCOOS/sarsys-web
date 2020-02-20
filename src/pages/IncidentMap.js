import React, { useState, useEffect, useRef, useContext } from "react";
import L from "leaflet";
import { Draw } from "leaflet-draw";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import MapIcon from "@material-ui/icons/Map";
import FilterListIcon from "@material-ui/icons/FilterList";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import Drawer from "@material-ui/core/Drawer";
import getLocation from "../Services/MapProvider";

import { MapContext } from "../App.js";

function Map() {
  const mapRef = useRef(null);

  const mapContext = useContext(MapContext);

  const [state, setState] = React.useState({
    bottomDrawer: false
  });

  let topo4 = L.tileLayer(
    "https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}",
    {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  );

  let toporaster = L.tileLayer(
    "https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=toporaster3&zoom={z}&x={x}&y={y}",
    {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  );

  let baseMaps = {
    Topo4: topo4,
    Toporaster: toporaster
  };

  useEffect(() => {
    mapRef.current = L.map("map", {
      center: mapContext.center,
      zoom: mapContext.zoom,
      zoomControl: false,
      layers: [getBasemap(mapContext.basemap)]
    });
    L.control.layers(baseMaps).addTo(mapRef.current);

    return () => {
      // TODO:
      // Cleanup tracking etc.
    };
  }, []);

  let zoomOutClick = e => mapRef.current.zoomOut();

  let zoomInClick = e => mapRef.current.zoomIn();

  // let overlayMaps = {
  //     "Dekning Nødnett Håndholdt 1": nodnett_hh_1,
  //     "Dekning Nødnett Håndholdt 2": nodnett_hh_2,
  //     "Dekning Nødnett Håndholdt 3": nodnett_hh_3,
  //     "Dekning Nødnett Bil 1": nodnett_bil_1,
  //     "Dekning Nødnett Bil 2": nodnett_bil_2,
  //     "Dekning Nødnett Bil 3": nodnett_bil_3,
  // };

  // let drawnItems = new L.FeatureGroup();
  // this.map.addLayer(drawnItems);
  // let drawControl = new L.Control.Draw({
  //     edit: {
  //         featureGroup: drawnItems
  //     }
  // });
  // this.map.addControl(drawControl);
  // window.map = this.map;
  // this.map.on(L.Draw.Event.CREATED, (e) => {
  //     let type = e.layerType,
  //         layer = e.layer;
  //     if (type === 'marker') {
  //         // Do marker specific actions
  //     }
  //     // Do whatever else you need to. (save to db; add to map etc)
  //     this.map.addLayer(layer);
  // });

  //drawnItems.addTo(this.map);

  let selectMapClick = (side, open) => event => {
    console.log("Bottom");
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    console.log("Bottom 2");
    setState({ bottomDrawer: open });
  };

  let locateClick = e => {
    getLocation();
  };

  return (
    <>
      <div id="map"></div>
      <div className="mapbuttonscontainer">
        <Fab className="mapbutton">
          <FilterListIcon />
        </Fab>
        <Fab
          className="mapbutton"
          onClick={selectMapClick("bottomDrawer", true)}
        >
          <MapIcon />
        </Fab>
        <Fab className="mapbutton" onClick={zoomInClick}>
          <AddIcon />
        </Fab>
        <Fab className="mapbutton" onClick={zoomOutClick}>
          <RemoveIcon />
        </Fab>
        <Fab className="mapbutton" onClick={locateClick}>
          <MyLocationIcon />
        </Fab>
      </div>
      <Drawer
        anchor="bottom"
        open={state.bottomDrawer}
        onClose={selectMapClick("bottomDrawer", false)}
      >
        <h1>Test</h1>
      </Drawer>
    </>
  );
}

export default Map;

function getBasemap(map) {
  let topo4 = L.tileLayer(
    "https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=topo4&zoom={z}&x={x}&y={y}",
    {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  );

  let toporaster = L.tileLayer(
    "https://opencache.statkart.no/gatekeeper/gk/gk.open_gmaps?layers=toporaster3&zoom={z}&x={x}&y={y}",
    {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  );

  switch (map) {
    case "topo4":
      return topo4;
    case "toporaster":
      return toporaster;
    default:
      return topo4;
  }
}
