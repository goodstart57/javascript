// 영화정보 요청
// https://www.themoviedb.org/

const API_KEY = '<YOUR_THEMOVIEDB_API_KEY>'
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
const imgWidth = 500
const IMG_URL = `http://image.tmdb.org/t/p/w${imgWidth}`
// http://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg


// 1. 빈 무비 데이터를 가지고 있는 Vue 인스턴스가 만들어진다.
// 2. completed 함수가 실행되면서 movies를 불러온다.
// 3. 불러온 movies를 vue의 data 안의 movies에 할당한다.

const app = new Vue({
    el: '#main',
    data: {
        searchString: '',
        movies: [],
    },
    // caching해서 vue 인스턴스가 볼 수 있도록 한다.
    computed: {
        filteredMovies: function () {
            if (!this.searchString) { // 만약 searchString이 아무것도 없다면 (''===0)
                return this.movies
            }
        
            let searchString = this.searchString.trim().toLowerCase()

            let moviesArray = this.movies.filter(movie => {
                // movie.title에 searchString이 포함되면 반환
                return movie.title.toLowerCase().includes(searchString)
            })

            return moviesArray // 키워드로 sorting한 영화
        }
    },
    // vue 인스턴스가 초기화되고 실행되는 함수
    async created() {
        const response = await axios.get(URL)
        const movies = response.data.results

        // array의 item을 callback에서 return하는 값으로 바꿔서 반환함
        this.movies = movies.map((movie) => {
            return {
                title: movie.title,
                image: IMG_URL + movie.poster_path,
            }
        })
    }
})
