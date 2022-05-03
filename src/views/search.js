import { searchByName } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const searchTemplate = (album) => html`
<section id="searchPage">
            <h1>Search by Name</h1>

            <div class="search">
                <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
                <button class="button-list">Search</button>
            </div>

            <h2>Results:</h2>

            <!--Show after click Search button-->
            <div class="search-result">
                <!--If have matches-->
                <div class="card-box">
                    <img src=${album.imgUrl}>
                    <div>
                        <div class="text-center">
                            <p class="name">Name: ${album.name}</p>
                            <p class="artist">Artist: ${album.artist}</p>
                            <p class="genre">Genre: ${album.genre}</p>
                            <p class="price">Price: $${album.price}</p>
                            <p class="date">Release Date: ${album.releaseDate}</p>
                        </div>
                        <div class="btn-group">
                            <a href="/details/${album._id}" id="details">Details</a>
                        </div>
                    </div>
                </div>

                <!--If there are no matches-->
                <p class="no-result">No result.</p>
            </div>
        </section>`;

        export function searchPage(ctx) {    
            ctx.render(searchTemplate(onSubmit));
    
            async function onSubmit(event) {
                event.preventDefault();
    
                const formData = new FormData(event.target);
                
                const search = formData.get('search').trim();

               const userdata = getUserData();
               if(!userdata) {
                document.getElementById('details').style.display = 'none'; 
               }
            }
        }