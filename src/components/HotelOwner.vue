<script setup>
 import { ref } from 'vue';
 import {MapboxMap, MapboxMarker} from '@studiometa/vue-mapbox-gl'

  // MaboxGeocoder stylesheet needs to be imported manually.
  import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';

  const control = ref();

</script>

<template>
    <div class="container">
        <form class="row" @submit.prevent="search_address">
            <div class="col">
                <input type="text" v-model="form.address" class="form-control" placeholder="Москва Красная Площадь">
            </div>
            <div class="col">
                <button type="submit" class="btn btn-primary">Найти</button>
            </div>

        </form>
        <br>
         <MapboxMap
             access-token="pk.eyJ1Ijoic2V3dmthIiwiYSI6ImNrOWI5aHlyajAxdTAzZnBnODB2ZjEybXgifQ.cBcfmnAQWWi1oPQ11JNUrg"
             map-style="mapbox://styles/mapbox/streets-v11"
             :zoom="map.zoom"
             :center="map.center"
             style="height: 40vh;width: 60vh"
         >
             <mapbox-marker v-if="marker.enabled" :lng-lat="marker.lng_lat"></mapbox-marker>
         </MapboxMap>
        <br>
        <button v-if="marker.enabled" type="submit" class="btn btn-primary" @click="confirm_address">Геопозиция Верна</button>
    </div>
</template>

<script>
  export default {
     data() {
        return {
            form: {
                address: ""
            },
            marker: {
                lng_lat: [0, 0],
                enabled: false
            },
            map: {
                center: [0, 0],
                zoom: 1
            }

        }
     },
     methods: {
         search_address(event) {
         console.log(this.form.address)
             const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
                 + this.form.address +
                 ".json?access_token=pk.eyJ1Ijoic2V3dmthIiwiYSI6ImNrOWI5aHlyajAxdTAzZnBnODB2ZjEybXgifQ.cBcfmnAQWWi1oPQ11JNUrg"
            fetch(url)
                .then(async response => {
                    const data = await response.json()
                    if (data){
                        this.marker.lng_lat = data.features[0].geometry.coordinates
                        this.marker.enabled = true
                        this.map.center = data.features[0].geometry.coordinates
                        this.map.zoom = 10
                    }
                    // this.hotels = data.hotels
                })
        },
        confirm_address(event) {
             // TODO Тут отправка данных на бэк координаты ну и название места наверное
        }
     }
  }
</script>