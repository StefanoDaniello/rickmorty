import {reactive} from 'vue';

export const store = reactive({
    apiUrl: 'https://rickandmortyapi.com/api/',
    endPoint: {
        "characters": "character/?name=rick&status=alive",
        "locations": "location",
        "episodes": "episode"
      },
      characters: [],
      total: 0,
      loading: false,
      error:{
        message: null
      }
});