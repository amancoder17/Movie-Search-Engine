const form= document.querySelector('form');
const list= document.querySelector('#list');
const inp=document.querySelector('#inp');
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const inptext=inp.value;
    inp.value='';

    getMovie(inptext);
});

function getMovie(searchText) {
    const URL= `https://api.tvmaze.com/search/shows?q=${searchText}`
    list.innerText ='';
    axios.get(URL)
    .then((res)=>{
        //console.log(res.data);
        const data = res.data;
        data.forEach(obj => {
            // console.log(obj.show.image.medium);
            const image = document.createElement('img');
            image.setAttribute('src',obj.show.image.medium);
            image.style.margin='10px';
            list.append(image);
        });
    })
    .catch(err=>console.log(err));
}