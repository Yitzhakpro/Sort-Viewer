<div align='center'>

# **Sort Viewer**

</div>

<div align='center'>

### React Application that simulates sorting algorithms

</div>

<h4 align='center'>
    <a href="https://github.com/Yitzhakpro/Sort-Viewer/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="Sort Viewer is released under the MIT license." />
    </a>
    <a href="https://github.com/Yitzhakpro/Sort-Viewer/issues">
        <img src="https://img.shields.io/github/commit-activity/m/Yitzhakpro/Sort-Viewer" alt="git commit activity" />
    </a>
    <img src="https://img.shields.io/github/package-json/v/Yitzhakpro/Sort-Viewer" alt="app version" />
</h4>

# About the project

Sort viewer is a React application that helps to understand sorting algorithms by simulating and visualizing them.
<br>
The visualization includes showing which elements are currently being checked and which is going to be swapped, pivot (in quick sort), etc...
<br>
The sorting is customizable, you can control the array size and thg sort speed.
<br>
You can also can view and navigate between each sort step.

# ❓ How the visualization works?

After the user choose clicks on sort, the algorithm is creating an array with sorting steps,
<br>
each sorting step contain the following information:

- array - the current state of the array
- colorMapping - an object that contains indices as `keys` and type of color as `values`.
  <br>
  for example:
  <br>

  ```ts
  // color mapping when checking two elements:
  const colorMappingChecking = {
    0: "CHECK",
    1: "CHECK",
  };

  // color mapping when swapping two elements:
  const colorMappingSwapping = {
    0: "SWAPPING",
    1: "SWAPPING",
  };

  // color mapping with pivot (quick sort):
  const colorMappingWithPivot = {
    0: "CHECK",
    1: "CHECK",
    2: "PIVOT",
  };
  ```

- permanentColorMapping - an object that represent colored indices that should be always be presented, they have 'higher priority' then colorMapping object

A complete sort step looks like this:

```ts
const step = {
  // each element each have id because of swap array elements animation
  array: [
    { id: "1", number: 3 },
    { id: "2", number: 1 },
    { id: "3", number: 2 },
  ],
  colorMapping: {
    0: "CHECK",
    1: "CHECK",
  },
  permanentColorMapping: {
    2: "SORTED",
  },
};
```

After that between each `delay` that the user chose, each step is being rendered to the screen,
<br>
element that needs to be colored, will be colored according to the `color mappings (colorMapping, permanentColorMapping)`.

# 💻 Develop / Setup

**⚠️ This project requires Node.js >= 16.6**

Clone the project:

```console
$ git clone https://github.com/Yitzhakpro/Sort-Viewer.git
```

Install the dependencies:

```console
$ yarn
```

Run dev:

```console
$ yarn dev
```
