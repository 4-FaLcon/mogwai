function topMenu() {

return `
<header id="navigation" class="p-navigation is-dark">
  <div class="p-navigation__row">
    <div class="p-navigation__banner">
      <div class="p-navigation__logo">
        <a class="p-navigation__item" href="..">
          <img class="p-navigation__image" src="https://assets.ubuntu.com/v1/94d962aa-vanilla_white-orange_hex.svg" style="height:1.5rem" alt="Vanilla framework">
        </a>
      </div>
      <ul class="p-navigation__items">
        <li class="p-navigation__item">
          <button class="js-search-button p-navigation__link--search-toggle">
            <span class="p-navigation__search-label">Search</span>
          </button>
        </li>
        <li class="p-navigation__item">
          <button class="js-menu-button p-navigation__link">Menu</button>
        </li>
      </ul>
    </div>
    <nav class="p-navigation__nav" aria-label="Main">
      <ul class="p-navigation__items">
        <li class="p-navigation__item is-selected"><a class="p-navigation__link" href=".">Docs</a></li>
        <li class="p-navigation__item"><a class="p-navigation__link" href="examples">Examples</a></li>
        <li class="p-navigation__item"><a class="p-navigation__link" href="accessibility">Accessibility</a></li>
        <li class="p-navigation__item"><a class="p-navigation__link" href="browser-support">Browser support</a></li>
        <li class="p-navigation__item"><a class="p-navigation__link" href="contribute">Contribute</a></li>
      </ul>
      <ul class="p-navigation__items">
        <li class="p-navigation__item">
          <button class="js-search-button p-navigation__link--search-toggle">
            <span class="p-navigation__search-label">Search</span>
          </button>
        </li>
      </ul>
      <div class="p-navigation__search">
        <form class="p-search-box" action="/docs/search">
          <input type="search" id="search-docs" class="p-search-box__input" name="q"  placeholder="Search the docs" title="Search the documentation"  autocomplete="on" aria-label="Search the docs" required />
          <button type="reset" id="search-docs-reset" class="p-search-box__reset u-no-margin--right" name="close"><i class="p-icon--close">Clear input</i></button>
          <button type="submit" class="p-search-box__button" name="submit"><i class="p-icon--search">Submit</i></button>
        </form>
      </div>
    </nav>
  </div>
  <div class="p-navigation__search-overlay"></div>
</header>
		`;

}
