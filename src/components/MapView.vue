<template>
  <div ref="mapElement"></div>
</template>

<script lang="ts">
import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { onMounted, ref } from 'vue'
export default {
  setup() {
    const mapElement = ref(null)
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN as string

    onMounted(() => {
      const map = new mapboxgl.Map({
        container: mapElement.value!,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [3.2493399, 50.9349054],
        zoom: 12,
        projection: {name: 'globe'},
      })
      map.on('style.load', () => {
        map.setFog({})
      })
    const marker = new mapboxgl.Marker()
    .setLngLat([3.2493399, 50.9349054])
    .addTo(map);
    })
    return {
      mapElement,
    }
  },
}
</script>
