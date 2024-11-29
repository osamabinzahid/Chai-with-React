function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.Children
    domElement.setAttribute('href', reactElement.props)
    domElement.setAttribute('target', reactElement)

    container.appendChild(domElement)
}


const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    Children: 'Click me to visit the google!'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)