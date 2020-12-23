<script>
</script>
<style>
  .App {
    font-size: 16px;
    display: block;
    @apply text-primary;
    @apply font-latto;
  }

    h1 {
    /* font-size: 6rem; */
    @apply text-6xl;
  }
  
  h2 {
    /* font-size: 3rem; */
    @apply text-4xl;
  }
  
  h3 {
    /* font-size: 1.5rem; */
    @apply text-2xl;
  }

  a {
    @apply no-underline;
  }

  .filter-drop-shadow {
    filter: drop-shadow(10px 8px 4px rgba(0, 0, 0, 0.25));
  }
</style>
<div class="App">
    <div class="grid grid-flow-col grid-cols-layout grid-rows-layout h-screen p-8">
        <div class="col-start-1 col-end-2 row-start-1 row-end-2 flex flex-col-reverse">
        <a href="https://twitter.com/jasonericdavis"><img class="w-12" src="Twitter_Logo_Blue.png" /></a>
        <a href="https://github.com/jasonericdavis"><img class="w-12"  src="GitHub-Mark-120px-plus.png" /></a>
        </div>
        <div class="col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-evenly">
        <div class="text-center">
            <h1>@JasonEricDavis</h1>
            <hr class="border-1 border-solid border-current"/>
            <h2>Software Engineer</h2>
        </div>
        <div class="filter-drop-shadow"><img src="memoji.png" /></div>
        </div>
        <div class="col-start-1 col-end-3 row-start-2 row-end-3">
        <ul class="flex items-center justify-around">
            <li>
            <h3><a href="">About</a></h3>
            </li>
            <li>
            <h3><a href="">Experience</a></h3>
            </li>
            <li>
            <h3><a href="">Recommmendations</a></h3>
            </li>
            <li>
            <h3><a href="">Contact</a></h3>
            </li>
        </ul>
        </div>
    </div> 
</div>
