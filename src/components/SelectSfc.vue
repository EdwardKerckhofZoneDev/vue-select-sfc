<template>
  <div class="vss-select">
    <span v-if="label !== ''" class="vss-label">{{ label }}</span>
    <div :class="{ 'vss--active': openSelect }" class="vss-container">
      <span
        v-show="!openSelect"
        class="vss__selected"
        @click="handleOpen(true)"
        >{{ selectedOption }}</span
      >
      <input
        ref="customSelectInputSearch"
        v-model="searchQuery"
        type="text"
        name="searchOption"
        class="vss__search"
        :placeholder="selectedOption"
        @keyup="handleCustomSelectSearch($event)"
      />
    </div>
    <ul v-if="openSelect" class="vss__dropdown">
      <li
        v-for="option in formattedOptions"
        :key="option.index"
        :ref="'option' + option.index"
        :class="{ 'vss__dropdown-option--selected': option.selected }"
        @click="setIndex(option.index, $event)"
        class="vss__dropdown-option"
      >
        {{ option.option }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'VueSelectSfc',

  props: {
    options: {
      type: Array,
      default: () => {
        return ['Option 1', 'Option 2', 'Option 3']
      },
    },
    label: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    selectedIndex: -1,
    startIndex: -1,
    openSelect: false,
    mousedown: false,
    searchQuery: '',
    localOptions: [{ option: '', index: 0, selected: false }],
  }),

  computed: {
    selectedOption(): string {
      const selected = this.options[this.selectedIndex] as string
      this.$emit('selectionChanged', selected)
      return selected
    },
    formattedOptions(): Array<object> {
      return this.localOptions
    },
  },

  created() {
    window.addEventListener('click', (e: MouseEvent) => {
      if (!this.$el.contains(e.target as Node)) {
        this.handleOpen(false)
      }
    })
  },

  mounted() {
    this.handleLocalOptions()
  },

  methods: {
    setIndex(index: number, $event?: MouseEvent) {
      this.selectedIndex = index
      if ($event) {
        // MouseClick
        this.handleLocalOptions()
      }
      this.handleOpen(false)
      this.resetIndex()
      this.handleClasses()
    },

    handleOpen(val: boolean) {
      this.openSelect = val
      if (this.openSelect)
        (this.$refs.customSelectInputSearch as HTMLInputElement).focus()
      else this.searchQuery = ''
    },

    handleCustomSelectSearch($event: KeyboardEvent) {
      switch ($event.code) {
        case 'Escape':
          this.handleOpen(false)
          ;(this.$refs.customSelectInputSearch as HTMLInputElement).blur()
          break

        case 'Enter':
          this.setIndex(this.selectedIndex)
          this.handleLocalOptions()
          this.handleClasses()
          ;(this.$refs.customSelectInputSearch as HTMLInputElement).blur()
          break

        case 'ArrowUp': {
          this.handleKeyboardArrow('up')
          break
        }

        case 'ArrowDown': {
          this.handleKeyboardArrow('down')
          break
        }

        default:
          this.handleOpen(true)
          this.handleLocalOptions()
          this.resetIndex()
          this.localOptions = []
          this.options.forEach((option, index) => {
            if (
              (option as string).toLocaleLowerCase().includes(this.searchQuery)
            ) {
              this.localOptions.push({
                option: option as string,
                index,
                selected: false,
              })
            }
          })
          break
      }
    },

    handleLocalOptions() {
      this.localOptions = []
      this.options.forEach((option, index) => {
        this.localOptions.push({
          option: option as string,
          index,
          selected: false,
        })
      })
    },

    handleClasses() {
      this.localOptions.forEach(opt => {
        opt.selected = false
        if (opt.option.toLowerCase() === this.selectedOption.toLowerCase()) {
          opt.selected = true
        }
      })
    },

    handleKeyboardArrow(action: string) {
      let newIndex = -1
      const up = action === 'up'
      const down = action === 'down'

      this.localOptions.forEach((opt, i) => {
        if (opt.index === this.selectedIndex) {
          if (up && this.localOptions[i - 1]) {
            newIndex = this.localOptions[i - 1].index
          } else if (down && this.localOptions[i + 1]) {
            newIndex = this.localOptions[i + 1].index
          }
        }
      })

      if (newIndex === -1) {
        newIndex = this.localOptions[0].index
      }

      this.startIndex = newIndex
      this.setIndex(this.startIndex)
      this.handleOpen(true)
    },

    closeSearch() {
      if (this.openSelect) {
        this.openSelect = false
      }
    },

    resetIndex() {
      this.startIndex = -1
    },
  },
})
</script>

<style lang="scss" scoped>
@import '../main.scss';
</style>
