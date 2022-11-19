# Code Convension

Please read and follow the convention so that we can agree upon the common rules and don't end up wasting our time fixing the unnecessary details.

<hr />
<br />
<br />

## Be consistent

Try to spend a bit of time to look into other features/components that are already existed so that you know roughly how to write your code with similar structure. A messy codebase will be very hard to read, to understand & to maintain.

## Respect linters' suggestions

Please have your linter & code formatter (ESLint & Prettier) enabled and follow their suggestions in most cases.

## Naming

- Component name & screen name: all components & screen names will be in _PascalCase_. Example: `MyComponent.component.tsx`
- Hooks & other files: other files will be in _camelCase_. Hooks should always start with the word `use`. Example: `useSystemColor.ts` // `fonts.ts`
- Extension: We're currently using 4 file extensions: `component` | `screen` | `styles` | `test`. Adding extension will make the file look clearer on its role. This extension will be ignored when compile. Example: `Home.screen.tsx` // `Home.test.tsx` // `Home.styles.ts`
- StyleSheet "classes": All styling "classes" should be written in _camelCase_. Be specific on naming, avoid giving generic names, cute names or abbreviations.

Example:

```
export default StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    paddingTop: "10%",
  },
  mainContainer: {
    flex: 1,
    marginTop: "50%",
  },
  singleSlide: {
    width: screenWidth - 60,
    marginHorizontal: 30,
  },
});
```

## Commit format

General rule: Write meaningful & descriptive commit message. Don't worry too much about the character limit suggest.

- Commit label: a regular commit regarding an issue from our Project board should look like this "_XP #issueNumber: commit message_". Example: `XP #10: update <TextInput /> component to accept icon`.
- Add `[Fix]:` at the begining of your commit if you want to fix something.
- Add `[Hotfix]:` if you need to urgenly fix an important piece of code in `develop`.
- Add `[Update]:` if you want to update existed components/screens with additional details.
- Add `[Refactor]:` if you do code refactoring

Example:

```
[Fix]: fix broken navigation in Profile screen

[Refactor]: extract code into smaller components in Settings screen
```

## Component/Screen file structure (the code)

A screen or a composite component should show an abstract view of the overall structure of the layout. New developer joining the team can just quickly tell what is where just by scanning this file. <br />

In other words, do not write lenghthy html-like style code. The file will become long and super hard to follow. Instead, break your code into smaller components that locate inside the `components` folder of the current feature.

```

                 ┌────────────────────────┐
                 │  User Profile screen   │
                 └────────────────────────┘
       ╔═════════════════════════════════════════════╗
       ║ ┌────────────────────────────────────────┐  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ │           <ProfileHeader />            │  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ └────────────────────────────────────────┘  ║
       ║ ┌────────────────────────────────────────┐  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ │            <UserProgress />            │  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ └────────────────────────────────────────┘  ║
       ║ ┌────────────────────────────────────────┐  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ │               <Badges />               │  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ └────────────────────────────────────────┘  ║
       ║ ┌────────────────────────────────────────┐  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ │            <PastProjects />            │  ║
       ║ │                                        │  ║
       ║ │                                        │  ║
       ║ └────────────────────────────────────────┘  ║
       ║                                             ║
       ╚═════════════════════════════════════════════╝
```

## Feature folder structure

A single feature will follow this structure:

```
MyFeature
|_ screens
|_ components
|___ index.ts
|___ ComponentName1
|___ ComponentName2
|___ ComponentName3
```

If the `components` folder contains lots of composite components, an `index.ts` file should be created (reason below).

## Component/Screen folder structure

A single component will follow this structure:

```
ComponentName
|_ index.ts
|_ ComponentName.component.tsx
|_ ComponentName.styles.ts
|_ ComponentName.test.tsx
```

So that we have a clear separation of concerns. A file ends with `tsx` simply means it contains some sort of JSX inside.
The `index.ts` file will most likely have something like `export * from "./ComponentName.component"` inside. <br /> <br />
Reason: so that you can import this component like so:

```
import { ComponentName } from "../components/ComponentName;
```

Instead of import like this:

```
import { ComponentName } from "../components/ComponentName/ComponentName.component.tsx";
```

## Import & Export

Use _name export_ for base components so that other devs can import multiple of them in one line. If you have a first-level `index.ts` (other than the component's `index.ts`) file in your `components` folder, you can import many components like so:

```
import { Text, View, Card } from '../components';
```

Instead of:

```
import { Text } from '../components/Text';
import { Card } from '../components/Card';
```
More on Import & Export: <br />
<img width="70%" alt="importExport" src="https://user-images.githubusercontent.com/45047536/202866545-51d5ebba-eb0b-40c9-baad-a72aa262653a.jpg" />


## Component design

Always try to make your components as loosely coupled as possible. The best way to think of them is imagine making lego blocks. You don't want to make them in a way that they **only work in this project**. So if the requirements change in the next 5 months, we don't have to spend hours of refactoring our components & break the whole codebase.

- **Props**: what are the essential properties that are _required_ to display this component & make it functional? Hide away the optional props by adding the `?` in your `interface` or `type` definition. If the prop is _optional_, we may need a default value.
- **Self-contained vs wrapper component**: components could be designed as wrapper or self-contained ones. <br />
  Example of wrapper components: `<View>...children...</View>` <br />
  Example of self-contained components: `<Avatar source="" />` <br />
  Search on React Native docs to see if you find similar components, it'll be better if we follow their component design convention.
