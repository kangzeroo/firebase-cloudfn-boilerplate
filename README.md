# Kangzeroo's Firebase CloudFN Typescript Boilerplate

This is a demo of Firebase Cloud Functions written in Typescript with developer friendly tooling such as:

- All the [standard benefits](https://apiumhub.com/tech-blog-barcelona/top-typescript-advantages/) of using Typescript
- [TypeDoc](https://typedoc.org/) for autogenerating documentation
- [TSLint](https://palantir.github.io/tslint/) for enforcing clean Typescript code
- [PrettierTS](https://prettier.io/) for clean styled Typescript code
- Husky precommit hook that applies Prettier on git commit
- VSCode Typescript code autocompletion

This boilerplate is useful because the official Firebase Typescript docs are lacking in areas such:

- How to import `types` of firebase services
- How to share `admin.initialize()` across multiple files
- How to structure larger Firebase Cloud Function projects

Use this boilerplate if you want to:

- Deploy highly scalable backends using serverless Firebase/Google Cloud
- Enforce consistent and high code quality
- Enjoy the readability and reliability of static typing with the flexability of Javascript