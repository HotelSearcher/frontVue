
<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="#">HotelSearcher</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Главная</router-link>
                        </li>
                        <li class="nav-item">
                          <router-link class="nav-link" to="/owner">Отельерам</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <RouterView/>
    </div>
</template>

<script>


export default {
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>