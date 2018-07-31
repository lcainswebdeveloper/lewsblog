import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import Vue from "vue";

function autoload(component){
    // For each matching filename...
    component.keys().forEach(fileName => {
        // Get the component config
        const componentConfig = component(fileName)
        // Get the PascalCase version of the component name
        const componentName = upperFirst(
            camelCase(
                fileName
                    // Remove the "./_" from the beginning
                    .replace(/^\.\/_/, '')
                    // Remove the file extension from the end
                    .replace(/\.\w+$/, '')
            )
        )
        // Globally register the component
        Vue.component(componentName, componentConfig.default || componentConfig)
    })
}

const requireComponent = require.context(
    // Look for files in the current directory
    './components',
    true,
    /[\w-]+\.vue$/
)
autoload(requireComponent);
