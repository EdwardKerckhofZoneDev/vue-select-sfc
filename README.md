# vue-select-sfc ![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/EdwardKerckhofZoneDev/vue-select-sfc?include_prereleases&style=flat-square) ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/EdwardKerckhofZoneDev/vue-select-sfc?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/min/vue-select-sfc?style=flat-square) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/vue-select-sfc?style=flat-square) ![GitHub all releases](https://img.shields.io/github/downloads/EdwardKerckhofZoneDev/vue-select-sfc/total?style=flat-square) ![NPM](https://img.shields.io/npm/l/vue-select-sfc?style=flat-square)

```
A simple, fast custom Vue Select component. Supports keyboard functionality and searching.
```

- ZERO dependencies
- SSR Support
- ~7kb component size
- Fast
- Simple
- Easy styling

### Install

```bash
yarn add vue-select-sfc

# or use npm

npm install vue-select-sfc
```

### Registering

Globally

```javascript
import Vue from 'vue'
import VueSelectSfc from 'vue-select-sfc'

Vue.component('vue-select-sfc', VueSelectSfc)
```

Component

```javascript
import VueSelectSfc from 'vue-select-sfc'

export default {
  components: {
    VueSelectSfc,
  },
  //...
}
```

Using it

```html
<vue-custom-select
  @selectionChanged="changeSelected"
  :options="options"
  label="Choose your country"
/>
```

The @selectionChanged is an event emitted from the component with the new value, leaving it up to you what to do with it. Using the 'changeSelected' method or any method name you want you can handle the emitted event.

For example:

```javascript
data() {
  return {
    selected: ''
  }
},
methods: {
  changeSelected(selected) {
    console.log(selected)
    this.selected = selected
  }
}
```

The options array is simply an array of strings you want to display as your options.

For example:

```javascript
data() {
  return {
    options: ['Option 1', 'Option 2', 'Option 3']
  }
}
```

## NUXT SSR

Add plugin to nuxt.config.ts

```javascript
export default {
  //...
  plugins: [{ src: '~/plugins/vue-select-sfc', mode: 'client' }],
  //...
}
```

Usage

```html
<client-only>
  <vue-select-sfc
    @selectionChanged="changeSelected"
    :options="options"
    label="Choose your country"
  />
</client-only>
```

### CSS customisation

```scss
.your-container {
  .vss-select {
    .vss-label {
    }

    .vss-container {
      &::after {
      }

      &.vss--active {
      }

      .vss__selected {
      }

      .vss__search {
      }
    }

    .vss__dropdown {
      .vss__dropdown-option {
        &.vss__dropdown-option--selected {
        }
      }
    }
  }
}
```

### License

[MIT](https://github.com/EdwardKerckhofZoneDev/vue-select-sfc/blob/main/LICENSE)
