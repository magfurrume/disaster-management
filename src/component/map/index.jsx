import React, { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import LayerGroup from "ol/layer/Group";
import OSM from "ol/source/OSM";
import "ol/ol.css";
import "./map.css";
import "ol-layerswitcher/src/ol-layerswitcher.css";
import LayerSwitcher from "ol-layerswitcher";
import SatelliteMap from "ol/source/XYZ";
import XYZ from "ol/source/XYZ";

const GoogleMap = new TileLayer({
  title: "Google",
  type: "base",
  source: new XYZ({
    url: "http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}",
  }),
});
const SatelliteMapp = new TileLayer({
  title: "Satellite",
  type: "base",

  source: new SatelliteMap({
    url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    maxZoom: 23,
  }),
  visible: false,
});
const OsmBase = new TileLayer({
  source: new OSM(),
  title: "OSM",
  type: "base",
});

const OpenLayersMap = () => {
  const mapRef = useRef();
  const [map, setMap] = useState();

  useEffect(() => {
    const map = new Map({
      layers: [
        new LayerGroup({
          title: "Base Map",
          name: "Base",
          fold: "close",
          layers: [SatelliteMapp, GoogleMap, OsmBase],
        }),
      ],
      target: mapRef.current,
      view: new View({
        center: [89.53714770430558, 22.854432879729718],
        zoom: 11,
        projection: "EPSG:4326",
      }),
    });

    setMap(map);
  }, []);

  const showMap = () => {
    if (map != null || map != undefined) {
      const mapElement = document.getElementById("map");
      if (mapElement.childElementCount) {
        while (mapElement.childElementCount > 1) {
          mapElement.removeChild(mapElement.firstElementChild);
        }
      }
    }
  };
  useEffect(() => {
    showMap();
    /* *********** Layer Switcher ********** */
    const layerSwitcher = new LayerSwitcher();
    if (map != null || map != undefined) {
      map.addControl(layerSwitcher);
    }
    /* *********** Overlay ********** */
  }, [map]);

  return (
    <div className="h-100vh">
      <div ref={mapRef} className="map" id="map" style={{ width: "100%" }} />
    </div>
  );
};

export default OpenLayersMap;
