const search = () => {
  const view = `
    <div class="buscador__icon-lupa"></div>
    <input type="text" value="" placeholder="Buscar" class="buscador__text">`;

  const cSearch = document.createElement("div");
  cSearch.classList.add("c-buscador");
  cSearch.insertAdjacentHTML("afterbegin", view);

  const buttonSearch = cSearch.querySelector(".buscador__icon-lupa");
  buttonSearch.addEventListener("click", () => {
    console.log("buscando");
  });

  return cSearch;
};

export { search };

{
  /* <div class="c-buscador">
      <div class="buscador__icon-lupa"></div>
      <input type="text" value="" placeholder="Buscar" class="buscador__text">
      
</div> */
}
