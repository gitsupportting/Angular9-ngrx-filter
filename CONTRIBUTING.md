# Contribution Guidelines

## Getting Started

### Angular App
1. Clone the repository to your local machine
2. `npm install`
3. `ng serve`

## Developing

Please consider these guidelines when filing a pull request:

*  Commits follow the [Conventional Commits convention](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#summary)
*  2 spaces indentation
*  JavaScript is written using ES2018 features or newer
*  Targets NodeJS `10.14.2` or newer.

## Conventional Commits TL;DR

Commit messages must follow this format:

```
<type>([optional ticket number]): <description in imperative mood>

[optional body]

[optional footer]
```

Possible values of `type` include:
* `fix`: a commit of the type `fix` patches a bug in your codebase (this correlates with `PATCH` in semantic versioning).
* `feat`: a commit of the type `feat` introduces a new feature to the codebase (this correlates with `MINOR` in semantic versioning).
* **BREAKING CHANGE**: a commit that has the text `BREAKING CHANGE:` at the beginning of its optional body or footer section introduces a breaking API change (correlating with `MAJOR` in semantic versioning). A breaking change can be part of commits of any _type_. e.g., a `fix:`, `feat:` & `chore:` types would all be valid, in addition to any other type.
* Others: commit types other than `fix:` and `feat:` are allowed, for example [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional) recommends `chore:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, `ci:`, and others.

### Examples

```
feat(ENG-0000): Add widget interface
```

```
fix: Handle exception in edge case
```

```
feat(ENG-0000): Replace widget backend

Replaced the widget backend with a new plumbus-based system.

BREAKING CHANGE:
Widgets can no longer use Gadget IDs. Widgets in the backend with Gadget IDs should be updated to the new Plumbus format.
```