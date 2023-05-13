<template>
    <div>
        <div class="container">
            <form class="row g-3" @submit.prevent="onSubmit">
                <div class="col-md-10">
                    <label for="inputCity" class="form-label">Город</label>
                    <input type="text" class="form-control" v-model="form.city" name="inputCity" id="inputCity"
                           placeholder="Новосибирск">
                </div>
                <div class="col-md-2">
                    <label for="inputVisitorsCnt" class="form-label">Кол-во людей</label>
                    <input type="number" class="form-control" v-model="form.visitors" name="inputVisitorsCnt"
                           id="inputVisitorsCnt">
                </div>
                <div class="col-md-6">
                    <label for="inputCheckIn" class="form-label">Дата прибытия</label>
                    <input type="date" class="form-control" v-model="form.checkIn" id="inputCheckIn">
                </div>
                <div class="col-md-6">
                    <label for="inputCheckOut" class="form-label">Дата отбытия</label>
                    <input type="date" class="form-control" v-model="form.checkOut" name="inputCheckOut" id="inputCheckOut">
                </div>

                <button id="find-btn" class="btn btn-primary">Искать</button>
            </form>
        </div>
        <br>
        <div class="container">
            <div class="card" v-for="hotel in hotels">
                <h5 class="card-header">
                    <svg v-for="star in hotel.stars" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                    </svg>
                </h5>

                <div class="card-body">
                    <h5 class="card-title">
                        <a href="{{ hotel.min_price[1] }}">Минимальная цена:</a> {{ hotel.min_price[0] }}
                    </h5>
                    <div class="col-md-5 text-truncate" v-for="singleLink in hotel.link">
                        <a href="{{ singleLink[1] }}">{{ singleLink[0] }}</a>
                    </div>
                    <br>
                    <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapse_info_{{ hotel.id }}" role="button"
                       aria-expanded="false" aria-controls="collapseExample">Подробнее</a>
                    <div style="margin-top: 2vh" class="collapse" id="collapse_info_{{ hotel.id }}">
                        <div class="card card-body">
                            <p>{{ hotel.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                city: '',
                visitors: 0,
                checkIn: '',
                checkOut: ''
            },
            hotels: [],
            map: null
        }
    },
    methods: {
        onSubmit(event) {
            console.log(this.form.city)
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.form)
            };
            fetch("http://localhost:5000/", requestOptions)
                .then(async response => {
                    const data = await response.json()

                    console.log(data)
                    this.hotels = data.hotels
                })
        }
    }
}
</script>