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
- Extension: Additing extension will make the file look clearer on its role. This extension will be ignored when compile Example: `MyComponent.component.tsx` // `Home.test.tsx` // `Home.styles.ts`
- StyleSheet "classes": All styling "classes" should be written in _camelCase_. Be specific on naming, avoid giving generic name.

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
- Add `[Refactor]:` if you do code refactoring

Example: `[Fix]: Broken navigation in Profile screen`.
<br />

`[Refactor]: extract code into smaller components in Settings screen`.

## Screen file structure

A screen should show an abstract view of the overall structure of the layout. New developer joining the team can just quickly tell what is where just by scanning this file. <br />

In other words, do not write lenghthy html-like style code. The file will become long and super hard to follow. Instead, organize your code into smaller (composite) components that locate inside the `components` folder of the current feature.

## Component structure

A single component will follow this structure:

```
index.ts
ComponentName.component.tsx
ComponentName.styles.ts
ComponentName.test.tsx
```

So that we have a clear separation of concerns. A file ends with `tsx` simply means it contains some sort of JSX inside.
The `index.ts` file will most likely have something like `export * from "./ComponentName.component"` inside so that you can import this component like so:

```
import { ComponentName } from "../components/ComponentName;
```

Instead of import like this:

```
import { ComponentName } from "../components/ComponentName/ComponentName.component";
```

## Import & Export

Use _name export_ for base components so that other devs can import multiple of them in one line.
Example:

```
import { Text, View, Card } from '../components';
```
