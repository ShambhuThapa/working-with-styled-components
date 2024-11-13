import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { OSM, Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import Circle from 'ol/geom/Circle';
import Style from 'ol/style/Style';
import Stroke from 'ol/style/Stroke';
import { useGetLocations } from '../hooks/api/getLocations';
import styled from 'styled-components';

const MapDiv = styled.div`
  width: 100%;
  height: 100vh;
`;

const MapComponent: React.FC = () => {
  const { data, isLoading } = useGetLocations();
  const coordinates = data?.locations;

  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const baseLayer = new TileLayer({
        source: new OSM(),
      });

      const initialView = new View({
        center: fromLonLat([126.9784, 37.5665]), // Seoul City Hall lat lon coordinates
        zoom: 16,
      });

      const initialMap = new Map({
        target: mapRef.current,
        layers: [baseLayer],
        view: initialView,
      });

      if (coordinates && coordinates.length > 0) {
        // Create a vector source
        const vectorSource = new VectorSource();

        // Add circle features for each coordinate
        coordinates.forEach((coord: number[]) => {
          const circleCoords = fromLonLat([coord[1], coord[0]]);
          const circleFeature = new Feature({
            geometry: new Circle(circleCoords, 40), // Radius in meters
          });

          // Style the circle
          circleFeature.setStyle(
            new Style({
              stroke: new Stroke({
                color: 'blue',
                width: 2,
              }),
            })
          );

          // Add the feature to the vector source
          vectorSource.addFeature(circleFeature);
        });

        // Create a vector layer
        const vectorLayer = new VectorLayer({
          source: vectorSource,
        });

        // Add the vector layer to the map
        initialMap.addLayer(vectorLayer);
      }

      return () => initialMap.setTarget(undefined);
    }
  }, [coordinates]);

  if (isLoading) return null;

  return <MapDiv ref={mapRef}></MapDiv>;
};

export default MapComponent;
