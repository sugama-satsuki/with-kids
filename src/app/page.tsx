"use client";

import { useLayoutEffect, useRef, useState } from "react";

// styles
import styles from "./page.module.css";

// components
import SideContent from "@/components/sideCaontent/sideContent";

// maplibre-gl
import type { GeoJSONSource, LngLatLike, Map, MapGeoJSONFeature, MapMouseEvent, MapOptions } from 'maplibre-gl';
import maplibregl from 'maplibre-gl';


declare global {
  interface Window {
    geolonia: {
      Map: new (options: MapOptions) => Map;
    }
  }
}


const DEFAULT_CENTER: [number, number] = [134.06766479370378, 34.31563944814572];
const DEFAULT_ZOOM: number = 12;

export default function Home() {

  const mapContainer = useRef<HTMLDivElement>(null);                                  // mapコンテナーの参照を取得
  const [mapObj, setMapObj] = useState<Map | null>(null);                                   // mapの状態を管理


  // mapを描画
  useLayoutEffect(() => {
    const mapStyle = fetch('/style.json').then((res) => res.json());

    // mapオブジェクトを生成
    // const map: maplibregl.Map = new window.geolonia.Map({
    //   container: 'map',
    //   style: mapStyle as never,
    //   minZoom: 10,
    //   maxZoom: 17.5,
    //   hash: false,
    //   center: DEFAULT_CENTER,
    //   zoom: DEFAULT_ZOOM,
    // })
    // if (!map) return;

    // map.on('load', () => {
    //   setMapObj(map);
    // });

    // return () => {
    //   map.remove();
    //   setMapObj(null);
    // };
  }, [])


  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <SideContent />
          <div className={styles.map}>
            <div
              id="map"
              className={styles.map}
              ref={mapContainer}
              data-lang="ja"
              data-navigation-control="off"
              data-gesture-handling="off"
            ></div>
          </div>
        </div>
      </div>
    </main>
  );
}
