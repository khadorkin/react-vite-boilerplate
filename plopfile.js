/* eslint-disable no-console */
module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Generates new React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What's the name of the component (Example: image-carousel)?",
        validate: function (value) {
          let message = true
          if (!/.+/.test(value)) {
            message = console.error("Missing", "you must define a component name")
          } else if (value.length < 3) {
            message = console.error("Too Short", `"${value}" is not descriptive enough`)
          }
          return message
        },
      },
    ],
    actions: function () {
      return [
        {
          type: "add",
          path: "src/components/{{kebabCase name}}/index.ts",
          templateFile: "./templates/component/index.ts.hbs",
        },
        {
          type: "add",
          path: "src/components/{{kebabCase name}}/{{kebabCase name}}.stories.tsx",
          templateFile: "./templates/component/name.stories.tsx.hbs",
        },
        {
          type: "add",
          path: "src/components/{{kebabCase name}}/{{kebabCase name}}.test.tsx",
          templateFile: "./templates/component/name.test.tsx.hbs",
        },
        {
          type: "add",
          path: "src/components/{{kebabCase name}}/{{kebabCase name}}.component.tsx",
          templateFile: "./templates/component/name.component.tsx.hbs",
        },
        {
          type: "add",
          path: "src/components/{{kebabCase name}}/{{kebabCase name}}.types.ts",
          templateFile: "./templates/component/name.types.ts.hbs",
        },
        {
          type: "modify",
          path: "src/components/index.ts",
          transform(fileContents) {
            return fileContents.replace(/\n$/, "")
          },
        },
        {
          type: "append",
          path: "src/components/index.ts",
          template: 'export * from "./{{kebabCase name}}"\n',
        },
      ]
    },
  })

  plop.setGenerator("page", {
    description: "Generates new React page",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What's the name of the page (Example: news)?",
        validate: function (value) {
          let message = true
          if (!/.+/.test(value)) {
            message = console.error("Missing", "you must define a page name")
          } else if (value.length < 3) {
            message = console.error("Too Short", `"${value}" is not descriptive enough`)
          }
          return message
        },
      },
    ],
    actions: function () {
      return [
        {
          type: "add",
          path: "src/pages/{{kebabCase name}}/index.ts",
          templateFile: "./templates/component/index.ts.hbs",
        },
        {
          type: "add",
          path: "src/pages/{{kebabCase name}}/{{kebabCase name}}.stories.tsx",
          templateFile: "./templates/component/name.stories.tsx.hbs",
        },
        {
          type: "add",
          path: "src/pages/{{kebabCase name}}/{{kebabCase name}}.test.tsx",
          templateFile: "./templates/component/name.test.tsx.hbs",
        },
        {
          type: "add",
          path: "src/pages/{{kebabCase name}}/{{kebabCase name}}.component.tsx",
          templateFile: "./templates/component/name.component.tsx.hbs",
        },
        {
          type: "add",
          path: "src/pages/{{kebabCase name}}/{{kebabCase name}}.types.ts",
          templateFile: "./templates/component/name.types.ts.hbs",
        },
        {
          type: "modify",
          path: "src/pages/index.ts",
          transform(fileContents) {
            return fileContents.replace(/\n$/, "")
          },
        },
        {
          type: "append",
          path: "src/pages/index.ts",
          template: 'export * from "./{{kebabCase name}}"\n',
        },
      ]
    },
  })

  plop.setGenerator("machine", {
    description: "Generates new XState machine",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What's the name of the machine (Example: authState)?",
        validate: function (value) {
          let message = true
          if (!/.+/.test(value)) {
            message = console.error("Missing", "you must define a machine name")
          } else if (value.length < 3) {
            message = console.error("Too Short", `"${value}" is not descriptive enough`)
          }
          return message
        },
      },
    ],
    actions: function () {
      return [
        {
          type: "add",
          path: "src/machines/{{kebabCase name}}/{{kebabCase name}}.machine.ts",
          templateFile: "./templates/machine/name.machine.ts.hbs",
        },
        {
          type: "add",
          path: "src/machines/{{kebabCase name}}/{{kebabCase name}}.machine.test.ts",
          templateFile: "./templates/machine/name.machine.test.ts.hbs",
        },
        {
          type: "add",
          path: "src/machines/{{kebabCase name}}/{{kebabCase name}}.selectors.ts",
          templateFile: "./templates/machine/name.selectors.ts.hbs",
        },
        {
          type: "add",
          path: "src/machines/{{kebabCase name}}/index.ts",
          templateFile: "./templates/machine/index.ts.hbs",
        },
      ]
    },
  })
}
